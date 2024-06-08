<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Card from "./Card.svelte";
</script>

<div class="container m-auto">
    <Header />
    <Card />
    <slot />
    <Footer />
</div>
