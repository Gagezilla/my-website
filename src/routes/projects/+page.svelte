<script>
    import Page from "../comps/Page.svelte";
    import { fly } from "svelte/transition";
    export let data;
</script>

<Page title="Projects" content="This is the projects page.">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
        {#each data.repos as repo, i}
            <a in:fly={{delay: 500+(75*i), duration: 500, y: -10}}
               class="bg-button+bg rounded-xl overflow-hidden hover:bg-button-hover+bg duration-200 group"
               target="_blank"
               href={repo.url}>
                <div class="p-4">
                    <h1 class="font-medium">{repo.name}</h1>
                    <p class="text-[.9rem] text-white/75">{repo.desc}</p>
                </div>
                <div class="relative h-[204px]">
                    <img src={repo.img} alt={repo.name} class="object-cover w-full h-full">
                    <div class="top-0 absolute w-full h-full bg-black/50 group-hover:bg-transparent duration-200"></div>
                </div>
            </a>
        {/each}
    </div>
</Page>