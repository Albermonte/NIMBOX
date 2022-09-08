<script lang="ts">
	import type Nimiq from "@nimiq/core-web/types";

	import { transactions } from "nimiq-svelte-stores";
	import { wallet } from "../store";
	import { onMount } from "svelte";

	import LoadingSpinner from "./LoadingSpinner.svelte";

	let componentClass: string = "";
	export { componentClass as class };

	let timestamp: Date = new Date();
	let participants: Array<{ time: string; address: string; hash: string }> =
		[];
	$: {
		participants = $transactions
			.filter(
				(tx: Nimiq.Client.TransactionDetails) => tx.value / 1e5 === 1
			)
			.slice(0, 25) // Only show the last 25 participants
			.map((tx: Nimiq.Client.TransactionDetails) => {
				let time = `0 sec`;
				calc: if (tx.timestamp) {
					const txDate = new Date(tx.timestamp * 1e3);
					const d =
						(timestamp.getTime() - txDate.getTime()) /
						(1e3 * 3600 * 24);
					if (d >= 1) {
						time = `${Math.ceil(d) - 1 || 1} days`;
						break calc;
					}

					const h =
						(timestamp.getTime() - txDate.getTime()) / (1e3 * 3600);
					if (h >= 1) {
						time = `${Math.ceil(h) - 1 || 1} h`;
						break calc;
					}

					const m =
						(timestamp.getTime() - txDate.getTime()) / (1e3 * 60);
					if (m >= 1) {
						time = `${Math.ceil(m) - 1 || 1} min`;
						break calc;
					}
					const s = (timestamp.getTime() - txDate.getTime()) / 1e3;
					if (s >= 1) {
						time = `${Math.ceil(s)} sec`;
						break calc;
					}
				}

				return {
					time,
					address: tx.sender.toUserFriendlyAddress(),
					hash: tx.transactionHash.toHex(),
				};
			});
	}

	onMount(() => {
		const interval = setInterval(() => {
			timestamp = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div
	class="flex flex-col p-10 pt-16 pb-16 max-h-320 min-h-[200px] bg-white rounded-24 {componentClass}"
>
	<div class="flex pb-4 pr-32">
		<span class="w-1/5 font-bold text-center text-18 text-blue-light"
			>Age.</span
		>
		<span class="w-4/5 font-bold text-left text-18 text-blue-light"
			>Participant.</span
		>
	</div>
	{#if participants.length > 0}
		<div class="overflow-auto scrollbar scroll-smooth mb-16">
			{#each participants as participant}
				<a
					href="https://{import.meta.env.DEV
						? 'test.'
						: ''}nimiq.watch/#{participant.hash}"
					target="_blank"
					class="flex items-baseline py-6 font-bold hover:font-extrabold {$wallet &&
					participant.address ===
						$wallet.address.toUserFriendlyAddress()
						? 'text-green-light'
						: 'text-black/40'}"
				>
					<span class="w-1/5 text-center text-14"
						>{participant.time}</span
					>
					<span
						class="w-4/5 text-12 text-ellipsis truncate text-justify"
						>{participant.address}</span
					>
				</a>
			{/each}
		</div>
		<div
			class="bg-gradient-to-t from-white to-transparent h-72 -mt-32 mr-16 relative"
		/>
	{:else}
		<div class="m-auto h-full flex justify-center items-center">
			<span class="mr-10"> Loading participants... </span>
			<LoadingSpinner height={25} width={25} strokeWidth={5} />
		</div>
	{/if}
</div>
