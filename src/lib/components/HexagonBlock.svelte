<script lang="ts">
	import InfoIcon from "../buttons/InfoButton.svelte";
	import LoadingBar from "./LoadingBar.svelte";
	import LoadingHexagon from "./LoadingHexagon.svelte";

	let componentClass: string = "";
	export { componentClass as class };

	// TODO: Move this to env variables
	const maxBlocks = 6;
</script>

<div class={componentClass}>
	<div class="flex items-center gap-10 mb-32">
		<LoadingHexagon {maxBlocks} />
		<InfoIcon>
			<span class="font-extrabold text-17">Timer info:</span>
			<ul
				class="font-semibold text-14 text-[#CCCCCC] list-disc list-outside"
			>
				<li>It cost 6 ~ minutes to complete 6 blocks.</li>
				<li>
					The timer resets to 0 blocks whenever someone sends a new
					transaction to the treasure chest.
				</li>
			</ul>
			<div class="flex items-center justify-between mt-12 mb-4 w-344">
				<span class="font-medium text-15"
					>Check the block height:
				</span>
				<a
					class="px-12 py-8 font-bold bg-linear-button-blue rounded-24 text-14"
					href="https://nimiq.watch/"
					target="_blank"
					rel="noreferrer">Open Block Explorer</a
				>
			</div>
		</InfoIcon>
	</div>
	<LoadingBar {maxBlocks} class="mr-auto w-fit" />
</div>
