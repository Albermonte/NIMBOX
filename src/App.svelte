<script lang="ts">
	import Header from "./lib/Header.svelte";
	import HexagonBlockLoading from "./lib/HexagonBlockLoading.svelte";
	import logo from "./assets/treasury-logo.svg";
	import ParticipantList from "./lib/ParticipantList.svelte";
	import ScoreBoardCard from "./lib/ScoreBoardCard.svelte";
	import ParticipateButton from "./lib/ParticipateButton.svelte";

	import { start } from "nimiq-svelte-stores";
	import { onMount } from "svelte";
	import Footer from "./lib/Footer.svelte";

	let isMobile = false;
	let windowWidth = 0;
	$: windowWidth < 1152 ? (isMobile = true) : (isMobile = false);

	onMount(async () => {
		// Only show error logs
		// Nimiq.Log.instance.level = Nimiq.Log.ERROR;
		await start((config) => {}, {
			network: import.meta.env.DEV ? "test" : "main",
		});
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="w-full h-screen overflow-x-hidden bg-grey-dark">
	<div class="bg-grey flex flex-col xl:h-[40vh]">
		<Header />
		<img
			class="game-logo self-center flex-1 max-w-[min(80vw,28rem)] object-contain mt-6"
			src={logo}
			alt="Nimiq Game Treasure Logo"
		/>
	</div>

	<!-- Mobile -->
	<div
		class="flex flex-col items-center justify-center pt-10 xl:hidden xs:flex-row gap-x-16 bg-grey"
	>
		<ParticipateButton class="flex flex-col items-center" />
		{#if isMobile}
			<!-- Can only be rendered once, otherwise the animation on the Desktop version will brole -->
			<HexagonBlockLoading class="scale-75" />
		{/if}
	</div>

	<!-- Desktop -->
	<div
		class="grid h-[45px] bg-grey invisible xl:visible xl:grid-cols-[2fr_532px_2fr]"
	>
		<div />
		<div class="rounded-t-[28px] bg-grey-dark" />
		<div />
	</div>

	<div
		class="w-full grid h-[32px] grid-cols-2 xl:grid-cols-[2fr_500px_2fr] gap-x-16"
	>
		<div class="w-full rounded-br-[28px] bg-grey relative hidden xl:block">
			<ParticipateButton
				class="absolute flex flex-col items-center -translate-x-1/2 w-max top-1/3 left-1/2"
			/>
		</div>
		<div class="bg-grey-dark relative col-span-2 xl:col-[2_/_span_1]">
			<div class="xl:mx-auto xl:absolute px-10 top-[-24px] w-[500px]">
				<ScoreBoardCard
					class="w-[calc(100vw-20px)] xl:w-unset overflow-auto"
				/>
				<ParticipantList
					class="mt-26 w-[calc(100vw-20px)] xl:w-unset mb-6"
				/>
			</div>
		</div>
		<div class="w-full rounded-bl-[28px] bg-grey relative hidden xl:block">
			{#if !isMobile}
				<HexagonBlockLoading
					class="absolute -translate-x-1/2 w-max top-1/2 left-1/2 -translate-y-4/10"
				/>
			{/if}
		</div>
		<Footer />
	</div>
</main>
