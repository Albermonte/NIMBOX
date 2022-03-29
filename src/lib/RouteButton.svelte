<script lang="ts">
    export let text = "",
        color = "bg-grey-dark";
</script>

<button class={`rounded ${color} flex px-14 py-6 items-center`}>
    <!-- Icon -->
    <div class="p-8 rounded bg-[#EDEDED] mr-8">
        <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.254883 1.6864H14.3725"
                stroke="#737373"
                stroke-width="2"
            />
            <path
                d="M0.254883 11.0981H14.3725"
                stroke="#737373"
                stroke-width="2"
            />
            <path
                d="M0.254883 6.39233H11.2353"
                stroke="#737373"
                stroke-width="2"
            />
        </svg>
    </div>

    <!-- Text -->
    <span class="font-bold text-14 leading-[14px]">
        {text}
    </span>
</button>
