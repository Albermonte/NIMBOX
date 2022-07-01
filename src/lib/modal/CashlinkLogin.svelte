<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";

    const dispatch = createEventDispatcher();

    let btnDisabled = true;
    let cashlink: string =
        "https://hub.nimiq-testnet.com/cashlink/#ejClrJSNVqSooeG6L87PEobDP8UMY6VTAFahTwvZAcYAAAAAAJiWgA==";
</script>

<div class="grid grid-rows-[1fr_auto]" in:fly={{ x: 25 }}>
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
        <span>Balance: {0} NIM</span>
    </div>
    <!-- Buttons -->
    <div class="flex items-center justify-between px-8">
        <button
            class="px-12 py-2 font-semibold text-white transition-all duration-100 rounded text-15 bg-red hover:drop-shadow-md"
            on:click={() => dispatch("goBack")}>Go back</button
        >
        <button
            disabled={btnDisabled}
            class="px-12 py-2 font-semibold text-white rounded text-15 {btnDisabled ? "bg-blue-dark/80 text-grey-dark/90" : "bg-[#0582CA] text-white"} hover:drop-shadow-md transition-all duration-100"
            >Login</button
        >
    </div>
</div>
