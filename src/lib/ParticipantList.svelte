<script lang="ts">
	import { transactions } from "nimiq-svelte-stores";
	import { onMount } from "svelte";

	let componentClass: string = "";
	export { componentClass as class };

	let timestamp: Date = new Date();
	let participants: Array<{ time: string; address: string }> = [];
	$: {
		participants = $transactions
			.filter(
				(tx: Nimiq.Client.TransactionDetails) => tx.value / 1e5 === 1
			)
			.map((tx: Nimiq.Client.TransactionDetails) => {
				let time = `0 sec`;
				calc: if (tx.timestamp) {
					const txDate = new Date(tx.timestamp * 1e3);
					const d =
						(timestamp.getTime() - txDate.getTime()) /
						(1e3 * 3600 * 24);
					if (d >= 1) {
						time = `${Math.ceil(d)} days`;
						break calc;
					}

					const h =
						(timestamp.getTime() - txDate.getTime()) / (1e3 * 3600);
					if (h >= 1) {
						time = `${Math.ceil(h)} h`;
						break calc;
					}

					const m =
						(timestamp.getTime() - txDate.getTime()) / (1e3 * 60);
					if (m >= 1) {
						time = `${Math.ceil(m)} min`;
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
	class="flex flex-col p-10 pt-16 pb-32 bg-white rounded-24 {componentClass}"
>
	<div class="flex pb-4">
		<span class="w-1/5 font-bold text-center text-18 text-blue-light"
			>Age.</span
		>
		<span class="w-4/5 font-bold text-left text-18 text-blue-light"
			>Participant.</span
		>
	</div>
	{#each participants as participant}
		<div class="flex py-6 font-bold text-black/40">
			<span class="w-1/5 text-center text-14">{participant.time}</span>
			<span class="w-4/5 text-12 text-ellipsis truncate text-justify"
				>{participant.address}</span
			>
		</div>
	{/each}
</div>
