<script lang="ts">
    import { fly } from "svelte/transition";
    import CloseButton from "../buttons/CloseButton.svelte";

    export let right = true,
        width = "50vw",
        icon = "treasury",
        iconStyle = "";
</script>

<div
    class="transform-gpu absolute top-0 grid auto-cols-fr grid-rows-[10rem_1fr] justify-around items-center drop-shadow-2xl bg-white h-full w-1/2 sidebar-width px-32 pt-20 overflow-auto overflow-x-hidden {right
        ? 'right-0'
        : ''}"
    style="--custom-width: {width}"
    in:fly={{ delay: 150, x: 100 }}
    out:fly={{ x: 100 }}
>
    <div class="flex items-start pl-[78px]">
        <CloseButton />
        <img
            src={`/assets/${icon}-logo.svg`}
            alt="Nimiq Treasury"
            class="w-200 mx-auto {iconStyle}"
        />
    </div>
    <slot />
</div>

<style>
    @media (min-width: 1024px) {
        .sidebar-width {
            width: var(--custom-width);
        }
    }
</style>
