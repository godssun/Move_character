<script>
  import { onMount } from "svelte";
  import { db } from "./firebaseConfig.js";
  import { ref, set, onValue } from "firebase/database";

  let characterPosition = { x: 100, y: 100 };
  let characters = {};

  const userId = "user1"; // 유저 ID를 유니크하게 설정

  function updateCharacterPosition() {
    set(ref(db, "characters/" + userId), characterPosition);
  }

  function handleKeydown(event) {
    switch (event.key) {
      case "ArrowUp":
        characterPosition.y -= 5;
        break;
      case "ArrowDown":
        characterPosition.y += 5;
        break;
      case "ArrowLeft":
        characterPosition.x -= 5;
        break;
      case "ArrowRight":
        characterPosition.x += 5;
        break;
    }
    updateCharacterPosition();
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    const characterRef = ref(db, "characters");

    onValue(characterRef, (snapshot) => {
      characters = snapshot.val() || {};
    });

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<div id="gameArea">
  {#each Object.entries(characters) as [id, pos]}
    <div class="character" style="left: {pos.x}px; top: {pos.y}px;"></div>
  {/each}
</div>

<style>
  #gameArea {
    width: 800px;
    height: 600px;
    border: 1px solid #000;
    position: relative;
    overflow: hidden;
  }
  .character {
    width: 40px;
    height: 40px;
    position: absolute;
    background-image: url("/public/character.png"); /* 스프라이트 이미지 경로 */
    background-size: 160px 40px; /* 이미지 크기에 맞게 설정 */
    animation: move 0.5s steps(4) infinite;
  }
  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -160px 0;
    }
  }
</style>
