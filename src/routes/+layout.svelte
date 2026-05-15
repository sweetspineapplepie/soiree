<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';

  let { children } = $props();

  let cursorX = $state(0);
  let cursorY = $state(0);
  let hovering = $state(false);

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const handleMouseEnter = () => { hovering = true; };
    const handleMouseLeave = () => { hovering = false; };

    document.addEventListener('mousemove', handleMouseMove);

    // Track hoverable elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"]');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    addHoverListeners();

    // Re-add on navigation (simple approach)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  });
</script>

<svelte:head>
  <title>SOIRÉE — SUTTON No.01 | Objects of Daily Significance</title>
  <meta name="description" content="SUTTON No.01 — A structured utility work bag designed for your everyday. Limited to 500 pieces. Reserve your edition now." />
</svelte:head>

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
