<script lang="ts">
    import { fly } from "svelte/transition";
    let componentClass: string = "";
    export { componentClass as class };

    let innerWidth = window.innerWidth,
        showInfoCard = false,
        keepShowingInfoCard = false,
        infoSVGElement: SVGElement,
        infoCardElement: HTMLDivElement,
        infoCardPosition = { left: "unset", right: "unset" },
        trianglePosition = { left: "unset", right: "unset" };

    $: {
        if (innerWidth && infoSVGElement && infoCardElement) {
            const svg = infoSVGElement.getBoundingClientRect();
            // Find out which side of the screen the icon is on
            const left = svg.x + svg.width / 2 < innerWidth / 2;

            infoCardPosition = {
                left: left ? "-28px" : "unset",
                right: left ? "unset" : "-28px",
            };

            trianglePosition = {
                left: left ? "33px" : "unset",
                right: left ? "unset" : "33px",
            };
        }
    }
</script>

<svelte:window bind:innerWidth />

<div class="relative">
    <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        bind:this={infoSVGElement}
        on:click={() => (showInfoCard = !showInfoCard)}
        on:keydown={() => (showInfoCard = !showInfoCard)}
        on:mouseleave={() => {
            setTimeout(() => {
                showInfoCard = false;
            }, 250);
        }}
        class="cursor-pointer"
    >
        <circle cx="11.5" cy="11.5" r="11.5" fill="#D2D3DA" />
        <path
            d="M10.4342 11.6412C10.4342 10.9453 10.9983 10.3812 11.6942 10.3812C12.3901 10.3812 12.9543 10.9453 12.9543 11.6412V17.6265C12.9543 18.3224 12.3901 18.8865 11.6942 18.8865C10.9983 18.8865 10.4342 18.3224 10.4342 17.6265V11.6412Z"
            fill="#F7F9FB"
        />
        <path
            d="M13.2693 6.286C13.2693 7.15589 12.5641 7.86107 11.6942 7.86107C10.8243 7.86107 10.1191 7.15589 10.1191 6.286C10.1191 5.41612 10.8243 4.71094 11.6942 4.71094C12.5641 4.71094 13.2693 5.41612 13.2693 6.286Z"
            fill="#F7F9FB"
        />
    </svg>

    {#if showInfoCard || keepShowingInfoCard}
        <div
            class="absolute z-20 top-[calc(100%+22px)] rounded-8 bg-black min-w-[360px] text-white {componentClass}"
            style="left: {infoCardPosition.left}; right: {infoCardPosition.right};"
            on:mouseenter={() => (keepShowingInfoCard = true)}
            on:mouseleave={() => {
                showInfoCard = false;
                keepShowingInfoCard = false;
            }}
            bind:this={infoCardElement}
            transition:fly={{ x: 0, y: 10, duration: 200 }}
        >
            <div
                class="absolute -top-14 h-0 w-0 border-black border-x-8 border-b-[14px] border-x-transparent"
                style="left: {trianglePosition.left}; right: {trianglePosition.right};"
            >
                <div
                    class="relative h-0 w-0 top-2 -left-[6px] border-black border-x-[6px] border-b-[12px] border-x-transparent"
                />
            </div>
            <div class="py-10 px-28">
                <slot />
            </div>
        </div>
    {/if}
</div>
