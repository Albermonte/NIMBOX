<script lang="ts">
    import { blur } from "svelte/transition";

    import { url } from "../../store";
    import FreeNimSidebar from "./FreeNimSidebar.svelte";
    import HallOfFameSidebar from "./HallOfFameSidebar.svelte";
    import HowToSidebar from "./HowToSidebar.svelte";

    let route = "";
    $: route = $url.hash.replace("#/", "");
</script>

{#if route}
    <div
        class="absolute top-0 h-full w-full backdrop-blur-[2px] cursor-pointer order-1 bg-blue-dark/20"
        on:click={() => url.navigate("")}
        transition:blur={{ duration: 200, amount: 1 }}
    />
    {#if route === "free-nim"}
        <FreeNimSidebar />
    {:else if route === "how-to"}
        <HowToSidebar />
    {:else if route === "hall-of-fame"}
        <HallOfFameSidebar />
    {/if}
{/if}
