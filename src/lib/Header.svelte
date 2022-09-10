<script lang="ts">
	import {
		client,
		consensus,
		established,
		height,
		transactions,
	} from "nimiq-svelte-stores";
	import { wallet } from "../store";
	import { fly } from "svelte/transition";

	import type * as NimiqType from "@nimiq/core-web/types";

	import RouteButton from "./RouteButton.svelte";
	import FiatSelector from "./FiatSelector.svelte";
	import WorldIcon from "./icons/WorldIcon.svelte";
	import WorldCheckIcon from "./icons/WorldCheckIcon.svelte";
	import WorldAlertIcon from "./icons/WorldAlertIcon.svelte";
	import hamburguerIcon from "/assets/icons/hamburguer.svg";
	import nimiqIcon from "/assets/icons/nimiq-hex.svg";

	let balance = 0;

	$: $established && $wallet && $height && updateBalance();

	$: {
		if ($wallet)
			$transactions.forEach((tx: NimiqType.Client.TransactionDetails) => {
				// @ts-ignore
				if (tx.state !== Nimiq.Client.TransactionState.PENDING) return;
				if (
					tx.sender.toUserFriendlyAddress() !==
					$wallet.address.toUserFriendlyAddress()
				)
					return;
				balance -= tx.value / 1e5;
			});
	}

	const updateBalance = async () => {
		if (!$wallet) {
			balance = 0;
			return;
		}
		const account = await client.getAccount($wallet.address);
		balance = account.balance / 1e5;
	};
</script>

<!-- TODO: background when scrolling -->
<header
	class="flex items-center justify-between w-full px-20 h-136 sm:px-28 md:px-56"
>
	<div class="flex">
		<div class="flex flex-col mr-32">
			<!-- TODO: add tooltip with network statistics like peer count, bandwith... -->
			<span
				class="font-extrabold uppercase text-13 text-black-light/40 mb-4"
				>Consensus</span
			>
			<div class="flex items-center">
				<div class="w-24 h-24">
					{#if $consensus === "connecting"}
						<WorldIcon />
					{:else if $consensus === "established"}
						<WorldCheckIcon class=" text-green" />
					{:else}
						<WorldAlertIcon class=" text-orange" />
					{/if}
				</div>
				<span class="ml-6 font-extrabold capitalize text-18 text-black"
					>{$consensus}</span
				>
			</div>
		</div>
		<div class="flex flex-col mr-40">
			<span
				class="font-extrabold uppercase text-13 text-black-light/40 mb-4"
				>Logged In</span
			>
			<img class="w-26 mx-auto" src="/assets/icons/check-mark-icon.svg" alt="" />
		</div>
		{#if $wallet}
			<div class="flex flex-col" transition:fly={{ y: 10 }}>
				<span
					class="font-extrabold uppercase text-13 text-black-light/40 mb-4"
					>Cashlink Balance</span
				>
				<span class="font-extrabold text-18 text-black"
					>{balance} <span class="text-14">NIM</span></span
				>
			</div>
		{/if}
	</div>
	<div class="flex">
		<FiatSelector />
		<RouteButton route="how-to">
			<img src={hamburguerIcon} alt="" />
			<span class="font-bold text-14 leading-[14px]"> How to play? </span>
		</RouteButton>
		<RouteButton color="bg-linear-button-blue" route="free-nim">
			<span class="font-bold text-14 leading-[14px] text-white">
				Get FREE NIM
			</span>
			<img src={nimiqIcon} alt="" />
		</RouteButton>
	</div>
</header>
