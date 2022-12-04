<script lang="ts">
    import InfoIcon from "$lib/icons/InfoIcon.svelte";
    import CashlinkCard from "$lib/modal/CashlinkCard.svelte";
    import CashlinkInput from "./CashlinkInput.svelte";
    import { url, userCashlink } from "$store";

    let balance = 0,
        cashlink = "";

    const handleLogin = () => {
        if (balance < 1) return;
        $userCashlink = cashlink;
        url.navigate("");
    };
</script>

<div class="flex flex-col items-center px-40 gap-y-32">
    <h1 class="font-bold text-24">Login using a Cashlink</h1>
    <CashlinkCard {cashlink} />
    <div class="flex items-center justify-evenly">
        <InfoIcon class="w-26 h-26" />
        <span class="font-bold text-12 text-black/50 mx-14">
            No funded cashlink yet? Fund your cashlink first
        </span>
    </div>
    <CashlinkInput
        on:balance={({ detail }) => (balance = detail)}
        on:cashlink={({ detail }) => (cashlink = detail)}
    />
    <button
        class="w-full py-8 font-extrabold text-white bg-linear-button-blue rounded-24 text-16"
        on:click={handleLogin}
    >
        Log in
    </button>
</div>
