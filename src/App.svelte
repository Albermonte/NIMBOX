<script lang="ts">
	import Header from "./lib/Header.svelte"
	import HexagonBlockLoading from "./lib/HexagonBlockLoading.svelte"
	import InfoIcon from "./lib/InfoIcon.svelte"
	import logo from "./assets/treasury-logo.svg"
	import ParticipantList from "./lib/ParticipantList.svelte"
	import ScoreBoardCard from "./lib/ScoreBoardCard.svelte"
</script>

<main class="h-screen w-full bg-grey-dark min-w-[1090px]">
	<div class="bg-grey flex flex-col">
		<Header />
		<img class="game-logo self-center" src={logo} alt="Nimiq Game Treasure Logo" />
	</div>

	<div class="w-full grid h-[28px] bg-grey grid-cols-[2fr_3fr_2fr]">
		<div />
		<div class="w-full large-inner-shadow rounded-t-[28px] bg-grey-dark" />
		<div />
	</div>

	<div class="w-full grid h-[28px] grid-cols-[2fr_3fr_2fr]">
		<div class="w-full rounded-br-[28px] bg-grey relative large-shadow">
			<div class="absolute w-max left-1/2 -translate-x-1/2 flex flex-col items-center">
				<button class="bg-blue-light text-white rounded px-16 py-12">
					Particapte <span class="font-light">➞</span>
				</button>
				<div class="flex items-center mt-16">
					<InfoIcon />
					<span class="mx-6 font-[650]"
						>Participated: <span class="font-black text-20"> {2} </span></span
					>
				</div>
			</div>
		</div>
		<div class="bg-grey-dark relative">
			<div class="mx-10 absolute -top-[18px] w-[calc(100%-20px)]">
				<ScoreBoardCard />
				<ParticipantList class="mt-26" />
			</div>
		</div>
		<div class="w-full rounded-bl-[28px] bg-grey relative large-shadow">
			<div class="absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<HexagonBlockLoading />
			</div>
		</div>
	</div>
</main>

<style>
	.large-shadow {
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}

	.large-inner-shadow {
		box-shadow: inset 0 12px 6px -8px rgb(0 0 0 / 0.08);
	}
</style>
