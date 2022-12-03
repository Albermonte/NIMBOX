<script lang="ts">
    import { url } from "$store";

	let componentClass: string = "";
	export { componentClass as class };
</script>

<button class="cursor-pointer w-fit-content {componentClass}" on:click={() => url.navigate("")}>
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-grey-dark hover:brightness-95"
    >
        <circle cx="20" cy="20" r="20" />
        <path
            d="M16.1004 26.4L13.1289 26.4L18.2931 20.0034L19.7221 18.2341L23.0641 14.0075L26.0658 14.0075L21.1965 20.011L19.7145 21.8256L16.1004 26.4ZM23.3816 26.4L19.7145 21.8256L18.2855 20.0034L13.4162 14L16.3953 14L19.7145 18.2341L21.1889 20.0034L26.3304 26.4L23.3816 26.4Z"
            fill="#737373"
        />
    </svg>
</button>
