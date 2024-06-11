<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <title>Food Land</title>
</svelte:head>

<Header />
<div class="mx-12">
    <slot />
</div>
<Footer />