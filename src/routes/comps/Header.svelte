<script>
    import Avatar from "./Avatar.svelte";
    import NavLink from "./NavLink.svelte";
    import { Icon } from '@steeze-ui/svelte-icon'
    import { Bars3 } from '@steeze-ui/heroicons'
    import { navigating } from '$app/stores';

    const content = [
        {title: "Projects", link: "/projects"},
        {title: "Downloads", link: "/downloads"},
    ]

    let open = false;

    const close = () => open = false;

    $: if($navigating) close();
</script>

<header class="py-6 shadow-lg mb-6">
    <nav class="flex items-center justify-between main-container">
        <Avatar />
        <div class="relative">
            <button class="rounded-xl bg-button+bg px-3.5 py-2 cursor-pointer md:hidden hover:bg-button-hover+bg duration-200"
                    on:click={()=>{open=!open}}><Icon size="30" src={Bars3}/></button>
            <ul class={`
            absolute
            right-0
            top-[calc(100%+10px)]
            flex
            flex-col
            gap-0
            md:gap-2
            rounded-xl
            bg-[#2B2B2B]
            p-2
            md:static
            md:flex
            md:flex-row
            md:bg-transparent
            md:p-0
            `} class:hidden={!open}>
                {#each content as c}
                    <li><NavLink content={c}/></li>
                {/each}
            </ul>
        </div>
    </nav>
</header>