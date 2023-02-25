<script lang="ts">
    import { getWalletFromCashlink, getWalletBalance } from "$utils/cashlink";
    import { client, established } from "nimiq-svelte-stores";
    import { wallet, url } from "$store";
    import { createEventDispatcher } from "svelte";

    import cashlinkWithEffects from "/assets/cashlink-logo.svg";

    const dispatch = createEventDispatcher();

    export let cashlink = "",
        extraInfo = false,
        triangle = false,
        trianglePositionLeft = 0,
        showFundButton = true;
    let componentClass: string = "",
        componentStyle: string = "";
    export { componentClass as class, componentStyle as style };

    let cashlinkCardElement: HTMLDivElement;

    $: cashlinkCardElement &&
        dispatch("cashlinkCardElement", cashlinkCardElement);

    let balance = 0,
        address = "",
        shortAddress = "";

    $: {
        if (cashlink) {
            const wallet = getWalletFromCashlink(cashlink);
            getWalletBalance(wallet).then((n) => {
                balance = n;
            });
            address = wallet.address.toUserFriendlyAddress();
        } else if ($wallet && $established) {
            client.getAccount($wallet.address).then((account) => {
                balance = account.balance / 1e5;
            });
            address = $wallet.address.toUserFriendlyAddress();
        } else {
            balance = 0;
            address = "";
            shortAddress = "";
        }
    }

    // ●●●   •••
    $: address &&
        (shortAddress = address.slice(0, 4) + " ••• " + address.slice(-4));

    const fundCashlinkURL = () => {
        if ($wallet) {
            return `https://wallet.nimiq${
                import.meta.env.DEV ? "-testnet" : ""
            }.com/nimiq:${$wallet.address
                .toUserFriendlyAddress()
                .replace(/\s/g, "")}`;
        } else {
            return `https://wallet.nimiq${
                import.meta.env.DEV ? "-testnet" : ""
            }.com/send/nim`;
        }
    };
</script>

<div
    bind:this={cashlinkCardElement}
    class=" bg-grey grid grid-cols-[6fr_4fr] border-[#D6D6D6] border-1 rounded-8 py-20 px-28 shadow-around gap-20 {componentClass}"
    style={componentStyle}
>
    {#if triangle}
        <div
            class="absolute -top-14 h-0 w-0 border-[#D6D6D6] border-x-8 border-b-[14px] border-x-transparent"
            style="left: {trianglePositionLeft}px;"
        >
            <div
                class="relative h-0 w-0 top-2 -left-[6px] border-grey border-x-[6px] border-b-[12px] border-x-transparent"
            />
        </div>
    {/if}
    <div class="flex flex-col">
        <span class="font-semibold text-16 text-black/60">Cashlink Balance</span
        >
        {#key balance}
            <span class="font-bold text-black text-32">{balance} NIM</span>
        {/key}
        <span class="font-semibold text-12 text-black/40"
            >{shortAddress || "No funded Cashlink yet"}</span
        >
        {#if extraInfo}
            <button
                class="flex items-center gap-6 mt-22"
                on:click={() => url.navigate("cashlink-info")}
            >
                <div class="p-6 bg-black rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        class="w-10 h-10"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <span class="font-bold text-12 text-black/40"
                    >More info about Cashlinks?</span
                >
            </button>
        {/if}
    </div>
    <div>
        <img
            src={cashlinkWithEffects}
            alt="Cashlink Logo"
            class="mx-auto {showFundButton ? 'h-[50px]' : 'h-full'}"
        />
        {#if showFundButton}
            <a
                class="py-4 mx-auto mt-10 font-extrabold text-white px-10 bg-linear-button-green text-12 rounded-24"
                href={fundCashlinkURL()}
                target="_blank"
                rel="noopener noreferrer"
            >
                Fund Cashlink
            </a>
        {/if}
    </div>
</div>
