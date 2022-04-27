<script lang="ts">
    export let percentage = 0,
        height = 20;

    let componentClass: string = "";
    export { componentClass as class };
</script>

<div
    class={`flex items-center w-72 bg-transparent border-1 border-black/[0.15] rounded ${componentClass}`}
    style={`height: ${height}px;`}
>
    <div
        class={`bg-green -ml-1 flex items-center justify-center transition-all duration-1000 ease-in-out rounded-l ${
            percentage >= 100 ? "rounded" : ""
        }`}
        style={`height: ${height}px; width: ${Math.max(percentage + 5, 10)}%;`}
    >
        {#if percentage >= 50}
            <span
                class="text-white font-bold"
                style={`font-size: ${0.55 * height}px`}
            >
                {percentage.toFixed()} %
            </span>
        {/if}
    </div>
    {#if percentage < 50}
        <span
            class="text-black font-bold mx-auto"
            style={`font-size: ${0.6 * height}px`}
        >
            {percentage.toFixed()} %
        </span>
    {/if}
</div>
