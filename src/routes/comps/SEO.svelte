<script>
    export let title;
    export let content;

    const fullTitle = title + " | Gagezilla"
    const websiteLink = "https://gagey.dev/"
    const previewImage = websiteLink + "avatar.png"
</script>

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle}>
<meta name="description" content={content}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content={websiteLink}>
<meta property="og:title" content={fullTitle}>
<meta property="og:description" content={content}>
<meta property="og:image" content={previewImage}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content={websiteLink}>
<meta property="twitter:title" content={fullTitle}>
<meta property="twitter:description" content={content}>
<meta property="twitter:image" content={previewImage}>