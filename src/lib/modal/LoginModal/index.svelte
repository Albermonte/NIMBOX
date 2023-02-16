<script lang="ts">
    import InfoIcon from "$lib/icons/InfoIcon.svelte";
    import CashlinkCard from "$lib/components/CashlinkCard.svelte";
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
        <InfoIcon>
            <span class="font-extrabold text-17">Fund your Cashlink</span>
            <ul
                class="font-semibold text-14 text-[#CCCCCC] list-disc list-outside"
            >
                <li>
                    Fund your Cashlink with the amount of NIM you want. Each
                    time you click on the play button, 1 NIM will be substracted
                    from that Cashlink and used to play.
                </li>
                <li>A Cashlink looks like this:</li>
                <div class="p-8 my-6 rounded-6 bg-[#3b3e5e] w-344">
                    <a
                        href="https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-semibold break-words text-14 text-[#CCCCCC] underline"
                    >
                        https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA==
                    </a>
                </div>
            </ul>
            <div class="flex justify-center py-10">
                <a
                    class="px-12 py-8 font-bold text-white bg-linear-button-blue rounded-24 text-14"
                    href="https://www.nimiq.com/blog/nimiq-cashlinks/"
                    target="_blank"
                    rel="noreferrer"
                    >More info about Cashlinks
                </a>
            </div>
        </InfoIcon>
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
