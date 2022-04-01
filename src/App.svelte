<script lang="ts">
  import Header from "./lib/Header.svelte";
  import HexagonBlockLoading from "./lib/HexagonBlockLoading.svelte";
  import InfoIcon from "./lib/InfoIcon.svelte";
  import TreasureGameLogo from "./lib/Logos/TreasureGameLogo.svelte";
  import ParticipantList from "./lib/ParticipantList.svelte";
  import ScoreBoardCard from "./lib/ScoreBoardCard.svelte";
</script>

<main>
  <Header />

  <!-- Game Logo -->
  <div class="game-logo self-center">
    <TreasureGameLogo />
  </div>

  <!-- Participate -->
  <div class="leftSide min-w-[250px]">
    <div class="w-fit mx-auto">
      <button class="px-20 py-8 text-white font-bold rounded bg-blue-light">
        Participate <span class="font-light">➞</span>
      </button>
      <div class="flex items-center mt-16">
        <InfoIcon />
        <span class="mx-6 font-[650]"
          >Participated: <span class="font-black text-20"> {2} </span></span
        >
      </div>
    </div>
  </div>

  <!-- Main Game -->
  <div class="centerSide -mt-32">
    <ScoreBoardCard />
    <ParticipantList class="mt-26" />
  </div>

  <!-- Block Loading Bar -->
  <div class="rightSide -mt-80 min-w-[250px]">
    <div class="w-fit mx-auto">
      <HexagonBlockLoading />
    </div>
  </div>
</main>

<style>
  :root {
    background: #e9eaef;
    width: 100%;
    height: 100%;
  }

  main {
    margin: 0 auto;
    display: grid;
    grid:
      "logo logo logo" 1fr
      "leftSide centerSide rightSide" 1fr
      / auto 0.6fr auto;
    gap: 8px;

    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: start;
  }

  .game-logo {
    grid-area: logo;
  }
  .leftSide {
    grid-area: leftSide;
  }
  .centerSide {
    grid-area: centerSide;
  }
  .rightSide {
    grid-area: rightSide;
  }
</style>
