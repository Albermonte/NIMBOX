<script lang="ts">
    import Icon from "../icons/Icon.svelte";
    import { url, userCashlink, wallet } from "$store";
    import { fly } from "svelte/transition";

    let componentClass: string = "";
    export { componentClass as class };

    const buttons = [
        {
            text: "How to play?",
            icon: "question-mark-circle",
            link: "how-to-play",
        },
        {
            text: "Fund your Cashlink",
            icon: "nq-cashlink-big",
            link: "cashlink-info",
        },
        {
            text: "Get FREE NIM",
            icon: "nq-hexagon",
            link: "free-nim",
        },
        {
            text: "Hall of fame",
            icon: "trophy",
            link: "hall-of-fame",
        },
        {
            text: "Share and WIN",
            icon: "twitter-logo",
            link: "share-and-win",
        },
        {
            text: "Log out",
            icon: "power",
            link: "log-out",
        },
    ];

    $: {
        // Last button will always be the log in/out button
        if ($userCashlink) {
            // Change last button to "Log out"
            buttons[buttons.length - 1].text = "Log out";
            buttons[buttons.length - 1].link = "log-out";
            buttons[buttons.length - 1].icon = "power";
        } else {
            // Change last button to "Log in"
            buttons[buttons.length - 1].text = "Log in";
            buttons[buttons.length - 1].link = "login";
            buttons[buttons.length - 1].icon = "nq-login";
        }
    }

    const navigate = (route: string) => {
        url.navigate(route);
    };
</script>

<div class="absolute z-10 {componentClass}" transition:fly={{ y: -10, duration: 300 }}>
    <div class="mt-8">
        <div
            class="h-0 w-0 border-black border-x-8 border-b-[14px] border-x-transparent ml-auto mr-48"
        />
        <ul
            class="flex flex-col py-6 font-medium text-white bg-black justify-evenly text-16 rounded-6"
        >
            {#each buttons as button}
                <li
                    class="hover:bg-[#464864] px-20 py-10 hover:cursor-pointer transition-colors duration-300 flex items-center"
                    on:click={() => navigate(button.link)}
                    on:keydown={() => navigate(button.link)}
                >
                    <Icon
                        name={button.icon}
                        class="w-20 h-20 mr-20 fill-white"
                    />
                    {button.text}
                </li>
            {/each}
        </ul>
    </div>
</div>
