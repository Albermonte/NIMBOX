<script lang="ts">
    import HubApi from "@nimiq/hub-api";
    import { participationCounter } from "../store";

    import InfoIcon from "./InfoIcon.svelte";

    let componentClass: string = "";
    export { componentClass as class };

    const hubApi = new HubApi(
        import.meta.env.DEV
            ? "https://hub.nimiq-testnet.com"
            : "https://hub.nimiq.com"
    );

    // TODO: Import from .env
    const gameAddress = "NQ38 5QM1 6E26 UUB1 XMU3 01JN 3RLV HAN9 U6MF";

    const options = {
        appName: "Nimiq Treasure Game",
        recipient: gameAddress,
        value: 1 * 1e5 /* 1 NIM */,
        // TODO: Add logo. https://nimiq.github.io/hub/api-reference/checkout
        // shopLogoUrl: "",
        // TODO: add fee? If more than 10 tx in mempool the rest will be rejected in case of 0 fees
        // fee: 0,
        extraData: "Trying to unlock the Nimiq Treasure 🙌",
    };
</script>

<div class={componentClass}>
    <button
        class="py-8 text-white rounded bg-blue-light px-18"
        on:click={async () => {
            const signedTransaction = await hubApi.checkout(options);
            $participationCounter++;
        }}
    >
        Play the game <span class="font-light">➞</span>
    </button>
    <div class="flex items-center mt-16">
        <InfoIcon />
        <span class="mx-6 font-[650]">
            Participated: <span class="font-black text-20">
                {$participationCounter}
            </span></span
        >
    </div>
</div>
