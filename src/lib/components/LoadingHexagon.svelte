<script lang="ts">
    import { height, transactions } from "nimiq-svelte-stores";
    import { currentBlock } from "$store";
    import { onMount } from "svelte";

    export let maxBlocks = 6;
    let classTop = "",
        classBottom = "",
        classRight = "";

    let topSide: HTMLElement, rightSide: HTMLElement, bottomSide: HTMLElement;

    $: {
        let index = 0;
        let lastTx = $transactions[index];
        while (lastTx && lastTx.value !== 1 * 1e5) {
            lastTx = $transactions[index++];
            if (index >= $transactions.length) break;
        }

        if (lastTx) {
            const txHeight = Math.min(
                lastTx.blockHeight,
                lastTx.validityStartHeight
            );
            $currentBlock = $height - (txHeight || lastTx.validityStartHeight);
            // console.log("currentBlock", $currentBlock);
            console.log("height", $height);
            console.log("txHeight", txHeight);
            console.log("transactions height", lastTx.blockHeight);
            console.log("transactions validity", lastTx.validityStartHeight);
        }

        if ($currentBlock < 0) $currentBlock = 0;
        else if ($currentBlock > 7) $currentBlock = 7;
    }

    $: {
        console.log("currentBlock", $currentBlock);

        switch ($currentBlock) {
            case 0: {
                classTop = "fill-white";
                classRight = "fill-white";
                classBottom = "fill-white";
                break;
            }
            case 1: {
                classTop = "fill-white";
                classRight = "fill-blue-logo-light animate-pulse";
                classBottom = "fill-white";
                break;
            }
            case 2: {
                classTop = "fill-white";
                classRight = "fill-blue-logo-light";
                classBottom = "fill-green-logo animate-pulse";
                break;
            }
            case 3: {
                classTop = "fill-blue-logo animate-pulse";
                classRight = "fill-blue-logo-light";
                classBottom = "fill-green-logo";
                break;
            }
            case 4: {
                classTop = "fill-blue-logo";
                classRight = "fill-blue-logo-light";
                classBottom = "fill-green-logo";
                setTimeout(() => {
                    classTop = "fill-blue-logo animate-pulse";
                    classRight = "fill-blue-logo-light animate-pulse";
                    classBottom = "fill-green-logo animate-pulse";
                }, 100);
                break;
            }
            case 5: {
                classTop = "fill-red-logo";
                classRight = "fill-red-logo";
                classBottom = "fill-red-logo";
                setTimeout(() => {
                    classTop = "fill-red-logo animate-pulse";
                    classRight = "fill-red-logo animate-pulse";
                    classBottom = "fill-red-logo animate-pulse";
                }, 100);
                break;
            }
            case 6: {
                classTop = "fill-gold";
                classRight = "fill-gold";
                classBottom = "fill-gold";
                setTimeout(() => {
                    classTop = "fill-gold animate-pulse";
                    classRight = "fill-gold animate-pulse";
                    classBottom = "fill-gold animate-pulse";
                }, 100);
                break;
            }
            case 7: {
                classTop = "fill-gold";
                classRight = "fill-gold";
                classBottom = "fill-gold";
                console.log("We have a winner!");
                break;
            }
            default: {
                classTop = "fill-white";
                classRight = "fill-white";
                classBottom = "fill-white";
                console.log("How did we get here?");
                break;
            }
        }
    }

    $: {
        if (topSide && classTop) {            
            const children = topSide.children;
            for (const child of children) {
                child.setAttribute("class", `${classTop} transition-all`);
            }
        }
        if (rightSide && classRight) {
            const children = rightSide.children;
            for (const child of children) {
                child.setAttribute("class", `${classRight} transition-all`);
            }
        }
        if (bottomSide && classBottom) {
            const children = bottomSide.children;
            for (const child of children) {
                child.setAttribute("class", `${classBottom} transition-all`);
            }
        }
    }

    onMount(() => {
        topSide = document.getElementById("top-side");
        rightSide = document.getElementById("right-side");
        bottomSide = document.getElementById("bottom-side");
    });
</script>

<div class="relative">
    <svg
        width="224"
        height="200"
        viewBox="0 0 224 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g class="g-shadow" id="top-side">
            <path
                d="M146.149 0.751085L65.2123 0.270863C57.2439 0.226924 49.8597 4.44373 45.8696 11.3477L5.71369 80.6666C2.67606 85.9094 6.40039 92.4752 12.455 92.557L92.0051 93.724C101.09 93.8561 109.518 89.0555 114.035 81.1769L153.169 12.9269C156.264 7.52815 152.384 0.794172 146.149 0.751085Z"
                fill="#fff"
            />
        </g>
        <g class="g-shadow" id="right-side">
            <path
                d="M175.937 19.0105L216.192 89.2284C220.152 96.1431 220.116 104.646 216.07 111.518L175.494 180.592C172.426 185.816 164.877 185.806 161.826 180.576L121.648 111.915C117.062 104.072 117.092 94.3727 121.727 86.5625L161.876 18.9052C165.059 13.5415 172.842 13.6116 175.937 19.0105Z"
                fill="#fff"
            />
        </g>
        <g class="g-shadow" id="bottom-side">
            <path
                d="M5.55552 114.575L45.4015 185.027C49.3173 191.963 56.6614 196.258 64.637 196.299L144.747 196.649C150.804 196.681 154.645 190.181 151.715 184.88L113.161 115.306C108.76 107.366 100.394 102.433 91.3118 102.435L12.6299 102.439C6.41143 102.439 2.48686 109.16 5.55552 114.575Z"
                fill="#fff"
            />
        </g>
        <!-- White Background -->
        <g>
            <path
                d="M172.509 95.1162L145.631 48.3692C143.712 45.0426 140.163 43 136.323 43L82.5968 43C78.7571 43 75.2374 45.0426 73.3176 48.3692L46.4399 95.1162C44.52 98.4428 44.52 102.557 46.4399 105.884L73.2885 152.631C75.2083 155.957 78.7571 158 82.5968 158H136.323C140.163 158 143.712 155.957 145.631 152.631L172.48 106.088C174.487 102.703 174.516 98.5011 172.509 95.1162Z"
                fill="#EDF1F7"
            />
            <path
                d="M171.989 95.4153L171.993 95.4222C173.886 98.6154 173.861 102.583 171.964 105.782L171.96 105.788L145.112 152.331C143.299 155.471 139.949 157.4 136.323 157.4H82.5968C78.9708 157.4 75.6205 155.471 73.8082 152.331L46.9602 105.585L46.9595 105.584C45.1468 102.443 45.1468 98.5571 46.9595 95.4161L46.96 95.4153L73.8373 48.6691C73.8374 48.6689 73.8375 48.6687 73.8376 48.6685C75.6509 45.527 78.9729 43.6 82.5968 43.6L136.323 43.6C139.949 43.6 143.299 45.5288 145.112 48.6691L171.989 95.4153Z"
                stroke="#1F2248"
                stroke-opacity="0.15"
                stroke-width="1.2"
            />
        </g>
    </svg>

    <div
        class="absolute top-1/2 left-[48.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
    >
        <span class="font-black tracking-wider text-blue-dark text-28 leading-1"
            >{Math.min($currentBlock, 6)}/{maxBlocks}</span
        >
        <span class="font-bold text-blue-dark/50 text-18 leading-1">blocks</span
        >
    </div>
</div>

<style>
    .g-shadow {
        filter: drop-shadow(0px 2px 2px rgb(0 0 0 / 0.15));
    }
</style>
