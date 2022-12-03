<script lang="ts">
    import CloseButton from "../buttons/CloseButton.svelte";
    import { fly } from "svelte/transition";

    import { background } from "$utils/transitions";
    import { url } from "$store";
    import CashlinkInfo from "./CashlinkInfo.svelte";
    import CashlinkLogin from "./CashlinkLogin.svelte";

    let page: 0 | 1 = 0;

    function clickOutside(element, callbackFunction) {
        function onClick(event) {
            if (!element.contains(event.target)) {
                callbackFunction();
            }
        }

        document.body.addEventListener("click", onClick);

        return {
            update(newCallbackFunction) {
                callbackFunction = newCallbackFunction;
            },
            destroy() {
                document.body.removeEventListener("click", onClick);
            },
        };
    }

    const handleClickOutside = () => {
        url.navigate("");
    };

    const handlePageChange = (x: 0 | 1) => {
        setTimeout(() => {
            page = x;
        }, 100);
    };
</script>

<div
    class="absolute top-0 flex items-center justify-center w-full h-full bg-blue-dark/20"
    in:background={{ duration: 500 }}
    out:background={{ duration: 200 }}
>
    <div
        class="w-2/3 bg-grey h-fit-content max-w-4xl min-w-[600px] min-h-[600px] rounded-16 p-24 pb-32 transition-height grid grid-rows-[auto_1fr]"
        use:clickOutside={handleClickOutside}
        in:fly={{ y: 30 }}
        out:fly={{ y: 10, duration: 150 }}
    >
        <div class="flex items-center justify-between pb-24">
            <h1 class="font-bold text-24">Login using a Cashlink</h1>
            <CloseButton />
        </div>
        {#if page === 0}
            <CashlinkInfo on:goNext={() => handlePageChange(1)} />
        {:else}
            <CashlinkLogin on:goBack={() => handlePageChange(0)} />
        {/if}
    </div>
</div>
