<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import Header from "./Header.svelte";
</script>

<div class="container m-auto">
    <Header />
    <slot />
</div>
