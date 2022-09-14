<script>
    import Avatar from "./Avatar.svelte";
    import NavLink from "./NavLink.svelte";

    const content = [
        {title: "Projects", link: "/test"},
        {title: "Downloads", link: "/dfs"},
    ]
</script>

<header class="py-6 shadow-lg">
    <nav class="main-container flex justify-between items-center">
        <Avatar />
        <ul class="flex gap-2">
            {#each content as c}
                <li><NavLink content={c}/></li>
            {/each}
        </ul>
    </nav>
</header>