<script lang="ts">
	import { selectedCurrency, selectedFiat } from "../store";
	import { SupportedCurrencies } from "../types";
</script>

<div>
	<!-- Fiat -->
	<div
		class="mb-4 cursor-pointer"
		on:click={() => ($selectedCurrency = $selectedFiat)}
	>
		<img
			src={`/assets/icons/${$selectedFiat}-icon.svg`}
			alt=""
			class="w-[25px] h-[25px]"
			style={$selectedCurrency !== $selectedFiat
				? "filter: grayscale(100%)"
				: ""}
		/>
	</div>
	<!-- NIM -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="25"
		height="25"
		fill="none"
		class="cursor-pointer"
		style={$selectedCurrency !== SupportedCurrencies.NIM
			? "filter: grayscale(100%)"
			: ""}
		on:click={() => ($selectedCurrency = SupportedCurrencies.NIM)}
	>
		<circle cx="12.3896" cy="12.6103" r="12.3896" fill="#E9AF13" />
		<path
			fill="#fff"
			d="m19.114 12.0303-2.8683-5.03632c-.2049-.35839-.5836-.57845-.9933-.57845H9.51898c-.40975 0-.78536.22006-.99023.57845L5.66049 12.0303c-.20487.3584-.20487.8017 0 1.1601l2.86515 5.0363c.20488.3584.58359.5784.99334.5784h5.73342c.4097 0 .7884-.22.9933-.5784l2.8652-5.0143c.2142-.3647.2173-.8174.0031-1.1821Z"
		/>
	</svg>
</div>
