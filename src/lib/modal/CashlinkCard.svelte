<script>
    import { getWalletFromCashlink, getWalletBalance } from "$utils/cashlink";
    import { client, established } from "nimiq-svelte-stores";
    import { wallet } from "$store";

    import cashlinkWithEffects from "/assets/cashlink-with-effects.svg";

    export let cashlink = "";
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
    class=" bg-grey flex border-[#D6D6D6] border-1 rounded-8 py-20 px-28 shadow-around gap-56"
>
    <div class="flex flex-col">
        <span class="font-semibold text-16 text-black/60">Cashlink amount</span>
        <span class="font-bold text-black text-32">{balance} NIM</span>
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
                            .replace(/\s/g, '')}`,
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
