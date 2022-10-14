<script lang="ts">
	import { selectedCurrency, selectedFiat } from "../store";
	import { SupportedCurrencies } from "../types";
</script>

<div class="bg-[#E7E7E8] rounded-[17.25px] p-4 h-fit-content">
	<!-- Fiat -->
	<div
		class="mb-6 cursor-pointer"
		on:click={() => ($selectedCurrency = $selectedFiat)}
	>
		<img
			src="/assets/icons/{$selectedFiat}-icon.svg"
			alt=""
			class="w-[34px] h-[35px]"
			style={$selectedCurrency !== $selectedFiat
				? "filter: grayscale(100%)"
				: ""}
		/>
	</div>
	<!-- NIM -->
	<svg
		width="34"
		height="35"
		viewBox="0 0 34 35"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="cursor-pointer"
		style={$selectedCurrency !== SupportedCurrencies.NIM
			? "filter: grayscale(100%)"
			: ""}
		on:click={() => ($selectedCurrency = SupportedCurrencies.NIM)}
	>
		<circle
			cx="16.9195"
			cy="17.3979"
			r="16.9194"
			fill="url(#paint0_linear_1148_693)"
		/>
		<path
			d="M26.1016 16.6051L22.1847 9.72744C21.9049 9.23802 21.3877 8.9375 20.8282 8.9375L12.9986 8.9375C12.439 8.9375 11.9261 9.23802 11.6463 9.72744L7.72937 16.6051C7.44959 17.0945 7.44959 17.6999 7.72937 18.1893L11.642 25.067C11.9218 25.5564 12.439 25.8569 12.9986 25.8569L20.8282 25.8569C21.3877 25.8569 21.9049 25.5564 22.1847 25.067L26.0974 18.2193C26.3899 17.7213 26.3941 17.1031 26.1016 16.6051Z"
			fill="white"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1148_693"
				x1="-2.41691"
				y1="-3.10059"
				x2="44.7609"
				y2="38.307"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#EAB114" />
				<stop offset="1" stop-color="#EC9B1C" />
			</linearGradient>
		</defs>
	</svg>
</div>
