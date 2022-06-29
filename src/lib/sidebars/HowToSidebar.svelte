<script lang="ts">
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;
</script>

<SidebarPanel {right} width="42vw">
    <div class="px-24 text-17 text-justify">
        <h1>About Nimiq Treasure</h1>
        <p>
            Nimiq Treasure is a decentralized Nimiq game, made by the Nimiq
            community.
        </p>
        <h1>How to play?</h1>
        <p>
            Click PARTICIPATE to submit a transaction of atleast <b
                class="font-bold text-blue-light">1 NIM</b
            > to the game.
        </p>
        <ul class="list-disc ml-32 mt-18">
            <li>
                The timer will start the 6 block countdown (6 blocks on Nimiq
                blockchain).
            </li>
            <li>
                The timer resets to 0 blocks whenever someone sends a new
                transaction to the treasure chest.
            </li>
            <li>
                There is no set limit for the number of transactions sent To
                win, be the last one to send a transaction!
            </li>
        </ul>
    </div>
</SidebarPanel>

<style>
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p, ul {
        color: #9e9e9e;
    }
</style>
