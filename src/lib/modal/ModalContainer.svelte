<script lang="ts">
    import CloseButton from "$lib/buttons/CloseButton.svelte";
    import LoginModal from "$lib/modal/LoginModal/index.svelte";
    import { fly } from "svelte/transition";

    import { background } from "$utils/transitions";
    import { url } from "$store";
    import LogoutModal from "./LogoutModal.svelte";

    export let route = "login";

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
</script>

<div
    class="absolute top-0 flex items-center justify-center w-full h-full transition-all bg-blue-dark/20"
    in:background={{ duration: 500 }}
    out:background={{ duration: 200 }}
>
    <div
        class="flex flex-col p-24 pb-40 bg-grey rounded-16 transition-height"
        use:clickOutside={handleClickOutside}
        in:fly={{ y: 30 }}
        out:fly={{ y: 10, duration: 150 }}
    >
        <CloseButton class="self-end mr-10" />
        {#if route === "login"}
            <LoginModal />
        {:else if route === "log-out"}
            <LogoutModal />
        {/if}
    </div>
</div>
