<script lang="ts">
	import RouteButton from "./RouteButton.svelte";
	import nimiqCommunity from "/assets/nimiq-community-logo.svg";
	import hamburguerIcon from "/assets/icons/hamburguer.svg";
</script>

<footer
	class="static bottom-0 flex items-center justify-between w-[100vw] px-20 xl:absolute h-136 sm:px-28 md:px-56"
>
	<div>
		<RouteButton route="hall-of-fame">
			<img src={hamburguerIcon} alt="" />
			<span class="font-bold text-14 leading-[14px]"> Hall of Fame </span>
		</RouteButton>
	</div>
	<div class="overflow-hidden absolute right-0 bottom-0">
		<div
			class=" bg-[url('/assets/nimiq-hexagon-1.svg')] h-[213px] w-[198px] bg-no-repeat bg-right-bottom -mb-24"
		/>
	</div>
	<img src={nimiqCommunity} alt="Nimiq community" class="-mr-10" />
</footer>
