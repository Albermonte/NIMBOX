<script lang="ts">
    import InfoIcon from "$lib/buttons/InfoButton.svelte";
    import CashlinkCard from "$lib/components/CashlinkCard.svelte";
    import { url, userCashlink, wallet } from "$store";

    const handleLogout = () => {
        $userCashlink = null;
        $wallet = null;
        url.navigate("");
    };
</script>

<div class="flex flex-col items-center px-40 gap-y-32">
    <h1 class="font-bold text-24">Log out</h1>
    <CashlinkCard showFundButton={false} />
    <div class="flex items-center justify-evenly">
        <InfoIcon>
            <span class="font-extrabold text-17">Log out</span>
            <ul
                class="font-semibold text-14 text-[#CCCCCC] list-disc list-outside pb-2"
            >
                <li>
                    You can log in with your Cashlink again whenever you want.
                </li>
                <li>
                    No funds will be lost when you log out, you will stay in
                    control of your own funds.
                </li>
            </ul>
        </InfoIcon>
        <span class="font-bold text-12 text-black/50 mx-14">
            Are you sure you want to log out ?
        </span>
    </div>
    <button
        class="w-full py-8 font-extrabold border-2 text-black/40 bg-grey rounded-24 text-16 border-black/40"
        on:click={handleLogout}
    >
        Log out
    </button>
</div>
