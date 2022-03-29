<script lang="ts">
  import Header from "./lib/Header.svelte";
  import InfoIcon from "./lib/InfoIcon.svelte";
  import NimiqLogo from "./lib/Logos/NimiqLogo.svelte";
  import TreasureGameLogo from "./lib/Logos/TreasureGameLogo.svelte";
  import ParticipantList from "./lib/ParticipantList.svelte";
  import ScoreBoardCard from "./lib/ScoreBoardCard.svelte";
</script>

<main class="flex flex-col">
  <!-- Header -->
  <!-- TODO: position absolute for scroll -->
  <Header />

  <!-- Game Logo -->
  <div class="relative flex items-center justify-center flex-grow shadow pb-64">
    <TreasureGameLogo />
  </div>

  <!-- Game -->
  <div class="flex-grow bg-grey-darker">
    <div class="relative flex -mt-16 justify-evenly">
      <!-- Participate -->
      <div>
        <button class="px-20 py-8 text-white font-bold rounded bg-blue-light">
          Participate ➞</button
        >
        <div class="flex items-center mt-16">
          <InfoIcon />
          <span class="mx-6 font-semibol"
            >Participated: <span class="font-black"> {2} </span></span
          >
        </div>
      </div>

      <!-- Main Game -->
      <div>
        <!-- Score Board Card -->
        <ScoreBoardCard />
        <!-- Age/Participant Bar -->
        <ParticipantList class="mt-26" />
      </div>

      <!-- Block Loading Bar -->
      <div>
        <div>
          <span class="font-bold"> 3/6 blocks </span>
          <InfoIcon />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  :root {
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }

  main {
    margin: 0 auto;
    height: auto;
    min-height: 100%;
  }

  .bg-grey-darker {
    background: #e9eaef;
  }
</style>
