<script lang="ts">
    import { url, wallet } from "$store";
    import ModalContainer from "$lib/modal/ModalContainer.svelte";
    import FreeNimSidebar from "./FreeNimSidebar.svelte";
    import HallOfFameSidebar from "./HallOfFameSidebar.svelte";
    import HowToSidebar from "./HowToSidebar.svelte";
    import CashlinkInfoSidebar from "./CashlinkInfoSidebar.svelte";
    import ShareAndWinSidebar from "./ShareAndWinSidebar.svelte";

    import { background } from "$utils/transitions";

    let route = "";
    $: route = $url.hash.replace("#/", "");
    $: {
        if (route === "fund-your-cashlink") {
            if ($wallet) {
                window.open(
                    `https://wallet.nimiq${
                        import.meta.env.DEV ? "-testnet" : ""
                    }.com/nimiq:${$wallet.address
                        .toUserFriendlyAddress()
                        .replace(/\s/g, "")}`,
                    "_blank"
                );
                url.navigate("");
            } else {
                url.navigate("login");
            }
        }
    }
</script>

{#if route === "login" || route === "log-out"}
    <ModalContainer {route} />
{:else if route}
    <button
        class="absolute top-0 order-1 w-full h-full cursor-pointer bg-blue-dark/20"
        on:click={() => url.navigate("")}
        in:background={{ duration: 500 }}
        out:background={{ duration: 200 }}
    />
    {#if route === "free-nim"}
        <FreeNimSidebar />
    {:else if route === "how-to-play"}
        <HowToSidebar />
    {:else if route === "hall-of-fame"}
        <HallOfFameSidebar />
    {:else if route === "cashlink-info"}
        <CashlinkInfoSidebar />
    {:else if route === "share-and-win"}
        <ShareAndWinSidebar />
    {/if}
{/if}
