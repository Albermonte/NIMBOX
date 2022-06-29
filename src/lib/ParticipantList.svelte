<script lang="ts">
	import { transactions } from "nimiq-svelte-stores";
	import { onMount } from "svelte";

	let componentClass: string = "";
	export { componentClass as class };

	const mockupData = [
		{
			time: "1 sec",
			address: "NQ21 XYQY 8QYM PURS Y574 19HA 9XDB MPSH XV05",
		},
		{
			time: "4 sec",
			address: "NQ56 VUGQ QN52 V0TM B9XV UXG3 HCG9 DMFV QY73",
		},
		{
			time: "10 sec",
			address: "NQ22 VU48 E7UN V66S KGAD 27K7 HMV4 5A1S PJCF",
		},
		{
			time: "47 sec",
			address: "NQ80 VT3M RNGX FV1G PXTP 012K V0V0 UVCU L553",
		},
		{
			time: "54 sec",
			address: "NQ02 VF79 XQ4Y C1DF 1SDB YPA2 NSJF 6B4F 7LPK",
		},
		{
			time: "1 min",
			address: "NQ48 V71M 4F3G L9MC LXA5 U5D3 7R12 CFGP R6J0",
		},
		{
			time: "2 min",
			address: "NQ86 V59J V0RE TUU1 XGRQ 69SF U5SB 1Q67 4Q4D",
		},
	];

	let timestamp: Date = new Date();
	let participants: Array<{ time: string; address: string }> = [];
	$: {
		participants = $transactions.map(
			(tx: Nimiq.Client.TransactionDetails) => {
				const h =
					timestamp.getHours() -
					new Date(tx.timestamp * 1e3).getHours();
				const m =
					timestamp.getMinutes() -
					new Date(tx.timestamp * 1e3).getMinutes();
				// TODO: try if client.addTransactionListener returns some timestamp
				const s =
					timestamp.getSeconds() -
					new Date(tx.timestamp * 1e3).getSeconds();

				let time = `0 sec`;
				if (h) time = `${h} h`;
				else if (m) time = `${m} min`;
				else time = `${s || 0} sec`;

				return {
					time,
					address: tx.sender.toUserFriendlyAddress(),
				};
			}
		);
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
