<script lang="ts">
    import InfoIcon from "$lib/icons/InfoIcon.svelte";
    import CashlinkCard from "$lib/modal/CashlinkCard.svelte";
    import { url, userCashlink, wallet } from "$store";

    const handleLogout = () => {
        $userCashlink = null;
        $wallet = null;
        url.navigate("");
    };
</script>

<div class="flex flex-col items-center px-40 gap-y-32">
    <h1 class="font-bold text-24">Log out</h1>
    <CashlinkCard />
    <div class="flex items-center justify-evenly">
        <InfoIcon class="w-26 h-26" />
        <span class="font-bold text-12 text-black/50 mx-14">
            Are you sure you want to log out ?
        </span>
    </div>
    <button
        class="w-full py-8 font-extrabold text-black/40 bg-grey rounded-24 text-16 border-black/40 border-2"
        on:click={handleLogout}
    >
        Log out
    </button>
</div>
