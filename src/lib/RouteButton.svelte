<script lang="ts">
	import { url } from "../store";
	export let color = "bg-grey",
		route = "";
	const navigate = () => {
		url.navigate(route);
	};
</script>

<button
	class={`rounded ${color} hover:brightness-95 transition-all duration-75 flex px-18 gap-x-10 py-12 items-center mx-8 h-40`}
	on:click={navigate}
>
	<slot />
</button>
