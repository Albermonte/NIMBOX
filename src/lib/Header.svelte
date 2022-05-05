<script lang="ts">
	import RouteButton from "./RouteButton.svelte";
	import nimiqCommunity from "../assets/nimiq-community-logo.svg";
	import WorldIcon from "./icons/WorldIcon.svelte";

	import { consensus, height } from "nimiq-svelte-stores";
	import WorldCheckIcon from "./icons/WorldCheckIcon.svelte";
	import WorldAlertIcon from "./icons/WorldAlertIcon.svelte";
</script>

<!-- TODO: background when scrolling -->
<header
	class="flex justify-between items-center h-136 px-20 sm:px-28 md:px-56 w-full bg-[url('/src/assets/nimiq-hexagon-1.svg')] bg-no-repeat bg-fixed bg-grey"
>
	<!-- <img src={nimiqCommunity} alt="Nimiq community" /> -->
	<div class="flex">
		<div class="flex flex-col mr-40">
			<span class="font-medium uppercase text-13 text-blue-dark/40"
				>Consensus</span
			>
			<div class="flex items-center">
				<div class="w-24 h-24">
					{#if $consensus === "connecting"}
						<WorldIcon  />
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
	<div>
		<RouteButton text="How to play?" />
	</div>
</header>
