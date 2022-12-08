<script lang="ts">
    import { getWalletFromCashlink, getWalletBalance } from "$utils/cashlink";
    import { client, established } from "nimiq-svelte-stores";
    import { wallet } from "$store";
    import { createEventDispatcher } from "svelte";

    import cashlinkWithEffects from "/assets/cashlink-with-effects.svg";

    const dispatch = createEventDispatcher();

    export let cashlink = "",
        triangle = false,
        trianglePositionLeft = 0;
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
</script>

<div
    bind:this={cashlinkCardElement}
    class=" bg-grey flex border-[#D6D6D6] border-1 rounded-8 py-20 px-28 shadow-around gap-56 {componentClass}"
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
        <span class="font-semibold text-16 text-black/60">Cashlink amount</span>
        {#key balance}
            <span class="font-bold text-black text-32">{balance} NIM</span>
        {/key}
        <span class="font-semibold text-12 text-black/40"
            >{shortAddress || "No funded Cashlink yet"}</span
        >
    </div>
    <div>
        <img
            src={cashlinkWithEffects}
            width="53"
            height="50"
            alt="Cashlink Logo"
            class="mx-auto"
        />
        <button
            class="py-10 mx-auto mt-10 font-extrabold text-white px-14 bg-linear-button-green text-12 rounded-24"
            on:click={() => {
                if ($wallet) {
                    window.open(
                        `https://wallet.nimiq${
                            import.meta.env.DEV && "-testnet"
                        }.com/nimiq:${$wallet.address
                            .toUserFriendlyAddress()
                            .replace(/\s/g, "")}`,
                        "_blank"
                    );
                } else {
                    window.open(
                        `https://wallet.nimiq${
                            import.meta.env.DEV && "-testnet"
                        }.com/send/nim`,
                        "_blank"
                    );
                }
            }}>Fund Cashlink</button
        >
    </div>
</div>
