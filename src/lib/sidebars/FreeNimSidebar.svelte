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
        <ul class="grid items-center grid-cols-1 gap-32 mt-16 xl:mt-32 xl:grid-cols-2 justify-items-center">
            <li class="max-w-sm px-32 py-10">
                <span class="font-medium text-24"> Earn FREE Nimiq </span>
                <p
                    class="font-semibold text-16 text-justify text-[#9E9E9E] mt-20"
                >
                    Welcome to the Nimiq Treasury Game. There are plenty of
                    opportunities to earn free Nimiq, and join the Nimiq
                    Treasury Game. See below.
                </p>
            </li>
            {#each options as option}
                <li
                    class="max-w-sm px-32 py-10 border-1 border-blue-dark/20 rounded-32 bg-gradient-to-t from-grey-light to-white"
                >
                    <span class="font-bold text-blue-dark text-17">
                        {option.name}
                    </span>
                    <!-- Divider -->
                    <hr class="my-6 border-t-1 border-blue-dark/20" />
                    <div
                        class="grid grid-flow-col grid-cols-[min-content,1fr] grid-rows-2 py-4 gap-x-32 text-14"
                    >
                        <img
                            class="self-end mb-18"
                            src={option.logo}
                            alt={option.name}
                        />
                        <a
                            class="self-start px-12 py-2 font-bold text-white rounded bg-blue-light w-max"
                            href={option.url}
                            target={option.url.startsWith("http")
                                ? "_blank"
                                : "_self"}
                            rel="noopener noreferrer"
                        >
                            {option.buttonText}
                        </a>
                        <div class="row-[1_/_-1]">
                            {#if option.notice}
                                <span class="font-bold text-14 text-blue-light">
                                    {option.notice}
                                </span>
                                <br />
                            {/if}
                            <p
                                class="font-semibold text-14 text-justify text-[#9E9E9E]"
                            >
                                {option.description}
                            </p>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</SidebarPanel>
