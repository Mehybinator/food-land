<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Category from "./Category.svelte";
    import SpecialOffers from "./SpecialOffers.svelte";
</script>

<div class="container mx-auto">
    <Header />
    <div class="h-12"></div>
    <SpecialOffers />
    <div class="h-12"></div>
    <Category />
    <slot />
    <Footer />
</div>
