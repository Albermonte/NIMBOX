<script lang="ts">
    import { fly } from "svelte/transition";
    import { selectedFiat, selectedCurrency } from "../store";
    import { SupportedCurrencies } from "../types";

    let componentClass: string = "";
    export { componentClass as class };

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
    class="flex items-center hover:cursor-pointer {componentClass}"
    on:mouseenter={() => (hover = true)}
    on:mouseleave={() => (hover = false)}
>
    <div
        class="h-40 bg-white w-104 hover:bg-blue-dark/5 rounded-l-24"
    >
        <div
            class="flex items-center pl-16 rounded-tl-[20px] hover:bg-blue-dark/80 {hover
                ? 'bg-blue-dark'
                : ''}"
            style="width: inherit; height: inherit;"
        >
            <img
                src="/assets/icons/{$selectedFiat}-icon.svg"
                alt=""
                width="22"
            />
            <span
                class="mx-auto font-extrabold text-{hover
                    ? 'white'
                    : 'black'} uppercase text-18">{$selectedFiat}</span
            >
        </div>

        <!-- TODO: Add more fiat? and use a loop -->

        {#if hover}
            {#each SupportedCurrenciesList as currency, i}
                <div
                    class="flex items-center pl-16 hover:bg-blue-dark/80 {hover
                        ? 'bg-blue-dark absolute'
                        : ''} {i === SupportedCurrenciesList.length - 1
                        ? 'rounded-b-[20px]'
                        : ''}"
                    style="width: inherit; height: inherit;"
                    in:fly={{ opacity: 1, y: -20 }}
                    out:fly={{ opacity: 0, y: -10, duration: 150 }}
                    on:click={() => ($selectedFiat = currency)}
                >
                    <img
                        src="/assets/icons/{currency}-icon.svg"
                        alt=""
                        width="22"
                    />

                    <span
                        class="mx-auto font-extrabold text-{hover
                            ? 'white'
                            : 'black'} uppercase text-18">{currency}</span
                    >
                </div>
            {/each}
        {/if}
    </div>
    <!-- Arrow -->
    <div
        class="flex items-center justify-center h-40 pl-6 pr-16 bg-white rounded-r-24 {hover
            ? 'bg-blue-dark/5'
            : ''}"
    >
        <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-all transform"
            style={hover
                ? "transform: rotate(0deg)"
                : "transform: rotate(90deg)"}
        >
            <path
                d="M8.5 15L16.7272 0.75H0.272758L8.5 15Z"
                class={hover ? "fill-blue-dark" : "fill-[#C4C4C4]"}
            />
        </svg>
    </div>
</div>
