<script lang="ts">
    import { fly } from "svelte/transition";
    import { currentBlock } from "$store";

    export let maxBlocks = 6;

    let bgColor = "bg-linear-button-blue";
    $: {
        if ($currentBlock < 5) {
            bgColor = "bg-linear-button-blue";
        } else if ($currentBlock < 6) {
            bgColor = "bg-linear-button-red";
        } else {
            bgColor = "bg-linear-button-gold";
        }
    }

    let percentage = 0;
    $: percentage = Math.min(($currentBlock / maxBlocks) * 100, 99);
    $: $currentBlock > 6 && (percentage = 100);

    let componentClass: string = "";
    export { componentClass as class };
</script>

<div class="flex w-[220px] justify-between items-center {componentClass}">
    {#each [...Array(maxBlocks).keys()] as i}
        <div class="relative">
            <div
                class="w-28 h-6 rounded-6 border-2 border-[#676975]/5 transition-all {i <
                $currentBlock
                    ? bgColor
                    : 'bg-[#EDF1F7]'}"
            />
            {#if i === Math.min($currentBlock, 6) - 1}
                <span
                    class="absolute font-bold text-center text-black text-14 top-10"
                    in:fly={{ x: -20 }}
                    out:fly={{ x: 20 }}
                    >{Math.floor(percentage).toFixed()}%</span
                >
            {/if}
        </div>
    {/each}
</div>
