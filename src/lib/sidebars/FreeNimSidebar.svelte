<script lang="ts">
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;

    let options = [
        {
            name: "Nimiq Treasury GIVEAWAY",
            logo: "/assets/treasury-logo.svg",
            notice: "Huge Giveaways up to 1000$",
            description:
                "Share the game on twitter. And get a chance to win a giveaway with every target we reach.",
            buttonText: "Rules",
            url: "/#/giveaway",
        },
        {
            name: "Nimiq Sunset Cyberspace Game",
            logo: "/assets/treasury-logo.svg",
            notice: "",
            description:
                "Score points, beat your own records and earn as many NIM as you can meanwhile.",
            buttonText: "Play",
            url: "https://play.google.com/store/apps/details?id=com.nimiqsunsetcyberspace",
        },
        {
            name: "Nimtris Game",
            logo: "/assets/treasury-logo.svg",
            notice: "",
            description:
                "Earn NIM by stopping blocks from leaving the inside of the outer grey hexagon.",
            buttonText: "Play",
            url: "https://nimtris.com/",
        },
        {
            name: "Nimiq Live on Twitch",
            logo: "/assets/treasury-logo.svg",
            notice: "",
            description:
                "NimiqLIVE is a 24/7 educational channel for the Nimiq Blockchain. Earn NIM for participating on this channel.",
            buttonText: "Watch",
            url: "https://www.twitch.tv/nimiqlive",
        },
        {
            name: "Buy Nimiq",
            logo: "/assets/treasury-logo.svg",
            notice: "",
            description:
                "Want to play the game without limits? Then buy nimiq from the open market and play from your own wallet.",
            buttonText: "Buy ⬣",
            url: "https://www.nimiq.com/buy-and-sell/",
        },
    ];
</script>

<SidebarPanel {right}>
    <div class="flex flex-wrap gap-x-20 gap-y-56">
        <div class="mx-auto w-320">Earn FREE Nimiq</div>
        {#each options as option}
            <div
                class="border-1 border-blue-dark/20 rounded-32 px-32 py-10 min-h-[154px] w-360 mx-auto"
            >
                <span class="font-bold text-blue-dark text-17">
                    {option.name}
                </span>
                <!-- Divider -->
                <hr class="my-6 border-t-1 border-blue-dark/20" />
                <div class="flex py-4">
                    <div
                        class="flex flex-col items-center justify-center min-w-[65px] mr-20"
                    >
                        <img
                            class="max-w-[65px] mb-18"
                            src={option.logo}
                            alt={option.name}
                        />
                        <button
                            class="px-10 font-bold text-white rounded bg-blue-light text-14"
                            on:click={() => {
                                // TODO: const newTab = 
                                window.open(option.url, "_blank").focus();
                            }}
                        >
                            {option.buttonText}
                        </button>
                    </div>
                    <div>
                        {#if option.notice}
                            <span class="font-bold text-14 text-blue-light">
                                {option.notice}
                            </span>
                            <br />
                        {/if}
                        <span class="font-semibold text-14 text-[#9E9E9E]">
                            {option.description}
                        </span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</SidebarPanel>
