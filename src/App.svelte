<script lang="ts">
	import Header from "./lib/Header.svelte";
	import HexagonBlockLoading from "./lib/HexagonBlockLoading.svelte";
	import InfoIcon from "./lib/InfoIcon.svelte";
	import logo from "./assets/treasury-logo.svg";
	import ParticipantList from "./lib/ParticipantList.svelte";
	import ScoreBoardCard from "./lib/ScoreBoardCard.svelte";
	import ParticipateButton from "./lib/ParticipateButton.svelte";
</script>

<main class="h-screen w-full bg-grey-dark overflow-x-hidden">
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
		class="xl:hidden flex flex-col xs:flex-row items-center justify-center gap-x-16 bg-grey pt-10"
	>
		<ParticipateButton class="flex flex-col items-center" />
		<HexagonBlockLoading class="scale-75" />
	</div>

	<!-- Desktop -->
	<div
		class="grid h-[45px] bg-grey invisible xl:visible xl:grid-cols-[2fr_532px_2fr]"
	>
		<div />
		<div class="large-inner-shadow rounded-t-[28px] bg-grey-dark" />
		<div />
	</div>

	<div class="w-full grid h-[32px] grid-cols-2 xl:grid-cols-[2fr_500px_2fr] gap-x-16">
		<div
			class="w-full rounded-br-[28px] bg-grey relative large-shadow hidden xl:block"
		>
			<ParticipateButton
				class="absolute w-max top-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center"
			/>
		</div>
		<div class="bg-grey-dark relative col-span-2 xl:col-[2_/_span_1]">
			<div
				class="xl:mx-auto xl:absolute px-10 top-[-24px] w-[500px]"
			>
				<ScoreBoardCard
					class="w-[calc(100vw-20px)] xl:w-unset overflow-auto"
				/>
				<ParticipantList
					class="mt-26 w-[calc(100vw-20px)] xl:w-unset mb-6"
				/>
			</div>
		</div>
		<div
			class="w-full rounded-bl-[28px] bg-grey relative large-shadow hidden xl:block"
		>
			<HexagonBlockLoading
				class="absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-4/10"
			/>
		</div>
	</div>
</main>

<style>
	.large-shadow {
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
			0 8px 10px -6px rgb(0 0 0 / 0.1);
	}

	.large-inner-shadow {
		box-shadow: inset 0 12px 6px -8px rgb(0 0 0 / 0.08);
	}
</style>
