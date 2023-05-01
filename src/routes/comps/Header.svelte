<script>
    import Avatar from "./Avatar.svelte";
    import NavLink from "./NavLink.svelte";
    import { Icon } from '@steeze-ui/svelte-icon'
    import { MarkGithub, ThreeBars } from '@steeze-ui/octicons'
    import { navigating } from '$app/stores';

    const content = [
        {title: "IMGEN", link: "/image-generation"},
        {title: "Downloads", link: "/downloads"},
    ]

    let open = false;

    const close = () => open = false;

    $: if($navigating) close();
</script>

<header class="py-6 shadow-lg">
    <nav class="flex items-center justify-between main-container">
        <Avatar />
        <div class="flex items-center relative gap-2">
            <a class="p-3.5 hover:bg-button-hover+bg duration-200 rounded-xl" target="_blank" href="https://github.com/Gagezilla">
                <Icon size="22" src={MarkGithub}/>
            </a>
            <button class="rounded-xl bg-button+bg p-3.5 cursor-pointer md:hidden hover:bg-button-hover+bg duration-200 text-white/75"
                    on:click={()=>{open=!open}}><Icon size="22" src={ThreeBars}/></button>
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
            z-50
            `} class:hidden={!open}>
                {#each content as c}
                    <li><NavLink content={c}/></li>
                {/each}
            </ul>
        </div>
    </nav>
</header>