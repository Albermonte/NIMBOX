<script lang="ts">
	import {
		client,
		consensus,
		established,
		height,
		transactions,
	} from "nimiq-svelte-stores";
	import { wallet, userCashlink } from "$store";
	import { fly } from "svelte/transition";

	import type * as NimiqType from "@nimiq/core-web/types";

	import FiatSelector from "./buttons/FiatSelector.svelte";
	import WorldIcon from "./icons/WorldIcon.svelte";
	import WorldCheckIcon from "./icons/WorldCheckIcon.svelte";
	import WorldAlertIcon from "./icons/WorldAlertIcon.svelte";
	import HamburguerMenu from "./buttons/HamburguerMenu.svelte";
	import Icon from "./icons/Icon.svelte";

	let balance = 0,
		showHambuguerMenu = false;

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
	class="flex items-center justify-between w-full px-20 pt-48 sm:px-28 md:px-56"
>
	<div class="flex">
		<div class="flex flex-col mr-32">
			<!-- TODO: add tooltip with network statistics like peer count, bandwith... -->
			<span
				class="mb-4 font-extrabold uppercase text-13 text-black-light/40"
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
				<span
					class="ml-6 font-extrabold text-[#676975] capitalize text-18"
					>{$consensus}</span
				>
			</div>
		</div>
		<div class="flex flex-col mr-40">
			<span
				class="mb-4 font-extrabold uppercase text-13 text-black-light/40"
				>Logged In</span
			>
			{#if $userCashlink}
				<img
					class="mx-auto w-26"
					src="/assets/icons/check-mark-icon.svg"
					alt=""
				/>
			{:else}
				<img
					class="mx-auto w-26"
					src="/assets/icons/cross-mark-icon.svg"
					alt=""
				/>
			{/if}
		</div>
		{#if $wallet}
			<div class="flex flex-col" transition:fly={{ y: 10 }}>
				<span
					class="mb-4 font-extrabold uppercase text-13 text-black-light/40"
					>Cashlink Balance</span
				>
				<div class="flex items-center">
					<button
						class="p-4 rounded bg-black/20 w-20 h-20 flex items-center mr-10"
					>
						<Icon
							height="14"
							name="nq-cashlink-big"
							class="text-white"
						/>
					</button>
					<span class="font-extrabold text-[#676975] text-18">
						{balance} <span class="text-14">NIM</span>
					</span>
				</div>
			</div>
		{/if}
	</div>
	<div class="flex items-center">
		<FiatSelector class="mr-32" />
		<!-- Hamburguer -->
		<div on:mouseleave={() => (showHambuguerMenu = false)}>
			<div
				class="cursor-pointer"
				on:mouseenter={() => (showHambuguerMenu = true)}
			>
				<svg
					width="36"
					height="25"
					viewBox="0 0 36 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 2H34"
						stroke="#1F2145"
						stroke-width="3"
						stroke-linecap="round"
					/>
					<path
						d="M2 12H34"
						stroke="#1F2145"
						stroke-width="3"
						stroke-linecap="round"
					/>
					<path
						d="M2 23H34"
						stroke="#1F2145"
						stroke-width="3"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			{#if showHambuguerMenu}
				<HamburguerMenu class="right-18" />
			{/if}
		</div>
	</div>
</header>
