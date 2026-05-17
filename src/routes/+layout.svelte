<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { initializeLocale } from '$lib/i18n';

  let { children } = $props();

  let cursorX = $state(0);
  let cursorY = $state(0);
  let hovering = $state(false);

  onMount(() => {
    initializeLocale();

    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest('a, button, [role="button"]')) {
        hovering = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest('a, button, [role="button"]')) {
        hovering = false;
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  });
</script>



<!-- Custom cursor (desktop only) -->
<div
  class="cursor hidden md:block"
  class:hovering
  style="left: {cursorX}px; top: {cursorY}px;"
></div>

<Navbar />

{#key $page.url.pathname}
  <div in:fade={{ duration: 400, delay: 100 }} out:fade={{ duration: 250 }}>
    {@render children()}
  </div>
{/key}

<Footer />
