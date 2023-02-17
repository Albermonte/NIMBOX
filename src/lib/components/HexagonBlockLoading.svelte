<script lang="ts">
	import { height, transactions } from "nimiq-svelte-stores";
	import InfoIcon from "../icons/InfoIcon.svelte";
	import LoadingBar from "./LoadingBar.svelte";

	let componentClass: string = "";
	export { componentClass as class };

	let currentBlock = 0;
	let maxBlocks = 6;
	let color = "#FAFBFD",
		color2 = "#FAFBFD";

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

		if (currentBlock < 2) {
			color = "#2AB799";
			color2 = "#24CFAB";
		} else if (currentBlock < 4) {
			color = "#289FEE";
			color2 = "#1D97EA";
		} else if (currentBlock < 6) {
			color = "#F25454";
			color2 = "#D63B3B";
		} else {
			color = "#EAB114";
			color2 = "#EC9B1C";
		}
	}
</script>

<div class={componentClass}>
	<div class="flex items-center gap-6">
		<div class="relative">
			<svg
				width="225"
				height="207"
				viewBox="0 0 225 207"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g>
					<path
						d="M149.523 0.0959175L63.4333 0.0783508C60.5133 0.0753807 57.6925 0.842512 55.2211 2.21L105.529 92.5812C107.751 91.1735 109.653 89.2554 111.015 86.9068L155.543 10.602C158.267 5.93481 154.913 0.1014 149.523 0.0959175Z"
						fill="#249CED"
					/>
					<path
						d="M11.2271 94.6853L97.3171 94.7028C100.237 94.7058 103.058 93.9387 105.529 92.5712L55.2212 2.20996C52.9997 3.61771 51.1078 5.53578 49.7354 7.88439L5.20774 84.1991C2.49301 88.8464 5.84707 94.6898 11.2271 94.6853Z"
						fill="#249CED"
						class="translate-x-[0.5px]"
					/>
				</g>
				<g>
					<path
						d="M11.3099 104.022L97.3982 104.153C100.318 104.158 103.137 104.921 105.606 106.29L55.1545 196.571C52.9359 195.166 51.0355 193.237 49.6717 190.885L5.26725 114.5C2.55885 109.847 5.92951 104.009 11.3099 104.022Z"
						fill="#25CBA8"
						class="translate-x-[0.5px]"
					/>
					<path
						d="M149.45 198.848L63.3622 198.717C60.4419 198.712 57.6234 197.948 55.1542 196.58L105.606 106.299C107.824 107.704 109.725 109.633 111.089 111.985L155.493 188.37C158.192 193.013 154.831 198.851 149.45 198.848Z"
						fill="#25CBA8"
					/>
				</g>
				<g>
					<path
						d="M162.795 183.026L119.725 108.486C118.265 105.956 117.515 103.136 117.465 100.316L220.875 98.6758C220.775 101.306 220.055 103.906 218.705 106.266L174.905 182.996C172.225 187.666 165.495 187.686 162.795 183.026Z"
						fill="#62B1E6"
						/>
						<path
						d="M175.535 15.9553L218.605 90.4953C220.065 93.0253 220.815 95.8453 220.865 98.6653L117.455 100.305C117.555 97.6753 118.275 95.0753 119.625 92.7153L163.425 15.9853C166.105 11.3053 172.845 11.2953 175.535 15.9553Z"
						fill="#62B1E6"
						class="translate-y-[0.5px]"
					/>
				</g>
				<!-- White Background -->
				<g>
					<path
						d="M172.509 95.1162L145.631 48.3692C143.712 45.0426 140.163 43 136.323 43L82.5968 43C78.7571 43 75.2374 45.0426 73.3176 48.3692L46.4399 95.1162C44.52 98.4428 44.52 102.557 46.4399 105.884L73.2885 152.631C75.2083 155.957 78.7571 158 82.5968 158H136.323C140.163 158 143.712 155.957 145.631 152.631L172.48 106.088C174.487 102.703 174.516 98.5011 172.509 95.1162Z"
						fill="#EDF1F7"
					/>
					<path
						d="M171.989 95.4153L171.993 95.4222C173.886 98.6154 173.861 102.583 171.964 105.782L171.96 105.788L145.112 152.331C143.299 155.471 139.949 157.4 136.323 157.4H82.5968C78.9708 157.4 75.6205 155.471 73.8082 152.331L46.9602 105.585L46.9595 105.584C45.1468 102.443 45.1468 98.5571 46.9595 95.4161L46.96 95.4153L73.8373 48.6691C73.8374 48.6689 73.8375 48.6687 73.8376 48.6685C75.6509 45.527 78.9729 43.6 82.5968 43.6L136.323 43.6C139.949 43.6 143.299 45.5288 145.112 48.6691L171.989 95.4153Z"
						stroke="#1F2248"
						stroke-opacity="0.15"
						stroke-width="1.2"
					/>
				</g>
				<defs>
					<linearGradient
						id="linearGradient"
						x1="4"
						y1="6"
						x2="117.018"
						y2="59.147"
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
					{currentBlock}
				/>
			</div>
		</div>

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
			<div class="flex items-center justify-between w-344 mt-12 mb-4">
				<span class="font-medium text-15"
					>Check the block height:
				</span>
				<a
					class="bg-linear-button-blue rounded-24 font-bold text-14 px-12 py-8"
					href="https://nimiq.watch/"
					target="_blank"
					rel="noreferrer">Open Block Explorer</a
				>
			</div>
		</InfoIcon>
	</div>
	<!-- Same width as hex svg, that way it's on the middle of the hex -->
	<div class="flex flex-col text-center mt-6 w-[228px]">
		<span class="font-bold uppercase text-12 text-black-light/40"
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
