<script lang="ts">
    import CloseButton from "$lib/buttons/CloseButton.svelte";
    import { fly } from "svelte/transition";

    import { background } from "$utils/transitions";
    import { url, userCashlink } from "$store";

    import InfoIcon from "$lib/icons/InfoIcon.svelte";
    import CashlinkCard from "./CashlinkCard.svelte";
    import CashlinkInput from "./CashlinkInput.svelte";

    let balance = 0,
        cashlink = "";

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

    const handleLogin = () => {
        if (balance < 1) return;
        $userCashlink = cashlink;
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
        <div class="flex flex-col items-center px-40 gap-y-32">
            <h1 class="font-bold text-24">Login using a Cashlink</h1>
            <CashlinkCard {balance} />
            <div class="flex items-center justify-evenly">
                <InfoIcon class="w-26 h-26" />
                <span class="font-bold text-12 text-black/50 mx-14"
                    >No funded cashlink yet? Fund your cashlink first</span
                >
            </div>
            <!-- Cashlink Input -->
            <CashlinkInput
                on:balance={({ detail }) => (balance = detail)}
                on:cashlink={({ detail }) => (cashlink = detail)}
            />
            <button
                class="w-full py-8 font-extrabold text-white bg-linear-button-blue rounded-24 text-16"
                on:click={handleLogin}
            >
                Log in
            </button>
        </div>
    </div>
</div>

<!-- {#if page === 0}
    <CashlinkInfo on:goNext={() => handlePageChange(1)} />
{:else}
    <CashlinkLogin on:goBack={() => handlePageChange(0)} />
{/if} -->
