<script lang="ts">
    import Icon from "$lib/icons/Icon.svelte";
    import { url } from "$store";
    import { fly } from "svelte/transition";

    const handleLogin = () => {
        url.navigate("login");
    };
</script>

<div
    class="bg-black/90 rounded-8 text-white flex items-center justify-evenly font-extrabold my-16 py-10 px-20 mx-auto w-fit-content"
    transition:fly={{ opacity: 0, y: 10, duration: 150 }}
>
    <Icon name="exclamation-triangle" class="fill-red" width="24" height="24" />
    <span class="mx-12 text-16">To participate please</span>
    <button
        class="bg-red text-20 py-4 px-36 rounded-24 shadow"
        on:click={handleLogin}>Login</button
    >
</div>
