<script lang="ts">
    import BuyNIMButton from "$lib/buttons/BuyNIMButton.svelte";
    import FaqButton from "$lib/buttons/FaqButton.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import SidebarPanel from "./SidebarPanel.svelte";

    let options = [
        {
            name: "Nimiq Sunset Cyberspace Game",
            logo: "/assets/ncs-logo.png",
            notice: "",
            description:
                "Score points, beat your own records and earn as many NIM as you can meanwhile. Available on Android phones.",
            buttonText: "Play",
            url: "https://play.google.com/store/apps/details?id=com.nimiqsunsetcyberspace",
        },
        {
            name: "Nimtris Game",
            logo: "/assets/nimtris-logo.png",
            notice: "",
            description:
                "Earn NIM by stopping blocks from leaving the inside of the outer grey hexagon. Available on all major browsers.",
            buttonText: "Play",
            url: "https://nimtris.com/",
        },
        {
            name: "HexTank.io",
            logo: "/assets/hexatank-logo.png",
            notice: "",
            description:
                "HexTank.io 3 is a play-to-earn Web3 instant game built on the Nimiq blockchain. Available on all major browsers.",
            buttonText: "Play",
            url: "https://hextank.io/",
        },
        {
            name: "Nimiq Live on Twitch",
            logo: "/assets/nimiq-live-logo.svg",
            notice: "",
            description:
                "NimiqLIVE is a 24/7 educational channel for the Nimiq Blockchain. Earn NIM for participating on this channel.",
            buttonText: "Watch",
            url: "https://www.twitch.tv/nimiqlive",
        },
        {
            name: "NIMBOX GIVEAWAY",
            logo: "/assets/nimbox-logo.svg",
            notice: "Huge Giveaways up to 1000$",
            description:
                "Share the game on twitter. And get a chance to win a giveaway with every target we reach.",
            buttonText: "Rules",
            url: "/#/share-and-win",
        },
        {
            name: "Buy NIM",
            logo: "/assets/nimiq-logo.svg",
            notice: "",
            description:
                "Want to play the game without limits? Then buy NIM from the open market and play from your own wallet.",
            buttonText: "Buy",
            url: "https://www.nimiq.com/buy-and-sell/",
        },
    ];
</script>

<SidebarPanel>
    <svelte:fragment slot="top">
        <h1 class="font-extrabold text-black text-22">Earn FREE NIM</h1>
        <p class="mb-20 font-bold text-16 text-black/50">
            Welcome to the Nimiq Treasury Game. There are plenty of
            opportunities to WIN and earn FREE NIM. Play one of the games
            created by other community members to earn NIM!
        </p>
        <div class="flex items-center mt-20 mb-40">
            <BuyNIMButton />
            <FaqButton />
            <Divider />
        </div>
    </svelte:fragment>
    <!-- Games -->
    <svelte:fragment slot="card-title">Apps</svelte:fragment>
    <svelte:fragment slot="custom-divider">
        <p class="w-3/5 mx-auto font-semibold text-black/50 text-14">
            <b>TIP:</b> The NIM you earned from the games can be used again for a
            chance to win the treasury chest!
        </p>
    </svelte:fragment>
    <!-- Games -->
    <div slot="content" class="flex flex-wrap justify-between gap-48 pb-40">
        {#each options as option}
            <div class="pr-16 bg-black rounded-32 w-280 h-150 py-14 pl-22">
                <div class="flex flex-col h-full">
                    <span class="font-bold text-white text-14">
                        {option.name}
                    </span>
                    <div
                        class="grid grid-cols-[1fr,min-content] gap-x-16 items-center flex-1 mb-8"
                    >
                        <div class="row-[1_/_-1] text-11">
                            {#if option.notice}
                                <span class="font-bold text-blue-light">
                                    {option.notice}
                                </span>
                                <br />
                            {/if}
                            <p class="font-semibold text-justify text-white/80">
                                {option.description}
                            </p>
                        </div>
                        <div class="w-56 h-56 bg-white rounded">
                            <img
                                class="object-contain w-full h-full p-4"
                                src={option.logo}
                                alt={option.name}
                            />
                        </div>
                    </div>
                </div>
                <a
                    class="relative bottom-6 mx-auto block px-22 py-4 font-bold text-white text-20 uppercase rounded-[12px] bg-linear-button-blue w-max"
                    href={option.url}
                    target={option.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                >
                    {option.buttonText}
                </a>
            </div>
        {/each}
    </div>
</SidebarPanel>
