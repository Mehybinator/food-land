<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { auth } from '$lib/stores/auth';
    import { get } from 'svelte/store';
    import { writable } from 'svelte/store';

    let isLoading = true;

    onMount(() => {
        if (!$auth) {
            goto('/');
        } else {
            isLoading = false;
        }
    });
</script>

{#if isLoading}
    <!-- <p>Loading...</p> -->
{:else}
    <slot />
{/if}
