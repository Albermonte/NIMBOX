<script lang="ts">
    import { client, height } from "nimiq-svelte-stores";

    import { participationCounter, url, wallet } from "../store";

    import InfoIcon from "./InfoIcon.svelte";

    let componentClass: string = "";
    export { componentClass as class };

    let balance = 0;

    $: $height && updateBalance();

    const updateBalance = async () => {
        const account = await client.getAccount($wallet.address);
        balance = account.balance / 1e5;
    };
</script>

<div class={componentClass}>
    {#if $wallet}
        <button
            class="py-8 text-white rounded bg-blue-light px-18"
            on:click={() => {
                $participationCounter++;
            }}
        >
            Play the game <span class="font-light">➞</span>
        </button>
    {:else}
        <button
            class="min-w-full py-8 text-white rounded bg-blue-light px-18"
            on:click={async () => {
                // Use timeout to prevent modal closing on opening cause it's registering a click outside the modal
                setTimeout(() => url.navigate("login"), 100);
            }}
        >
            Login <span class="font-light">➞</span>
        </button>
    {/if}
    <div class="flex items-center mt-16">
        <InfoIcon />
        <span class="mx-6 font-[650]">
            Participated: <span class="font-black text-20">
                {$participationCounter}
            </span></span
        >
    </div>
    {#if $wallet}
        <span class="font-semibold text-15 mt-4 text-blue-dark/80"
            >Balance: {balance} NIM</span
        >
    {/if}
</div>
