<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	import {
		FiatApiSupportedCryptoCurrency,
		FiatApiSupportedFiatCurrency,
		getExchangeRates,
	} from "@nimiq/utils";
	import type Nimiq from "@nimiq/core-web/types";

	import { accounts, transactions } from "nimiq-svelte-stores";

	import { selectedCurrency, selectedFiat } from "$store";
	import { SupportedCurrencies } from "../../types";

	import CoinSelector from "../buttons/CurrencySelector.svelte";

	// TODO: Import from .env
	const gameAddress = "NQ38 5QM1 6E26 UUB1 XMU3 01JN 3RLV HAN9 U6MF";

	const price = {
		eur: 0,
		usd: 0,
	};
	let balance = 0;
	$: {
		balance = $accounts.length > 0 ? $accounts[0].balance / 1e5 : 0;
		$transactions.forEach((tx: Nimiq.Client.TransactionDetails) => {
			if (tx.state !== Nimiq.Client.TransactionState.PENDING) return;
			balance += tx.value / 1e5;
		});
	}

	// TODO: Better way of handling numeric balance instead of string
	let smallBalance = "0";
	let bigBalance = "0";
	$: {
		if (isNaN(balance)) balance = 0;

		if ($selectedCurrency === SupportedCurrencies.NIM) {
			smallBalance = (balance * price[$selectedFiat]).toFixed(2);
			bigBalance = balance.toString().padStart(7, "0");
		} else {
			smallBalance = balance.toString();
			bigBalance = (balance * price[$selectedFiat])
				.toFixed(2)
				.padStart(7, "0");
		}
	}
	let currencyIcon = "NIM";
	let smallBalanceColor = "text-gold";
	$: {
		if ($selectedCurrency === SupportedCurrencies.NIM) {
			switch ($selectedFiat) {
				case SupportedCurrencies.EUR:
					currencyIcon = "€";
					smallBalanceColor = "text-green-light";
					break;
				case SupportedCurrencies.USD:
					currencyIcon = "$";
					smallBalanceColor = "text-blue-light";
					break;
			}
		} else {
			currencyIcon = "NIM";
			smallBalanceColor = "text-gold";
		}
	}

	let componentClass: string = "";
	export { componentClass as class };

	onMount(async () => {
		accounts.add(gameAddress);
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
	class="px-20 py-10 flex flex-col xs:items-center {componentClass}"
>
	<div class="flex gap-x-14">
		<!-- Currency Logo -->
		
		<div>
			<div class="flex items-center">
				<div class="w-[46px] mt-2 mr-16">
					{#key $selectedCurrency}
						<div in:fly={{ y: 10 }}>
							<img
								src="/assets/{$selectedCurrency}-logo.svg"
								preload="true"
								alt="{$selectedCurrency} logo"
								class="object-cover"
							/>
						</div>
					{/key}
				</div>
				{#each Array.from(bigBalance) as number}
					{#key number}
						<div class="counter">
							<div
								class="counter__content counter__content--animate "
							>
								<div
									class="counter__content__digit"
								>
									<span
										class="font-semibold text-[#1F2145] text-60 counter__item counter__item--{number} counter__item--digit -translate-y-344"
										>&nbsp;</span
									>
								</div>
							</div>
						</div>
					{/key}
				{/each}
			</div>

			{#key smallBalance}
				<div
					class="ml-auto font-bold text-right text-22 text-black/50"
					in:fly={{ y: 10 }}
				>
					{smallBalance}
					{currencyIcon}
				</div>
			{/key}
		</div>

		<CoinSelector />

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
