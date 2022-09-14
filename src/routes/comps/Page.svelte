<script>
    import SEO from "./SEO.svelte";

    export let title;
    export let content;
</script>
<SEO {title} {content} />

<main class="main-container">
    <slot />
</main>
