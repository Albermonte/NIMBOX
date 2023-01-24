<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Icon from "$lib/icons/Icon.svelte";
    import SidebarPanel from "./SidebarPanel.svelte";

    export let right = true;
</script>

<SidebarPanel {right} width="42vw">
    <div class="flex flex-col h-full">
        <div class="flex flex-col justify-center gap-10 px-80">
            <h1 class="font-extrabold text-black text-22">
                Nimiq Treasury Giveaway
            </h1>
            <p class="font-bold mb-22 text-16 text-black/50">
                The Nimiq Treasure game is full of opportunities. Share the game
                on Twitter and get a chance to win a giveaway with every target
                we reach in the treasure pool.
            </p>
        </div>
        <div class="bg-[#EDF1F7] rounded-8 pt-36 px-80 flex flex-col flex-grow">
            <h1 class="flex items-center mb-20 font-bold text-black text-22">
                Targets
                <Divider />
            </h1>
            <!-- Targets Table -->
            <table class="w-full font-semibold text-16 text-black/50 2xl:w-1/2">
                <tr>
                    <td>10.000 NIM</td>
                    <td>10$</td>
                </tr>
                <tr>
                    <td>100.000 NIM</td>
                    <td>100$</td>
                </tr>
                <tr>
                    <td>500.000 NIM</td>
                    <td>500$</td>
                </tr>
                <tr>
                    <td>1.000.000 NIM</td>
                    <td>1000$</td>
                </tr>
            </table>
            <!-- Participate -->
            <h1 class="my-20 font-bold text-black text-22">To Participate</h1>
            <ol
                class="font-semibold list-decimal list-inside text-black/50 text-16 leading-1.6"
            >
                <li>Tweet and tag #NimiqTreasury</li>
                <li>Add a screenshot of your transaction in the scoreboard</li>
                <li>Tell people why they should play</li>
            </ol>
            <!-- Additional info -->
            <h1 class="my-20 font-bold text-black text-22">
                Additional information
            </h1>
            <p class="font-semibold mb-22 text-16 text-black/50">
                If the treasure is won by the last person to transfer the
                transaction the giveaway round will start again. We will share
                the winner on twitter @NimiqTreasury
            </p>
            <!-- Share button -->
            <button
                class="flex items-center py-6 my-20 font-bold text-white rounded px-18 bg-linear-button-blue w-fit-content text-14"
            >
                <Icon name="twitter-logo" class="mr-10 fill-white" width="15" height="15" />
                Share and WIN
            </button>
        </div>
    </div>
</SidebarPanel>
