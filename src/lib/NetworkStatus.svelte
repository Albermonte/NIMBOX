<script lang="ts">
    import { consensus, height, peerCount } from "nimiq-svelte-stores";
</script>

<div class="absolute top-16 left-16 px-18 py-12 rounded bg-blue-dark text-white capitalize">
    {$consensus}
    {$height}
    {$peerCount}
</div>
