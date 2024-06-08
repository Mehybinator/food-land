<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<div class="container m-auto">
    <Header />
    <slot />
    <Footer />
</div>
