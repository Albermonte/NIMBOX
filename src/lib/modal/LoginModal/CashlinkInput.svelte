<script lang="ts">
    import { isValidCashlink, getWalletFromCashlink, getWalletBalance } from "$utils/cashlink";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let cashlink: string = "";
    let isValid: boolean;
    let errorMessage: string = "";
    let balance = 0;

    $: {
        isValid = isValidCashlink(cashlink);
        if (isValid) {
            updateBalance();
            dispatch("cashlink", cashlink);
        } else {
            errorMessage = "Invalid Cashlink, check everything is OK";
            dispatch("cashlink", "");
            dispatch("balance", 0);
        }
        if (!cashlink.length) {
            isValid = true;
            dispatch("cashlink", "");
            dispatch("balance", 0);
        }
    }

    const updateBalance = async () => {
        const wallet = getWalletFromCashlink(cashlink);
        balance = await getWalletBalance(wallet);
        dispatch("balance", balance);
        if (balance < 1) {
            isValid = false;
            errorMessage = "Cashlink needs to have 1 NIM or more";
        } else isValid = true;
    };
</script>

<input
    class="w-full px-14 py-8 text-ellipsis text-center transition-colors duration-100 rounded-8 outline-none border-1 border-blue-dark/[0.15] hover:border-blue-dark/20 focus:border-blue-dark/30"
    placeholder="Enter your Cashlink URL here"
    bind:value={cashlink}
/>
{#if isValid === false}
    <span class="-mt-20 font-light text-13 text-red"> {errorMessage}</span>
{/if}
