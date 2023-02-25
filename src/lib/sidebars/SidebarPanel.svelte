<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import { fly } from "svelte/transition";
    import CloseButton from "../buttons/CloseButton.svelte";

    export let width = "50vw",
        icon = "nimbox",
        iconStyle = "";
</script>

<div
    class="transform-gpu absolute z-20 top-0 grid grid-rows-[10rem_1fr_3fr] items-start drop-shadow-2xl bg-white h-full w-1/2 sidebar-width px-32 pt-20 overflow-auto overflow-x-hidden right-0"
    style="--custom-width: {width}"
    in:fly={{ delay: 150, x: 100 }}
    out:fly={{ x: 100 }}
>
    <!-- Headers -->
    <div class="flex items-start self-center pl-[78px]">
        <CloseButton />
        <img
            src={`/assets/${icon}-logo.svg`}
            alt="NIMBOX"
            class="w-200 mx-auto {iconStyle}"
        />
    </div>

    <!-- Introduction -->
    <div class="flex flex-col justify-center gap-10 px-80">
        <slot name="top" />
    </div>

    <!-- Content -->
    <div
        class="bg-[#EDF1F7] rounded-8 h-full pt-20 flex flex-col gap-y-20 px-40 overflow-hidden"
    >
        <div class="flex items-center px-40">
            <h1 class="font-bold text-black text-22">
                <slot name="card-title" />
            </h1>
            {#if $$slots["custom-divider"]}
                <slot name="custom-divider" />
            {:else}
                <Divider />
            {/if}
        </div>
        <div class="h-full px-40 overflow-auto scrollbar scroll-smooth">
            <slot name="content" />
        </div>
    </div>
</div>

<style>
    @media (min-width: 1024px) {
        .sidebar-width {
            width: var(--custom-width);
        }
    }

    .scrollbar {
        color: #1f2248;
    }
</style>
