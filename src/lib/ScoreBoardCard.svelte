<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    import {
        FiatApiSupportedCryptoCurrency,
        FiatApiSupportedFiatCurrency,
        getExchangeRates,
    } from "@nimiq/utils";

    import { currencySelected } from "../store";

    import CoinSelector from "./CurrencySelector.svelte";
    import InfoIcon from "./InfoIcon.svelte";
    import EurLogo from "./Logos/EURLogo.svelte";
    import NimiqLogo from "./Logos/NimiqLogo.svelte";

    const price = {
        EUR: 0,
        USD: 0,
    };
    let initBalance = 190;
    let balance = "0";
    $: {
        balance = initBalance.toString().padStart(9, "0");
    }
    // TODO: Better way of handling numeric balance instead of string
    let smallBalance = "";
    $: {
        if ($currencySelected === "NIM")
            smallBalance = `€ ${(Number(balance) * price.EUR).toFixed(2)}`;
        else if ($currencySelected === "EUR")
            smallBalance = `NIM ${Number(balance)}`;
        else smallBalance = "";
    }

    onMount(async () => {
        setInterval(() => initBalance++, 1000);
        const {
            nim: { eur, usd },
        } = await getExchangeRates(
            [FiatApiSupportedCryptoCurrency.NIM],
            [FiatApiSupportedFiatCurrency.EUR, FiatApiSupportedFiatCurrency.USD]
        );
        price.EUR = eur;
        price.USD = usd;
    });
</script>

<div class="flex flex-col py-10 bg-white shadow-around rounded-24 px-20">
    <!-- Balance -->
    <div class="flex items-center h-120">
        <!-- Nimiq Logo -->
        <div
            class="flex flex-col items-center justify-between h-full py-16 w-48"
        >
            {#if $currencySelected === "EUR"}
                <div in:fly={{ y: 10 }}>
                    <EurLogo />
                </div>
            {:else if $currencySelected === "NIM"}
                <div in:fly={{ y: 10 }}>
                    <NimiqLogo />
                </div>
            {/if}
            <InfoIcon />
        </div>
        <div class="flex flex-col mx-14">
            <div class="flex flex-col">
                <!-- NIM -->
                <div class="py-16 flex justify-between">
                    {#each Array.from(balance) as number}
                        {#key number}
                            <div class="counter shadow">
                                <div
                                    class="counter__content counter__content--animate "
                                >
                                    <div
                                        class="counter__content__digit inner-shadow rounded-6 px-6 py-14"
                                    >
                                        <span
                                            class={`font-black text-26 counter__item counter__item--${number} counter__item--digit -translate-y-150`}
                                            >&nbsp;</span
                                        >
                                    </div>
                                </div>
                            </div>
                        {/key}
                    {/each}
                </div>
                <!-- Address -->
                <span
                    class="text-13 font-bold text-black/50 text-ellipsis truncate"
                >
                    NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8
                </span>
            </div>
            <!-- Eur -->
            {#key smallBalance}
                <span
                    class={`ml-auto font-extrabold ${
                        $currencySelected === "NIM"
                            ? "text-green"
                            : "text-gold"
                    }`}
                    in:fly={{ y: 10 }}>{smallBalance}</span
                >
            {/key}
        </div>
        <CoinSelector class="py-16" />
    </div>
</div>

<style>
    /* Source: https://codepen.io/StefanKandlbinder/pen/yLNYbar */
    .counter {
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
    }

    .counter__item--digit.counter__item--0:before,
    .counter__item--decimal.counter__item--0:before {
        content: "0\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2";
    }
    .counter__item--digit.counter__item--1:before,
    .counter__item--decimal.counter__item--1:before {
        content: "0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3";
    }
    .counter__item--digit.counter__item--2:before,
    .counter__item--decimal.counter__item--2:before {
        content: "0\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4";
    }
    .counter__item--digit.counter__item--3:before,
    .counter__item--decimal.counter__item--3:before {
        content: "0\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5";
    }
    .counter__item--digit.counter__item--4:before,
    .counter__item--decimal.counter__item--4:before {
        content: "0\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6";
    }
    .counter__item--digit.counter__item--5:before,
    .counter__item--decimal.counter__item--5:before {
        content: "0\A 5\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7";
    }
    .counter__item--digit.counter__item--6:before,
    .counter__item--decimal.counter__item--6:before {
        content: "0\A 6\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8";
    }
    .counter__item--digit.counter__item--7:before,
    .counter__item--decimal.counter__item--7:before {
        content: "0\A 7\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9";
    }
    .counter__item--digit.counter__item--8:before,
    .counter__item--decimal.counter__item--8:before {
        content: "0\A 8\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0";
    }
    .counter__item--digit.counter__item--9:before,
    .counter__item--decimal.counter__item--9:before {
        content: "0\A 9\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9\A 0\A 1";
    }

    .counter__content__digit {
        line-height: 1.5;
    }

    .counter__item--digit {
        position: relative;
    }

    .counter__item--digit:before {
        position: absolute;
        transition: top 2s ease-in-out;
        transform: translateY(0);
        white-space: pre;
    }

    .counter__item--digit {
        display: block;
        width: 0.65em;
        height: 1em;
    }

    .counter__item--digit:before {
        animation: counter-bounce 1s forwards;
    }

    /* Animation */
    @keyframes counter-bounce {
        0% {
            transform: translateY(0);
        }
        35% {
            transform: translateY(-11.25em);
        }
        65% {
            transform: translateY(-10.9em);
        }
        90% {
            transform: translateY(-11.08em);
        }
        100% {
            transform: translateY(-11em);
        }
    }

    .inner-shadow {
        -moz-box-shadow: inset 2px 8px 10px -10px rgb(0 0 0 / 30%);
        -webkit-box-shadow: inset 2px 8px 10px -10px rgb(0 0 0 / 30%);
        box-shadow: inset 2px 8px 10px -10px rgb(0 0 0 / 30%);
    }
</style>
