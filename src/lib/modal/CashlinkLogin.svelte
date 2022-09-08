<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";

    import { url, userCashlink } from "../../store";
    import {
        isValidCashlink,
        getCashlinkBalance,
    } from "../../utils/cashlink";

    const dispatch = createEventDispatcher();

    let cashlink: string = "";
    let isValid: boolean;
    let errorMessage: string = "";
    let balance = 0;
    $: {
        isValid = isValidCashlink(cashlink);
        if (isValid) updateBalance();
        else errorMessage = "Invalid Cashlink, check everything is OK";
        if (!cashlink.length) isValid = true;
    }

    const updateBalance = async () => {
        balance = await getCashlinkBalance(cashlink);
        if (balance < 1) {
            isValid = false;
            errorMessage = "Cashlink needs to have 1 NIM or more";
        } else isValid = true;
    };

    const handleLogin = () => {
        if (balance < 1) return;
        $userCashlink = cashlink;
        url.navigate("");
    };
</script>

<div class="grid grid-rows-[1fr_auto]" in:fly={{ y: 25 }}>
    <div
        class="flex flex-col items-center justify-evenly gap-y-40 my-auto leading-1.6 text-blue-dark/60 text-20"
    >
        <p class="text-center">
            <b class="font-bold text-blue-light">1 NIM</b> equals
            <b class="font-bold text-blue-light">1 try</b>
        </p>
        <input
            type="text"
            placeholder="Your funded Cashlink here..."
            bind:value={cashlink}
            class="w-10/12 px-16 py-1 text-ellipsis text-center transition-colors duration-100 rounded outline-none xl:w-3/4 border-1 border-blue-dark/[0.15] hover:border-blue-dark/20 focus:border-blue-dark/30"
        />
        {#if isValid === false}
            <span class="text-13 text-red font-light -mt-32">
                {errorMessage}</span
            >
        {/if}
        <span
            >Balance: <span class="text-gold font-bold">{balance} NIM</span
            ></span
        >
    </div>
    <!-- Buttons -->
    <div class="flex items-center justify-between px-8">
        <button
            class="px-12 py-2 font-semibold text-white transition-all duration-100 rounded text-15 bg-red hover:drop-shadow-md"
            on:click={() => dispatch("goBack")}>Go back</button
        >
        <button
            disabled={!isValid || !cashlink.length}
            class="px-12 py-2 font-semibold text-white rounded text-15 {!isValid ||
            !cashlink.length
                ? 'bg-blue-dark/80 text-grey-dark/90'
                : 'bg-[#0582CA] text-white'} hover:drop-shadow-md transition-all duration-100"
            on:click={handleLogin}>Login</button
        >
    </div>
</div>
