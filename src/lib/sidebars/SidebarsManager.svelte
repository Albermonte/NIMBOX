<script lang="ts">
    import { url } from "../../store";
    import FreeNimSidebar from "./FreeNimSidebar.svelte";
    import HallOfFameSidebar from "./HallOfFameSidebar.svelte";
    import HowToSidebar from "./HowToSidebar.svelte";

    let route = "";
    $: route = $url.hash.replace("#/", "");

    function background(node, { duration = 1000, delay = 0 }) {
        return {
            duration,
            delay,
            css: (t) => {
                return `
					background-color: rgb(31 35 72 /${Math.min(t / 2, 0.2)})`;
            },
        };
    }
</script>

{#if route}
    <div
        class="absolute top-0 h-full w-full cursor-pointer order-1 bg-blue-dark/20"
        on:click={() => url.navigate("")}
        transition:background
    />
    {#if route === "free-nim"}
        <FreeNimSidebar />
    {:else if route === "how-to"}
        <HowToSidebar />
    {:else if route === "hall-of-fame"}
        <HallOfFameSidebar />
    {/if}
{/if}
