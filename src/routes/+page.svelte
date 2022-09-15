<script>
    import Page from "./comps/Page.svelte";
</script>

<Page notoppad title="Home" content="This is the home page.">
    <div class="relative h-[20rem] md:h-[25rem] overflow-hidden rounded-b-3xl">
        <img alt="avatar" src="/img/avatar.png" class="w-full h-full object-cover blur-md">
        <div class="top-0 w-full h-full bg-black/50 absolute"></div>
        <h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-3xl md:text-5xl whitespace-nowrap">
            👋 Hi, I'm Gage.
        </h1>
    </div>
</Page>