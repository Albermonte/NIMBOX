<script lang="ts">
    import { fly } from "svelte/transition";
    import CloseButton from "../CloseButton.svelte";
    import logo from "/assets/treasury-logo.svg";

    export let right = true;
</script>

<div
    class={`transform-gpu absolute top-0 grid auto-cols-fr grid-rows-[20%_1fr] justify-around items-center drop-shadow-2xl bg-white h-full w-1/2 md:w-[50vw] px-32 ${
        right ? "right-0" : ""
    }`}
    in:fly={{ delay: 150, x: 100 }}
    out:fly={{ x: 100 }}
>
    <div class="flex items-center justify-between">
        <CloseButton />
        <img src={logo} alt="Nimiq Treasury" class="w-200" />
    </div>
    <slot />
</div>
