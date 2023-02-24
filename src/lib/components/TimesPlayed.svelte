<script lang="ts">
    import { participationCounter } from "$store";

    let componentClass: string = "";
    export { componentClass as class };
</script>

<div
    class="bg-[#EDF1F7] border-[#E9E9E9] border-solid border-1 rounded py-4 px-16 flex items-center gap-8 {componentClass}"
>
    <span class="font-bold text-16 text-black/50">Times played</span>
    <span class="font-bold text-black text-18">
        {$participationCounter}
    </span>
</div>
