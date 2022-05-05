<script lang="ts">
    import InfoIcon from "./InfoIcon.svelte";

    let componentClass: string = "";
    export { componentClass as class };
</script>

<div class={componentClass}>
    <button class="py-8 text-white rounded bg-blue-light px-18">
        Play the game <span class="font-light">➞</span>
    </button>
    <div class="flex items-center mt-16">
        <InfoIcon />
        <span class="mx-6 font-[650]">
            Participated: <span class="font-black text-20"> {2} </span></span
        >
    </div>
</div>
