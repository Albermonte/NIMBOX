<script lang="ts">
	export let color = "bg-grey",
		route = "";
</script>

<button
	class={`rounded ${color} hover:brightness-95 transition-all duration-75 flex px-18 gap-x-10 py-12 items-center mx-8 h-40`}
>
	<slot />
</button>
