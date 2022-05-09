<script lang="ts">
    import { fly } from "svelte/transition";

    export let right = true;
</script>

<div
    class={`absolute top-0 flex justify-center items-center drop-shadow-2xl bg-white h-full w-1/2 min-w-[400px] ${
        right ? "right-0" : ""
    }`}
    in:fly={{ delay: 150, x: 100 }}
>
    Free NIM
</div>
