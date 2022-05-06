<script lang="ts">
    import RouteButton from "./RouteButton.svelte";
    import nimiqCommunity from "/assets/nimiq-community-logo.svg";
    import hamburguerIcon from "/assets/icons/hamburguer.svg";
</script>

<footer
    class="static bottom-0 flex items-center justify-between w-[100vw] px-20 xl:absolute h-136 sm:px-28 md:px-56"
>
    <div>
        <RouteButton route="hall-fame">
            <img src={hamburguerIcon} alt="" />
            <span class={`font-bold text-14 leading-[14px]`}>
                Hall of Fame
            </span>
        </RouteButton>
    </div>
    <div
        class="h-136 bg-[url('/assets/nimiq-hexagon-1.svg')] bg-no-repeat bg-fixed "
    >
        <img src={nimiqCommunity} alt="Nimiq community" />
    </div>
</footer>
