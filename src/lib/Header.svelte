<script lang="ts">
	import { consensus, height } from "nimiq-svelte-stores";

	import RouteButton from "./RouteButton.svelte";
	import FiatSelector from "./FiatSelector.svelte";
	import WorldIcon from "./icons/WorldIcon.svelte";
	import WorldCheckIcon from "./icons/WorldCheckIcon.svelte";
	import WorldAlertIcon from "./icons/WorldAlertIcon.svelte";
	import hamburguerIcon from "/assets/icons/hamburguer.svg";
	import nimiqIcon from "/assets/icons/nimiq-hex.svg";
</script>

<!-- TODO: background when scrolling -->
<header
	class="flex items-center justify-between w-full px-20 h-136 sm:px-28 md:px-56"
>
	<div class="flex">
		<div class="flex flex-col mr-40">
			<!-- TODO: add tooltip with network statistics like peer count, bandwith... -->
			<span class="font-medium uppercase text-13 text-blue-dark/40"
				>Consensus</span
			>
			<div class="flex items-center">
				<div class="w-24 h-24">
					{#if $consensus === "connecting"}
						<WorldIcon />
					{:else if $consensus === "established"}
						<WorldCheckIcon class=" text-green" />
					{:else}
						<WorldAlertIcon class=" text-orange" />
					{/if}
				</div>
				<span class="ml-6 font-bold capitalize text-18"
					>{$consensus}</span
				>
			</div>
		</div>
		<div class="flex flex-col">
			<span class="font-medium uppercase text-13 text-blue-dark/40"
				>Block Height</span
			>
			<span class="font-bold text-18"
				># {$height.toLocaleString("en-US").replaceAll(",", " ")}</span
			>
		</div>
	</div>
	<div class="flex">
		<FiatSelector />
		<RouteButton route="how-to">
			<img src={hamburguerIcon} alt="" />
			<span class={`font-bold text-14 leading-[14px]`}>
				How to play?
			</span>
		</RouteButton>
		<RouteButton color="bg-blue-light" route="free-nim">
			<span class={`font-bold text-14 leading-[14px] text-white`}>
				Get FREE NIM
			</span>
			<img src={nimiqIcon} alt="" />
		</RouteButton>
	</div>
</header>
