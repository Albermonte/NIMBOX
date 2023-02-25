<script lang="ts">
    import { fly } from "svelte/transition";
    import { url } from "$store";

    let componentClass: string = "";
    export { componentClass as class };

    const login = () => {
        url.navigate("login");
    };
</script>

<button
    transition:fly={{ y: 10 }}
    on:click={login}
    on:keydown={login}
    class="text-white font-bold text-16 drop-shadow-md py-2 px-28 rounded-24 bg-linear-button-orange {componentClass}"
>
    Login
</button>
