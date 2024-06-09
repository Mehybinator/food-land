<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Category from "./Category.svelte";
</script>

<div class="container mx-auto">
    <Header />
    <Category />
    <slot />
    <Footer />
</div>
