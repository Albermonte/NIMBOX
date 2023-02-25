<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import HexagonBlockLoading from "$lib/components/HexagonBlock.svelte";
  import ParticipantList from "$lib/components/ParticipantList.svelte";
  import ScoreBoardCard from "$lib/components/BalanceDisplay.svelte";
  import PlayBlock from "$lib/components/PlayBlock.svelte";
  import SidebarsManager from "$lib/sidebars/SidebarsManager.svelte";
  import NimboxLogo from "$lib/components/NimboxLogo.svelte";
  // import LoginAlert from "$lib/buttons/LoginAlert.svelte";
  import InfoIcon from "$lib/buttons/InfoButton.svelte";

  import { start, established } from "nimiq-svelte-stores";
  import { userCashlink, wallet } from "$store";
  import { getWalletFromCashlink } from "$utils/cashlink";
  import { onMount } from "svelte";

  // TODO: Import from .env
  const gameAddress = "NQ38 5QM1 6E26 UUB1 XMU3 01JN 3RLV HAN9 U6MF";

  let isMobile = false;
  let windowWidth = 0;
  $: windowWidth < 1152 ? (isMobile = true) : (isMobile = false);

  $: $established &&
    $userCashlink &&
    ($wallet = getWalletFromCashlink($userCashlink));

  onMount(async () => {
    // Only show error logs
    // Nimiq.Log.instance.level = Nimiq.Log.ERROR;
    await start((config) => {}, {
      network: import.meta.env.DEV ? "test" : "main",
    });
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="w-full h-screen overflow-x-hidden bg-white">
  <div class="bg-[#EDF1F7] flex flex-col items-center h-[calc(50%-45px-32px)]">
    <Header />
    <div class="my-auto text-center transition-all">
      <NimboxLogo />
      <div class="flex items-center justify-center gap-6">
        <InfoIcon />
        <a
          class="px-16 py-8 font-extrabold bg-white cursor-pointer text-black/60 text-14 rounded-24"
          href="https://{import.meta.env.DEV
            ? 'test.'
            : ''}nimiq.watch/#{gameAddress}"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIMBOX ➞
        </a>
      </div>
      <!-- 
      {#if $established && !$wallet && !$userCashlink}
        <LoginAlert />
      {/if} 
      -->
    </div>
  </div>

  <!-- Desktop -->
  <div
    class="grid h-[45px] bg-[#EDF1F7] invisible xl:visible xl:grid-cols-[2fr_532px_2fr]"
  >
    <div />
    <div class="rounded-t-[28px] bg-white shadow-inset" />
    <div />
  </div>

  <div
    class="w-full grid h-[32px] grid-cols-2 xl:grid-cols-[2fr_500px_2fr] gap-x-16"
  >
    <!-- Left side bg grey -->
    <div
      class="w-full rounded-br-[28px] bg-[#EDF1F7] relative hidden xl:block shadow-bottom-left"
    >
      <PlayBlock
        class="absolute -translate-x-1/2 -translate-y-56 w-max left-1/2"
      />
    </div>
    <div class="bg-white relative col-span-2 xl:col-[2_/_span_1]">
      <div class="xl:mx-auto xl:absolute px-10 -top-24 w-[500px]">
        <ScoreBoardCard />
        <ParticipantList class="mt-26 w-456" />
      </div>
    </div>
    <!-- Right side bg grey -->
    <div
      class="w-full rounded-bl-[28px] bg-[#EDF1F7] relative hidden xl:block shadow-bottom-right"
    >
      <HexagonBlockLoading
        class="absolute -translate-x-1/2 -translate-y-[68px] w-max left-1/2"
      />
    </div>
    <Footer />
  </div>
</main>

<SidebarsManager />

<style>
  .shadow-bottom-right {
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.05),
      -3px 1px 2px rgba(0, 0, 0, 0.02);
  }
  .shadow-bottom-left {
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.05), 3px 1px 2px rgba(0, 0, 0, 0.02);
  }

  .shadow-inset {
    box-shadow: inset 0px 3px 2px rgba(0, 0, 0, 0.07);
  }
</style>
