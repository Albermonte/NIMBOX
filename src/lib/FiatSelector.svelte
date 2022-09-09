<script lang="ts">
    import { fly } from "svelte/transition";
    import { selectedFiat, selectedCurrency } from "../store";
    import { SupportedCurrencies } from "../types";

    let hover = false;
    let SupportedCurrenciesList: SupportedCurrencies[];
    // Removing selected fiat and NIM from the list
    // @ts-ignore
    $: SupportedCurrenciesList = Object.values(SupportedCurrencies)
        .filter((_, i) => i % 2 === 0)
        .filter((c) => c !== $selectedFiat)
        .filter((c) => c !== SupportedCurrencies.NIM);

    $: {
        if ($selectedCurrency !== SupportedCurrencies.NIM) {
            $selectedCurrency = $selectedFiat;
        }
    }
</script>

<div
    class="flex items-center h-40 min-w-[120px] justify-evenly hover:cursor-pointer"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
>
    <div>
        <div
            class="flex px-12 py-6 rounded-tl-16 min-w-[96px] w-96 hover:bg-blue-dark/80 {hover
                ? 'bg-blue-dark'
                : ''}"
        >
            <img src="/assets/icons/{$selectedFiat}-icon.svg" alt="" />
            <span
                class="mx-auto font-bold text-{hover
                    ? 'white'
                    : 'black'} uppercase text-15">{$selectedFiat}</span
            >
        </div>

        <!-- TODO: Add more fiat? and use a loop -->

        {#if hover}
            {#each SupportedCurrenciesList as currency, i}
                <div
                    class="flex px-12 py-6 min-w-[96px] w-96 hover:bg-blue-dark/80 {hover
                        ? 'bg-blue-dark absolute'
                        : ''} {i === SupportedCurrenciesList.length - 1
                        ? 'rounded-b-16'
                        : ''}"
                    in:fly={{ opacity: 1, y: -20 }}
                    out:fly={{ opacity: 0, y: -10, duration: 150 }}
                    on:click={() => ($selectedFiat = currency)}
                >
                    <img src="/assets/icons/{currency}-icon.svg" alt="" />

                    <span
                        class="mx-auto font-bold text-{hover
                            ? 'white'
                            : 'black'} uppercase text-15">{currency}</span
                    >
                </div>
            {/each}
        {/if}
    </div>

    <!-- Arrow -->
    <svg
        width="15"
        height="13"
        viewBox="0 0 17 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition-all transform"
        style={hover ? "transform: rotate(0deg)" : "transform: rotate(90deg)"}
    >
        <path
            d="M8.5 15L16.7272 0.75H0.272758L8.5 15Z"
            class={hover ? "fill-blue-dark" : "fill-[#C4C4C4]"}
        />
    </svg>
</div>
