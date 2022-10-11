<script lang="ts">
    import { established, height, client } from "nimiq-svelte-stores";
    import type Nimiq from "@nimiq/core-web";

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
    let isHovering = false;

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
    <div
        class="w-96 h-96 m-40 rounded bg-[#269EEE] shadow flex justify-center items-center cursor-pointer"
        on:click={handlePlay}
        on:mouseenter={() => (isHovering = true)}
        on:mouseleave={() => (isHovering = false)}
    >
        <InfoIcon class="absolute -left-40" />
        {#if $wallet && $established}
            <svg
                width="50"
                height="50"
                viewBox="0 0 46.78 53.7"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-10 transition duration-100 ease-in-out transform {isHovering ? 'scale-110' : 'scale-100'}"
            >
                <g>
                    <path
                        fill="white"
                        d="M46.28,27.72a1,1,0,0,0,0-1.73L1.5.14A1,1,0,0,0,0,1V52.7a1,1,0,0,0,1.5.87Z"
                    />
                </g>
            </svg>
        {:else}
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.02722 35.0151C0.528575 35.0151 -1.64846 29.509 1.63383 26.4325L11.4636 17.2193C12.017 16.7006 12.9227 17.093 12.9227 17.8515V17.8515C12.9227 18.6111 12.0149 19.0031 11.462 18.4823L2.04605 9.61289C-1.24495 6.51291 0.948862 0.984375 5.46999 0.984375V0.984375C6.79449 0.984375 8.06474 1.51058 9.00125 2.44722L18.5208 11.9682C19.0454 12.4929 18.6738 13.3899 17.9319 13.3899V13.3899C17.1899 13.3899 16.8183 12.4929 17.3429 11.9682L26.8588 2.45091C27.7976 1.51191 29.0711 0.984375 30.3989 0.984375V0.984375C34.9356 0.984375 37.1329 6.53541 33.8253 9.64043L24.4057 18.4833C23.8505 19.0044 22.9411 18.6108 22.9411 17.8493V17.8493C22.9411 17.0895 23.847 16.6952 24.4031 17.213L34.2457 26.3772C37.561 29.464 35.3767 35.0151 30.8469 35.0151V35.0151C29.5367 35.0151 28.279 34.4995 27.3458 33.5798L17.3533 23.7313C16.8282 23.2138 17.1946 22.32 17.9319 22.32V22.32C18.6691 22.32 19.0355 23.2138 18.5104 23.7313L8.51043 33.5871C7.582 34.5022 6.33079 35.0151 5.02722 35.0151V35.0151Z"
                    fill="white"
                />
            </svg>
        {/if}
    </div>
    <div class="bg-[#EDF1F7] stroke-[#E9E9E9] stroke-2 rounded-8 py-6 px-16">
        <span class="font-bold text-18 text-black/50"
            >Times played</span
        >
    </div>
    <span class="my-8 font-extrabold text-black text-20"
        >{$participationCounter}</span
    >
</div>

<style>
    .shadow {
        box-shadow: 0px 0px 0px 12px #1f8cd6, 0px 0px 0px 20px #2b9ce8,
            0px 0px 0px 27px #59b0e9, 0px 0px 0px 33px #cee1ef,
            inset 5px 5px 15px 5px rgba(40, 159, 238, 0);
    }
</style>
