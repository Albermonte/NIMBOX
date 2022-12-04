<script>
    import cashlinkWithEffects from "/assets/cashlink-with-effects.svg";
    export let balance = 0;
</script>

<div
    class=" bg-grey flex border-[#D6D6D6] border-1 rounded-8 py-20 px-28 shadow-around gap-56"
>
    <div class="flex flex-col">
        <span class="font-semibold text-16 text-black/60">Cashlink amount</span>
        <span class="font-bold text-black text-32">{balance} NIM</span>
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
            class="py-10 mx-auto mt-10 font-extrabold text-white px-14 bg-linear-button-green text-12 rounded-24"
            on:click={() =>
                window.open(
                    `https://wallet.nimiq${
                        import.meta.env.DEV && "-testnet"
                    }.com/send/nim`,
                    "_blank"
                )}>Fund Cashlink</button
        >
    </div>
</div>
