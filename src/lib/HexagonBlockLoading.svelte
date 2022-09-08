<script lang="ts">
	import { height, transactions } from "nimiq-svelte-stores";
	import LoadingBar from "./LoadingBar.svelte";

	let componentClass: string = "";
	export { componentClass as class };

	let currentBlock = 0;
	let maxBlocks = 6;
	let color = "#FAFBFD";

	$: {
		let index = 0;
		let lastTx = $transactions[index];
		while (lastTx && lastTx.value !== 1 * 1e5) {
			lastTx = $transactions[index++];
			if (index >= $transactions.length) break;
		}

		if (lastTx) {
			const txHeight = Math.min(
				lastTx.blockHeight,
				lastTx.validityStartHeight
			);
			currentBlock = $height - (txHeight || lastTx.validityStartHeight);
			console.log("currentBlock", currentBlock);
			console.log("height", $height);
			console.log("txHeight", txHeight);
			console.log("transactions height", lastTx.blockHeight);
			console.log("transactions validity", lastTx.validityStartHeight);
		}

		if (currentBlock < 0) currentBlock = 0;
		else if (currentBlock > 6) currentBlock = 6;

		for (let i = 0; i < maxBlocks; i++) {
			const el = document.getElementById(`Triangle-${i}`);
			if (el) el.setAttribute("class", "fill-white");
		}

		for (let i = 0; i < currentBlock; i++) {
			const el = document.getElementById(`Triangle-${i}`);
			if (el) el.setAttribute("class", "fill-linear-gradient");
		}

		const el = document.getElementById(`Triangle-${currentBlock}`);
		if (el) el.setAttribute("class", "fill-linear-gradient animate-pulse");

		if (currentBlock < 2) color = "#1BD1AB";
		else if (currentBlock < 4) color = "#169FEE";
		else if (currentBlock < 6) color = "#FF6363";
		else color = "#EAAA15";
	}
</script>

<div class={componentClass}>
	<div class="relative">
		<svg
			width="228"
			height="201"
			viewBox="0 0 228 201"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{#each Array.from({ length: 6 }) as _, index}
				<g>
					<path
						d="M116.698 90.4331L164.588 6.65798C165.766 4.58586 164.28 2 161.889 2H66.1109C63.7198 2 62.234 4.58586 63.4124 6.65798L111.302 90.4331C112.497 92.5223 115.503 92.5223 116.698 90.4331Z"
						class="fill-white"
						id="Triangle-{index}"
						transform="rotate({(index * 360) / 6} 114 99)"
					/>
				</g>
			{/each}

			<!-- White Background -->
			<g>
				<path
					d="M178.5 94.4698L150.994 46.4963C149.039 43.1035 145.399 41 141.488 41H86.4774C82.5673 41 78.9269 43.1035 76.9718 46.4963L49.4663 94.4698C47.5112 97.8626 47.5112 102.07 49.4663 105.53L76.9044 153.504C78.8595 156.896 82.4999 159 86.41 159H141.421C145.331 159 148.972 156.896 150.927 153.504L178.365 105.734C180.522 102.205 180.522 97.9304 178.5 94.4698Z"
					fill="#FAFBFD"
				/>
			</g>

			<defs>
				<linearGradient
					id="linearGradient"
					x1="55"
					y1="6"
					x2="55"
					y2="96"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						class="transition-all duration-1000 ease-in-out"
						stop-color={color}
					/>
					<stop
						class="transition-all duration-1000 ease-in-out"
						offset="1"
						stop-color={color}
						stop-opacity="0.5"
					/>
				</linearGradient>
			</defs>

			<style>
				.fill-linear-gradient {
					fill: url(#linearGradient);
				}
			</style>
		</svg>

		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
		>
			<span
				class="text-blue-dark font-black tracking-wider text-28 leading-1"
				>{currentBlock}/{maxBlocks}</span
			>
			<span class="text-blue-dark/50 font-bold text-18 leading-1"
				>blocks</span
			>
			<LoadingBar
				percentage={(currentBlock / maxBlocks) * 100}
				height={18}
				class="mt-8"
				{color}
			/>
		</div>
	</div>

	<div class="flex flex-col text-center mt-6">
		<span class="font-bold uppercase text-12 text-[#201F44]/40"
			>Block Height</span
		>
		<span class="font-extrabold text-18 text-black"
			># {$height.toLocaleString("en-US").replaceAll(",", " ")}</span
		>
	</div>
</div>

<style>
	g {
		filter: drop-shadow(0px 0px 8px rgb(0 0 0 / 0.15));
	}
</style>
