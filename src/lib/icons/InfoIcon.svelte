<script lang="ts">
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
            const card = infoCardElement.getBoundingClientRect();
            // Find out which side of the screen the icon is on
            const left = svg.x + svg.width / 2 < innerWidth / 2;
            const x = svg.x + svg.width / 2;

            // console.log("card", card);
            // let left = b.left - c.width / 2 + 74;
            // let right = b.right + c.width / 2 + 74;
            // console.log("left, right", left, right);

            // left < 0 && (left = b.left);

            // infoCardPosition = {
            //     top: b.top + b.height + 20,
            //     left,
            // };

            // trianglePositionLeft = b.x - left;
        }
    }
</script>

<svelte:window bind:innerWidth />

<svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    bind:this={infoSVGElement}
    on:mouseenter={() => (showInfoCard = true)}
    on:mouseleave={() => {
        setTimeout(() => {
            showInfoCard = false;
        }, 100);
    }}
    class={componentClass}
>
    <circle cx="13" cy="13" r="13" fill="#B7B7B7" />
    <path
        d="M11.7951 13.1594C11.7951 12.3727 12.4328 11.735 13.2195 11.735C14.0062 11.735 14.6439 12.3727 14.6439 13.1594V19.9254C14.6439 20.712 14.0062 21.3498 13.2195 21.3498C12.4328 21.3498 11.7951 20.712 11.7951 19.9254V13.1594Z"
        fill="#F7F9FB"
    />
    <path
        d="M15 7.1057C15 8.08905 14.2028 8.88621 13.2195 8.88621C12.2362 8.88621 11.439 8.08905 11.439 7.1057C11.439 6.12236 12.2362 5.3252 13.2195 5.3252C14.2028 5.3252 15 6.12236 15 7.1057Z"
        fill="#F7F9FB"
    />
</svg>

{#if showInfoCard || keepShowingInfoCard}
    <div
        class="absolute z-50 rounded-8 bg-black w-360 text-white top-136"
        style="left: {infoCardPosition.left}; right: {infoCardPosition.right};"
        on:mouseenter={() => (keepShowingInfoCard = true)}
        on:mouseleave={() => {
            showInfoCard = false;
            keepShowingInfoCard = false;
        }}
        bind:this={infoCardElement}
    >
        <div
            class="absolute -top-14 h-0 w-0 border-black border-x-8 border-b-[14px] border-x-transparent"
            style="left: {trianglePosition.left}; right: {trianglePosition.right};"
        >
            <div
                class="relative h-0 w-0 top-2 -left-[6px] border-black border-x-[6px] border-b-[12px] border-x-transparent"
            />
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque
            incidunt ipsum modi cumque voluptatum nihil cupiditate doloribus.
            Inventore aspernatur totam id, exercitationem officia placeat
            distinctio sequi natus maiores voluptatem.
        </p>
    </div>
{/if}
