<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import CashlinkCard from "$lib/modal/CashlinkCard.svelte";
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;
</script>

<SidebarPanel
    {right}
    icon="cashlink"
    iconStyle="!w-[330px] absolute -top-[90px] -right-128"
    width="42vw"
>
    <div class="flex flex-col h-full">
        <div class="flex flex-col justify-center px-80 h-1/3 gap-18">
            <h1 class="w-2/3 font-extrabold text-black text-22">
                Why is Nimiq Treasury using the non-custodial Cashlinks?
            </h1>
            <p class="font-bold mb-22 text-16 text-black/50">
                Let's start by describing what "Non-Custodial" actually is. It
                basically means that you are always in control of your money and
                at no point does a third party (Nimiq or anybody else) hold
                custody of it (or its private key).
            </p>
        </div>
        <div class="bg-[#EDF1F7] rounded-8 py-36 px-80 flex-grow">
            <h1 class="flex items-center font-bold text-black text-22">
                Fund Cashlink
                <Divider />
            </h1>
            <ul
                class="my-32 font-semibold list-disc ml-18 text-16 text-black/50"
            >
                <li>
                    Fund your Cashlink with the amount of NIM you want. Each
                    time you click on the Play button, 1 NIM will be substracted
                    from that Cashlink and used to play.
                </li>
                <br />
                <li>A Cashlink looks like this:</li>
            </ul>
            <div
                class="px-20 py-10 rounded-6 bg-white border-1 border-[#D6D6D6] mb-48"
            >
                <span class="font-semibold break-words text-16 text-black/50">
                    https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA==
                </span>
            </div>
            <CashlinkCard class="mx-auto w-fit-content" />
        </div>
    </div>
</SidebarPanel>

<style>
    li {
        margin-bottom: 0.75rem;
    }
</style>
