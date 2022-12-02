<script lang="ts">
    import Icon from "./Icon.svelte";

    let componentClass: string = "";
    export { componentClass as class };

    const buttons = [
        {
            text: "How to play?",
            icon: "question-mark-circle",
            link: "/how-to-play",
        },
        {
            text: "Fund your Cashlink",
            icon: "nq-cashlink",
            link: "/fund-your-cashlink",
        },
        {
            text: "Get FREE NIM",
            icon: "nq-hexagon",
            link: "/get-free-nim",
        },
        {
            text: "Hall of fame",
            icon: "trophy",
            link: "/hall-of-fame",
        },
        {
            text: "Share and WIN",
            icon: "twitter-logo",
            link: "/share-and-win",
        },
        {
            text: "Log out",
            icon: "power",
            link: "/log-out",
        },
    ];
</script>

<div class="absolute {componentClass}">
    <div class="mt-8">
        <div
            class="h-0 w-0 border-black border-x-8 border-b-[14px] border-x-transparent ml-auto mr-48"
        />
        <ul
            class="flex flex-col justify-evenly bg-black text-white font-medium text-16 py-6 rounded-6"
        >
            {#each buttons as button}
                <li
                    class="hover:bg-[#464864] px-20 py-10 hover:cursor-pointer transition-colors duration-300 flex items-center"
                >
                    <Icon
                        name={button.icon}
                        class="fill-white mr-20 w-20 h-20"
                    />
                    {button.text}
                </li>
            {/each}
        </ul>
    </div>
</div>
