<script lang="ts">
    import BuyNimButton from "$lib/buttons/BuyNIMButton.svelte";
    import FaqButton from "$lib/buttons/FaqButton.svelte";
    import Icon from "$lib/icons/Icon.svelte";
    import SidebarPanel from "./SidebarPanel.svelte";
</script>

<SidebarPanel width="42vw">
    <svelte:fragment slot="top">
        <h1 class="font-extrabold text-black text-22">About Nimiq Treasure</h1>
        <p class="font-semibold mb-22 text-16 text-black/50">
            Nimiq Treasury is a decentralized game where there are big prizes to
            be won. Fund your Cashlink and play the game for a chance to win the
            chest of Nimiq Treasury!
        </p>
    </svelte:fragment>
    <svelte:fragment slot="card-title">How to play?</svelte:fragment>
    <svelte:fragment slot="content">
        <p class="font-semibold text-black/50">
            Before you can participate the game you have to fund your Cashlink
            first. When you funded your cashlink login and click the blue PLAY
            button to submit a transaction of at least 1 NIM to the game.
        </p>
        <ul class="mt-20 ml-24 font-semibold list-disc text-16 text-black/50">
            <li>
                The timer will start the 6 block countdown (6 blocks on Nimiq
                blockchain).
            </li>
            <li>
                The timer resets to 0/6 blocks whenever someone sends a new
                transaction to the treasure chest.
            </li>
            <li>There is no set limit for the number of transactions sent.</li>
            <li>To win, be the last one to send a transaction!</li>
        </ul>
        <div class="flex flex-col py-48 justify-evenly 2xl:flex-row">
            <button
                class="flex items-center px-12 py-6 font-bold text-white bg-linear-button-blue rounded-24 text-14"
            >
                <Icon name="youtube-logo" class="mr-8" width="24" height="24" />
                Watch "How to Play"
            </button>
            <BuyNimButton />
            <FaqButton />
        </div>
    </svelte:fragment>
</SidebarPanel>

<style>
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p,
    ul {
        color: #9e9e9e;
    }
    li {
        margin-bottom: 0.75rem;
    }
</style>
