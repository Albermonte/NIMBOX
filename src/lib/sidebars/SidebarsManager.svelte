<script lang="ts">
    import { url } from "../../store";
    import ModalContainer from "../modal/ModalContainer.svelte";
    import FreeNimSidebar from "./FreeNimSidebar.svelte";
    import HallOfFameSidebar from "./HallOfFameSidebar.svelte";
    import HowToSidebar from "./HowToSidebar.svelte";

    import { background } from "../../utils/transitions";

    let route = "";
    $: route = $url.hash.replace("#/", "");
</script>

{#if route === "login"}
    <ModalContainer />
{:else if route}
    <div
        class="absolute top-0 order-1 w-full h-full cursor-pointer bg-blue-dark/20"
        on:click={() => url.navigate("")}
        in:background={{ duration: 500 }}
        out:background={{ duration: 200 }}
    />
    {#if route === "free-nim"}
        <FreeNimSidebar />
    {:else if route === "how-to"}
        <HowToSidebar />
    {:else if route === "hall-of-fame"}
        <HallOfFameSidebar />
    {/if}
{/if}
