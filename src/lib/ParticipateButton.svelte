<script lang="ts">
    import { established, height, client } from "nimiq-svelte-stores";
    import type Nimiq from "@nimiq/core-web";
    import { fly } from "svelte/transition";

    import { participationCounter, userCashlink, url, wallet } from "../store";

    import InfoIcon from "./InfoIcon.svelte";

    let componentClass: string = "";
    export { componentClass as class };

    const handleLogout = () => {
        $userCashlink = null;
        $wallet = null;
    };

    // TODO: Import from .env
    const gameAddress = "NQ38 5QM1 6E26 UUB1 XMU3 01JN 3RLV HAN9 U6MF";
    let txHash = "";

    const handlePlay = async () => {
        try {
            const account = await client.getAccount($wallet.address);
            const balance = account.balance / 1e5;
            // TODO: if no balance, show error
            if (balance < 1) return;

            const extraData = Nimiq.BufferUtils.fromUtf8(
                "Trying to unlock the Nimiq Treasure 🙌"
            );

            const tx = new Nimiq.ExtendedTransaction(
                $wallet.address, // sender address
                Nimiq.Account.Type.BASIC, // and account type
                Nimiq.Address.fromUserFriendlyAddress(gameAddress), // recipient address
                Nimiq.Account.Type.BASIC, // and type
                1 * 1e5, // amount
                0, // fee
                $height,
                Nimiq.Transaction.Flag.NONE,
                extraData // the message
            );
            const keyPair = $wallet.keyPair;
            const signature = Nimiq.Signature.create(
                keyPair.privateKey,
                keyPair.publicKey,
                tx.serializeContent()
            );
            const proof = Nimiq.SignatureProof.singleSig(
                keyPair.publicKey,
                signature
            );
            tx.proof = proof.serialize();

            const txDetails = await client.sendTransaction(tx);
            if (txHash !== txDetails.transactionHash.toHex()) {
                txHash = txDetails.transactionHash.toHex();
                $participationCounter++;
            }
        } catch (error) {
            console.log("Error sending tx:", error);
        }
    };
</script>

<div class={componentClass}>
    {#if !$established}
        <button
            class="min-w-full py-8 text-white rounded bg-blue-light px-18"
            disabled
        >
            Loading...
        </button>
    {:else if $wallet}
        <button
            class="py-8 text-white rounded bg-blue-light px-18"
            on:click={handlePlay}
        >
            Play the game <span class="font-light">➞</span>
        </button>
    {:else}
        <button
            class="min-w-full py-8 text-white rounded bg-blue-light px-18"
            on:click={async () => {
                // Use timeout to prevent modal closing on opening cause it's registering a click outside the modal
                setTimeout(() => url.navigate("login"), 100);
            }}
        >
            Login <span class="font-light">➞</span>
        </button>
    {/if}
    <div class="flex items-center my-16">
        <InfoIcon />
        <span class="mx-6 font-[650]">
            Participated: <span class="font-black text-20">
                {$participationCounter}
            </span></span
        >
    </div>
    {#if $established && $wallet}
        <button
            class="bg-radial-red rounded px-12 py-2 text-white font-semibold text-14"
            on:click={handleLogout}
            in:fly={{ y: 10, delay: 250 }}
            out:fly={{ y: 10, delay: 50 }}
        >
            Logout
        </button>
    {/if}
</div>
