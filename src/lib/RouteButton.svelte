<script lang="ts">
	import hamburguerIcon from "../assets/icons/hamburguer.svg"
	export let text = "",
		color = "bg-grey-dark"
</script>

<button class={`rounded ${color} flex px-18 gap-x-10 py-12 items-center`}>
	<img src={hamburguerIcon} alt="" />
	<span class="font-bold text-14 leading-[14px]">
		{text}
	</span>
</button>
