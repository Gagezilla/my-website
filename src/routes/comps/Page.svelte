<script>
    import SEO from "./SEO.svelte";
    import { fly } from "svelte/transition";

    export let title;
    export let content;
    export let notoppad;
</script>
<SEO {title} {content} />

<main class:pt-6={!notoppad} class="main-container" out:fly={{y: -10, duration: 500}} in:fly={{delay: 500, duration: 500, y: -10}}>
    <slot />
</main>
