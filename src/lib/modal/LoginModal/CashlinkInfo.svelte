<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";

    const dispatch = createEventDispatcher();
</script>

<div
    class="grid grid-cols-2 gap-26 leading-1.6 text-blue-dark/60 text-justify"
    in:fly={{ y: 25 }}
>
    <div>
        <p>
            Cashlinks are an amazing and unique feature of the Nimiq Blockchain.
            In essence, a Cashlink is a cryptocurrency payment done over text.
            <br />
            <br />
            The Nimiq Cashlink feature creates a temporary account to hold the NIM
            you want to use in the game and creates a link from that. That way you
            can participate in the game as many times as you want until you run out
            of NIM inside the Cashlink.
            <br />
            <br />
            A Cashlink looks like this:
            <br />
        </p>
        <div class="p-8 my-6 rounded-6 bg-grey-dark/90">
            <a
                href="https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA=="
                target="_blank"
                rel="noopener noreferrer"
                class="w-full italic break-words text-15 text-blue-dark/50"
            >
                https://hub.nimiq.com/cashlink/#GGX0PrYucAIkgTQryvCel3877AJRaVoA2_JUUmPX0SYAAAAAAAGGoA==
            </a>
        </div>
        <span class="text-13"
            >More info: <a
                class="text-blue-light"
                href="https://www.nimiq.com/blog/nimiq-cashlinks/"
                target="_blank"
                rel="noopener noreferrer">Nimiq Cashlinks</a
            ></span
        >
        <p>
            <br />
            Fund your Cashlink with the amount you want. Each time you click on the
            <i class="font-bold">Play the game</i>
            button,
            <b class="font-bold text-blue-light">1 NIM</b> will be substracted from
            that Cashlink and used to play.
        </p>
    </div>
    <div class="flex flex-col">
        <p>
            So, if you fund a Cashlink with <b class="font-bold text-blue-light"
                >25 NIM</b
            >, you will be able to play
            <b class="font-bold text-blue-light">25 times</b> until you need to fund
            the Cashlink again.
        </p>
        <div class="flex flex-col items-center justify-center h-full gap-y-28">
            <a
                class="px-12 py-4 text-white rounded text-14 font-bold bg-radial-gold hover:scale-[1.01] hover:drop-shadow-sm transition-all duration-75"
                href="https://wallet.nimiq{import.meta.env.DEV
                    ? '-testnet'
                    : ''}.com/send/nim"
                target="_blank"
                rel="noopener noreferrer"
            >
                Fund Cashlink</a
            >
            <button
                class="px-12 py-4 text-white rounded text-14 font-bold bg-radial-green hover:scale-[1.01] hover:drop-shadow-sm transition-all duration-75"
                on:click={() => dispatch("goNext")}
                >Login using Cashlinks</button
            >
        </div>
    </div>
</div>
