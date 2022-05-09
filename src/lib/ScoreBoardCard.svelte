<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	import {
		FiatApiSupportedCryptoCurrency,
		FiatApiSupportedFiatCurrency,
		getExchangeRates,
	} from "@nimiq/utils";

	import { selectedCurrency, selectedFiat } from "../store";
	import { SupportedCurrencies } from "../types";

	import CoinSelector from "./CurrencySelector.svelte";
	import InfoIcon from "./InfoIcon.svelte";

	const price = {
		eur: 0,
		usd: 0,
	};
	let balance = 190;
	// TODO: Better way of handling numeric balance instead of string
	let smallBalance = "0";
	let bigBalance = "0";
	$: {
		if ($selectedCurrency === SupportedCurrencies.NIM) {
			smallBalance = (balance * price[$selectedFiat]).toFixed(2);
			bigBalance = balance.toString().padStart(9, "0");
		} else {
			smallBalance = balance.toString();
			bigBalance = (balance * price[$selectedFiat])
				.toFixed(2)
				.padStart(9, "0");
		}
	}
	let currencyIcon = "NIM";
	let smallBalanceColor = "text-gold";
	$: {
		if ($selectedCurrency === SupportedCurrencies.NIM) {
			switch ($selectedFiat) {
				case SupportedCurrencies.EUR:
					currencyIcon = "€";
					smallBalanceColor = "text-green";
					break;
				case SupportedCurrencies.USD:
					currencyIcon = "$";
					smallBalanceColor = "text-blue-light";
					break;
			}
		} else currencyIcon = "NIM";
	}

	let componentClass: string = "";
	export { componentClass as class };

	onMount(async () => {
		setInterval(() => balance++, 1000);
		const {
			nim: { eur, usd },
		} = await getExchangeRates(
			[FiatApiSupportedCryptoCurrency.NIM],
			[FiatApiSupportedFiatCurrency.EUR, FiatApiSupportedFiatCurrency.USD]
		);
		price.eur = eur;
		price.usd = usd;
	});
</script>

<div
	class={`bg-white shadow-around rounded-[18px] px-20 py-10 flex flex-col xs:items-center ${componentClass}`}
>
	<div class="flex items-center gap-x-14">
		<!-- Currency Logo -->
		<div class="flex flex-col items-center justify-between w-40">
			{#key $selectedCurrency}
				<div in:fly={{ y: 10 }} class="h-[50px]">
					<img
						src={`/assets/${$selectedCurrency}-logo.svg`}
						preload="true"
						alt={`${$selectedCurrency} logo`}
						class="object-cover min-w-[35px]"
					/>
				</div>
			{/key}
			<InfoIcon class="mt-14" />
		</div>

		<div class="flex-1 self-center">
			<div class="flex justify-between gap-x-6">
				{#each Array.from(bigBalance) as number}
					{#key number}
						<div class="counter shadow flex-1 rounded-6">
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

			<span
				class="text-13 font-bold text-black/50 text-ellipsis truncate"
			>
				NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8
			</span>

			{#key smallBalance}
				<div
					class={`ml-auto font-extrabold text-right flex justify-end gap-x-4 ${smallBalanceColor}`}
					in:fly={{ y: 10 }}
				>
					{smallBalance}
					{currencyIcon}
				</div>
			{/key}
		</div>

		<div class="self-start">
			<CoinSelector />
		</div>
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

	.counter__item--digit.counter__item--\.:before,
	.counter__item--decimal.counter__item--\.:before {
		content: "0\A  .\A 0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A  .\A 0\A 1";
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
		box-shadow: inset 2px 8px 10px -10px rgb(0 0 0 / 30%);
	}
</style>
