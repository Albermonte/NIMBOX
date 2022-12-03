<script lang="ts">
    import CloseButton from "$lib/buttons/CloseButton.svelte";
    import { fly } from "svelte/transition";

    import { background } from "$utils/transitions";
    import { url } from "$store";
    import CashlinkInfo from "./CashlinkInfo.svelte";
    import CashlinkLogin from "./CashlinkLogin.svelte";

    import cashlinkWithEffects from "/assets/cashlink-with-effects.svg";
    import InfoIcon from "$lib/icons/InfoIcon.svelte";

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
        class="flex flex-col p-24 pb-32 bg-grey rounded-16 transition-height"
        use:clickOutside={handleClickOutside}
        in:fly={{ y: 30 }}
        out:fly={{ y: 10, duration: 150 }}
    >
        <CloseButton class="self-end" />
        <div class="flex flex-col items-center px-32 gap-y-32">
            <h1 class="font-bold text-24">Login using a Cashlink</h1>
            <div
                class="flex border-[#D6D6D6] border-1 rounded-8 py-20 px-28 shadow-around gap-56"
            >
                <div class="flex flex-col">
                    <span class="font-semibold text-16 text-black/60"
                        >Cashlink amount</span
                    >
                    <span class="font-bold text-black text-32">0 NIM</span>
                    <span class="font-semibold text-12 text-black/40"
                        >No funded Cashlink yet</span
                    >
                </div>
                <div>
                    <img
                        src={cashlinkWithEffects}
                        width="53"
                        height="50"
                        alt="Cashlink Logo"
                        class="mx-auto"
                    />
                    <button
                        class="px-12 py-10 mx-auto mt-10 font-extrabold text-white bg-linear-button-green text-12 rounded-24"
                        >Fund Cashlink</button
                    >
                </div>
            </div>
            <div class="flex items-center justify-evenly">
                <InfoIcon class="w-26 h-26" />
                <span class="font-bold text-12 text-black/50 mx-14"
                    >No funded cashlink yet? Fund your cashlink first</span
                >
            </div>
            <button class="w-full py-8 font-extrabold text-white bg-linear-button-blue rounded-24 text-16">Log in</button>
        </div>

        <!-- {#if page === 0}
            <CashlinkInfo on:goNext={() => handlePageChange(1)} />
        {:else}
            <CashlinkLogin on:goBack={() => handlePageChange(0)} />
        {/if} -->
    </div>
</div>
