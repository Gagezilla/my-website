<script>
    import SEO from "./SEO.svelte";
    import { fly } from "svelte/transition";
    import { onMount } from 'svelte';

    export let title;
    export let content;
    export let notoppad;

    let duration = 500

    onMount(() => setTimeout(() => loaded = true, duration))

    export let loaded;
</script>
<SEO {title} {content} />

{#if loaded}
    <main class:pt-6={!notoppad}
          class="main-container"
          out:fly={{y: -10, duration: duration}}
          in:fly={{duration: duration, y: -10}}>
        <slot />
    </main>
{/if}
