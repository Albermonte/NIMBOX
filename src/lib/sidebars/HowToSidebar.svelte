<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Icon from "$lib/icons/Icon.svelte";
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;
</script>

<SidebarPanel {right} width="42vw">
    <div class="flex flex-col h-full">
        <div class="flex flex-col justify-center gap-10 px-80 h-1/3">
            <h1 class="font-extrabold text-black text-22">
                About Nimiq Treasure
            </h1>
            <p class="font-semibold mb-22 text-16 text-black/50">
                Nimiq Treasury is a decentralized game where there are big
                prizes to be won. Fund your Cashlink and play the game for a
                chance to win the chest of Nimiq treasury!
            </p>
        </div>
        <div class="bg-[#EDF1F7] rounded-8 pt-36 px-80 flex flex-col flex-grow">
            <h1 class="flex items-center font-bold text-black text-22">
                How to play?
                <Divider />
            </h1>
            <p class="font-semibold text-black/50">
                Before you can participate the game you have to fund your
                Cashlink first. When you funded your cashlink login and click
                the blue PLAY button to submit a transaction of at least 1 NIM
                to the game.
            </p>
            <ul
                class="mt-20 ml-24 font-semibold list-disc text-16 text-black/50"
            >
                <li>
                    The timer will start the 6 block countdown (6 blocks on
                    Nimiq blockchain).
                </li>
                <li>
                    The timer resets to 0/6 blocks whenever someone sends a new
                    transaction to the treasure chest.
                </li>
                <li>
                    There is no set limit for the number of transactions sent.
                </li>
                <li>To win, be the last one to send a transaction!</li>
            </ul>
            <div class="flex flex-col my-auto justify-evenly 2xl:flex-row">
                <button
                    class="flex items-center px-12 py-6 font-bold text-white bg-linear-button-blue rounded-24 text-14"
                >
                    <Icon
                        name="youtube-logo"
                        class="mr-8"
                        width="24"
                        height="24"
                    />
                    Watch "How to Play"
                </button>
                <button
                    class="flex items-center py-6 font-bold text-white bg-black px-14 rounded-24 text-14"
                >
                    <Icon
                        name="nimiq-logo"
                        class="mr-8"
                        width="14"
                        height="12"
                    />
                    Buy Nimiq
                </button>
                <button
                    class="flex items-center py-6 font-bold text-white bg-black px-18 rounded-24 text-14"
                    >FAQ</button
                >
            </div>
        </div>
    </div>
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
