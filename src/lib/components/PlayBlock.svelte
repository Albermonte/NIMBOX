<script lang="ts">
    import InfoButton from "$lib/buttons/InfoButton.svelte";
    import TimesPlayed from "$lib/components/TimesPlayed.svelte";
    import ParticipateButton from "$lib/buttons/ParticipateButton.svelte";

    let componentClass: string = "";
    export { componentClass as class };
</script>

<div class={componentClass}>
    <div class="flex items-center gap-10 mb-18">
        <InfoButton>
            <span class="font-extrabold text-17">Rules:</span>
            <ul
                class="font-semibold text-14 text-[#CCCCCC] list-disc list-outside pb-2"
            >
                <li>Send 1 NIM to participate.</li>
                <li>
                    There is no limit to the number of transactions you can
                    send.
                </li>
                <li>
                    To win, be the last one to send a transaction before the 6th
                    block is completed!
                </li>
            </ul>
        </InfoButton>
        <ParticipateButton />
    </div>

    <TimesPlayed class="ml-auto mr-10 w-fit" />
</div>
