<script lang="ts">
	import RouteButton from "./RouteButton.svelte"
	import nimiqCommunity from "../assets/nimiq-community-logo.svg"
</script>

<!-- TODO: background when scrolling -->
<header
	class="flex justify-between items-center h-136 px-56 w-full bg-[url('/src/assets/nimiq-hexagon-1.svg')] bg-no-repeat bg-fixed bg-grey"
>
	<img src={nimiqCommunity} alt="Nimiq community" />
	<RouteButton text="How to play?" />
</header>
