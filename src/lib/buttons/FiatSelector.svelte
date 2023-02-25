<script lang="ts">
    import { fly } from "svelte/transition";
    import { selectedFiat, selectedCurrency } from "$store";
    import { SupportedCurrencies } from "../../types";

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
    <div class="h-36 bg-white w-96 hover:bg-blue-dark/5 rounded-l-24">
        <div
            class="flex items-center pl-16 rounded-tl-[20px] hover:bg-blue-dark/80 {hover
                ? 'bg-blue-dark'
                : ''}"
            style="width: inherit; height: inherit;"
        >
            <img
                src="/assets/icons/{$selectedFiat}-icon.svg"
                alt=""
                width="20"
            />
            <span
                class="mx-auto font-extrabold text-{hover
                    ? 'white'
                    : 'black'} uppercase text-16">{$selectedFiat}</span
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
                    on:keydown={() => ($selectedFiat = currency)}
                >
                    <img
                        src="/assets/icons/{currency}-icon.svg"
                        alt=""
                        width="20"
                    />

                    <span
                        class="mx-auto font-extrabold text-{hover
                            ? 'white'
                            : 'black'} uppercase text-16">{currency}</span
                    >
                </div>
            {/each}
        {/if}
    </div>
    <!-- Arrow -->
    <div
        class="flex items-center justify-center h-36 pl-6 pr-16 bg-white rounded-r-24 {hover
            ? 'bg-blue-dark/5'
            : ''}"
    >
        <svg
            width="14"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-all transform"
            style={hover
                ? "transform: rotate(0deg)"
                : "transform: rotate(90deg)"}
        >
            <path
                d="M6.63397 13.5C7.01887 14.1667 7.98112 14.1667 8.36602 13.5L14.8612 2.25C15.2461 1.58333 14.765 0.75 13.9952 0.75H1.00481C0.23501 0.75 -0.246116 1.58333 0.138784 2.25L6.63397 13.5Z"
                class={hover ? "fill-blue-dark" : "fill-[#C4C4C4]"}
            />
        </svg>
    </div>
</div>
