<script lang="ts">
    import CloseButton from "../CloseButton.svelte";
    import { fly } from "svelte/transition";

    import { background } from "../../utils/transitions";
    import { url } from "../../store";

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
    class="absolute top-0 flex items-center justify-center w-full h-full bg-blue-dark/20"
    in:background={{ duration: 500 }}
    out:background={{ duration: 200 }}
>
    <div
        class="w-2/3 bg-grey h-fit-content max-w-3xl min-w-[525px] rounded-16 p-32"
        use:clickOutside={handleClickOutside}
        in:fly={{ opacity: 1, y: 30 }}
        out:fly={{ opacity: 0, y: 10, duration: 150 }}
    >
        <div class="flex items-center justify-between pb-24">
            <h1 class="font-bold text-24">Login using a Cashlink</h1>
            <CloseButton />
        </div>
        <div class="flex justify-between h-full">
            <div class="w-1/2 pr-8 text-justify">
                <p class="text-blue-dark/60">
                    Cashlinks are an amazing and unique feature of the Nimiq
                    Blockchain. In essence, a Cashlink is a cryptocurrency
                    payment done over text.
                    <br />
                    <br />
                    The Nimiq Cashlink feature creates a temporary account to hold
                    the NIM you want to use in the game and creates a link from that.
                    That way you can participate in the game as many times as you
                    want until you run out of NIM inside the Cashlink.
                    <br />
                    <br />
                    A Cashlink looks like this:
                    <br />
                </p>
                <div class="p-8 my-6 rounded-6 bg-grey-dark/90">
                    <a
                        href="https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA=="
                        target="_blank"
                        class="w-full italic break-words text-15 text-blue-dark/50"
                    >
                        https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA==
                    </a>
                </div>
                <span class="text-13"
                    >More info: <a
                        class="text-blue-light"
                        href="https://www.nimiq.com/blog/nimiq-cashlinks/"
                        target="_blank">Nimiq Cashlinks</a
                    ></span
                >
            </div>
            <div class="flex flex-col w-1/2 pl-8">
                <p class="text-justify text-blue-dark/60">
                    Fund your Cashlink with any amount you want, every time you
                    click on the <i>Play the game</i> button 1 NIM will be
                    substracted from that Cashlink and used to play.
                    <br />
                    <br />
                    So, if you fund a Cashlink with 25 NIM, you will be able to play
                    25 times until you need to fund the Cashlink again.
                </p>
                <div class="flex items-center justify-center h-full">
                    <a
                        class="px-12 py-4 text-white rounded text-14 font-semibold bg-radial-gold hover:scale-[1.01] hover:drop-shadow-sm transition-all duration-75"
                        href="https://wallet.nimiq{import.meta.env.DEV
                            ? '-testnet'
                            : ''}.com/send/nim"
                        target="_blank"
                    >
                        Fund Cashlink</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
