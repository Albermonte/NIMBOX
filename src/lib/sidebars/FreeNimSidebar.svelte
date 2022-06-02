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
    <div class="h-full overflow-auto gap-x-20 gap-y-56 scrollbar scroll-smooth">
        <ul class="grid grid-cols-1 gap-32 mt-16 xl:mt-32 xl:grid-cols-2">
            <li class="mx-auto w-320 text-24 font-medium">Earn FREE Nimiq</li>
        {#each options as option}
            <li
                class="px-32 py-10 border-1 border-blue-dark/20 rounded-32"
            >
                <span class="font-bold text-blue-dark text-17">
                    {option.name}
                </span>
                <!-- Divider -->
                <hr class="my-6 border-t-1 border-blue-dark/20" />
                <div class="grid grid-flow-col grid-cols-[min-content,1fr] grid-rows-2 py-4 gap-x-32 text-14">
                    <img
                        class="mb-18 self-end"
                        src={option.logo}
                        alt={option.name}
                    />
                    <button
                        class="px-12 py-2 font-bold text-white rounded bg-blue-light self-start w-max"
                        on:click={() => {
                            // TODO: const newTab = 
                            window.open(option.url, "_blank").focus();
                        }}
                    >
                        {option.buttonText}
                    </button>
                    <div class="row-[1_/_-1]">
                        {#if option.notice}
                            <span class="font-bold text-14 text-blue-light">
                                {option.notice}
                            </span>
                            <br />
                        {/if}
                        <p class="font-semibold text-14 text-justify text-[#9E9E9E]">
                            {option.description}
                        </p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

    </div>
</SidebarPanel>
