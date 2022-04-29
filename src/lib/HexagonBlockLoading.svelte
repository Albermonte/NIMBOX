<script lang="ts">
	import { onMount } from "svelte";
	import { height } from "nimiq-svelte-stores";
	import LoadingBar from "./LoadingBar.svelte";

	let componentClass: string = "";
	export { componentClass as class };

	let currentBlock = 0;
	let maxBlocks = 6;

	$: {
		if ($height % 10 <= 6) currentBlock = $height % 10;
		else currentBlock = 6;

		for (let i = 0; i < maxBlocks; i++) {
			const el = document.getElementById(`Triangle-${i + 1}`);
			if (el) el.setAttribute("class", "fill-white");
		}

		for (let i = 0; i < currentBlock; i++) {
			const el = document.getElementById(`Triangle-${i + 1}`);
			if (el) el.setAttribute("class", "fill-green");
		}

		const el = document.getElementById(`Triangle-${currentBlock + 1}`);
		if (el) el.setAttribute("class", "fill-green animate-pulse");
	}

	onMount(() => {
		currentBlock = 0;
		setInterval(() => {
			currentBlock++;
			if (currentBlock > maxBlocks) currentBlock = 0;
		}, 3000);
	});
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
			<!-- Triangle 6 -->
			<g>
				<path
					d="M59.6985 6.56693L107.588 90.342C108.766 92.4141 107.28 95 104.889 95H9.11087C6.71982 95 5.23396 92.4141 6.4124 90.342L54.3186 6.56693C55.4971 4.47769 58.5029 4.47769 59.6985 6.56693Z"
					class="fill-white"
					id="Triangle-6"
				/>
			</g>

			<!-- Triangle 5 -->
			<g>
				<path
					d="M59.6946 186.433L107.58 102.658C108.776 100.586 107.273 98 104.899 98H9.11064C6.71977 98 5.23402 100.586 6.41238 102.658L54.2981 186.433C55.4935 188.522 58.4992 188.522 59.6946 186.433Z"
					class="fill-white"
					id="Triangle-5"
				/>
			</g>

			<!-- Triangle 4 -->
			<g>
				<path
					d="M116.698 102.567L164.588 186.342C165.766 188.414 164.28 191 161.889 191H66.1109C63.7198 191 62.234 188.414 63.4124 186.342L111.302 102.567C112.497 100.478 115.503 100.478 116.698 102.567Z"
					class="fill-white"
					id="Triangle-4"
				/>
			</g>

			<!-- Triangle 3 -->
			<g>
				<path
					d="M173.698 186.433L221.588 102.658C222.766 100.586 221.28 98 218.889 98H123.111C120.72 98 119.234 100.586 120.412 102.658L168.302 186.433C169.497 188.522 172.503 188.522 173.698 186.433Z"
					class="fill-white"
					id="Triangle-3"
				/>
			</g>

			<!-- Triangle 2 -->
			<g>
				<path
					d="M173.698 6.56693L221.588 90.342C222.766 92.4141 221.28 95 218.889 95H123.111C120.72 95 119.234 92.4141 120.412 90.342L168.302 6.56693C169.497 4.47769 172.503 4.47769 173.698 6.56693Z"
					class="fill-white"
					id="Triangle-2"
				/>
			</g>

			<!-- Triangle 1 -->
			<g>
				<path
					d="M116.698 90.4331L164.588 6.65798C165.766 4.58586 164.28 2 161.889 2H66.1109C63.7198 2 62.234 4.58586 63.4124 6.65798L111.302 90.4331C112.497 92.5223 115.503 92.5223 116.698 90.4331Z"
					class="fill-green animate-pulse"
					id="Triangle-1"
				/>
			</g>

			<!-- White Background -->
			<g>
				<path
					d="M178.5 94.4698L150.994 46.4963C149.039 43.1035 145.399 41 141.488 41H86.4774C82.5673 41 78.9269 43.1035 76.9718 46.4963L49.4663 94.4698C47.5112 97.8626 47.5112 102.07 49.4663 105.53L76.9044 153.504C78.8595 156.896 82.4999 159 86.41 159H141.421C145.331 159 148.972 156.896 150.927 153.504L178.365 105.734C180.522 102.205 180.522 97.9304 178.5 94.4698Z"
					fill="#FAFBFD"
				/>
			</g>
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
			/>
		</div>
	</div>
</div>

<style>
	g {
		filter: drop-shadow(0px 0px 8px rgb(0 0 0 / 0.15));
	}
</style>
