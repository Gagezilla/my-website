<script>
    import Page from "../comps/Page.svelte";
    export let data;
</script>

<Page title="Projects" content="This is the projects page.">
    {#each data.repos as repo}
        <h1>{repo.name}</h1>
        <p>{repo.desc}</p>
        <img src={repo.img} alt="">
    {/each}
</Page>

<!--<p class="text-center font-medium text-3xl mt-20">-->
<!--    <span class="text-6xl block mb-8">🔨😁👍</span>-->
<!--    Projects page in progress...-->
<!--</p>-->