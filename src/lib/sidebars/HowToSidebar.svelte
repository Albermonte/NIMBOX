<script lang="ts">
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;
</script>

<SidebarPanel {right}>
    <div>
        <h1>About Nimiq Treasure</h1>
        <p>
            Nimiq Treasure is a decentralized Nimiq game, made by the Nimiq
            community.
        </p>
        <h1>How to play?</h1>
        <p>
            Click PARTICIPATE to submit a transaction of atleast <b
                class="font-extrabold text-blue-light">1 NIM</b
            > to the game. The timer will start the 6 block countdown (6 blocks on
            Nimiq blockchain). The timer resets to 0 blocks whenever someone sends
            a new transaction to the treasure chest. There is no set limit for the
            number of transactions sent To win, be the last one to send a transaction!
        </p>
    </div>
</SidebarPanel>

<style>
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    p {
        color: #9e9e9e;
    }
</style>
