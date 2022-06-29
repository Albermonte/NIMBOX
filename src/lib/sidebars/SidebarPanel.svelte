<script lang="ts">
    import { fly } from "svelte/transition";
    import CloseButton from "../CloseButton.svelte";
    import logo from "/assets/treasury-logo.svg";

    export let right = true,
        width = "50vw";
</script>

<div
    class="transform-gpu absolute top-0 grid auto-cols-fr grid-rows-[20%_1fr] justify-around items-center drop-shadow-2xl bg-white h-full w-1/2 sidebar-width px-32 {right
        ? 'right-0'
        : ''}"
    style="--custom-width: {width}"
    in:fly={{ delay: 150, x: 100 }}
    out:fly={{ x: 100 }}
>
    <div class="flex items-center justify-between">
        <CloseButton />
        <img src={logo} alt="Nimiq Treasury" class="w-200" />
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
