<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'motion';
  import Badge from '$lib/components/ui/Badge.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Divider from '$lib/components/ui/Divider.svelte';
  import { hero_main_desktop, hero_main_mobile } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let parallaxY = $state(0);
  const motionAnimate = animate as any;

  onMount(() => {
    // Hero entrance animation
    motionAnimate('[data-hero-label]', { opacity: [0, 1], y: [10, 0] }, { duration: 0.6, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-hero-title]', { opacity: [0, 1], y: [30, 0] }, { duration: 0.9, delay: 0.2, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-hero-body]',  { opacity: [0, 1], y: [15, 0] }, { duration: 0.7, delay: 0.5, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-hero-cta]',   { opacity: [0, 1], y: [10, 0] }, { duration: 0.6, delay: 0.7, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-hero-image]', { opacity: [0, 1], scale: [1.05, 1] }, { duration: 1.2, delay: 0.1, easing: [0.25, 1, 0.5, 1] });

    // Parallax scroll
    const handleScroll = () => { parallaxY = window.scrollY * 0.12; };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section
  class="relative min-h-screen flex items-stretch overflow-hidden"
  style="background-color: #0d0b08;"
>
  <!-- Left Content -->
  <div class="relative z-10 flex flex-col justify-center w-full lg:w-2/5 px-8 sm:px-12 lg:px-16 xl:px-24 py-28 lg:py-20">
    <div style="opacity:0" data-hero-label>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">
        {$tr.hero.intro_label}
      </p>
    </div>

    <div style="opacity:0" data-hero-title>
      <h1 class="font-display text-display-xl text-soiree-cream font-light mb-6 leading-none">
        {#each $tr.hero.title_lines as line, idx}
          {line}{#if idx < $tr.hero.title_lines.length - 1}<br/>{/if}
        {/each}
      </h1>
    </div>

    <div style="opacity:0" data-hero-body>
      <p class="font-body font-light text-soiree-warm text-sm leading-7 mb-8 max-w-xs">
        {$tr.hero.body}
      </p>
      <Divider class="mb-8" />
      <div class="flex items-center gap-4 mb-2">
        <Badge label={$tr.pages.home.edition.label} />
      </div>
      <p class="font-body text-label-xs text-soiree-tan tracking-[0.12em] uppercase mt-3 mb-8">
        {$tr.hero.batch_reserved}
      </p>
    </div>

    <div style="opacity:0" data-hero-cta class="flex items-center gap-4">
      <Button href="https://shopee.co.id" variant="gold" class="w-fit" target="_blank" rel="noopener noreferrer">
        {$tr.hero.cta_primary}
      </Button>
      <Button href="/story" variant="outline" class="w-fit">
        {$tr.hero.cta_secondary}
      </Button>
    </div>
  </div>

  <!-- Right Image -->
  <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-3/5 overflow-hidden">
    <div style="opacity:0; height:100%;" data-hero-image>
      <img decoding="async"
        src={hero_main_desktop}
        alt="SUTTON No.01 - Structured utility work bag"
        class="w-full h-full object-cover"
        style="transform: translateY({parallaxY}px); object-position: center top;"
      />
    </div>
    <!-- Gradient overlay to blend left -->
    <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to right, #0d0b08 0%, transparent 25%);"></div>

    <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
      <span class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">{$tr.hero.scroll_hint}</span>
      <div class="w-px h-8 bg-soiree-dimmed animate-pulse"></div>
    </div>
  </div>

  <!-- Mobile image -->
  <div class="lg:hidden absolute inset-0 z-0 opacity-25">
    <img decoding="async"
      src={hero_main_mobile}
      alt="SUTTON No.01"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0" style="background: linear-gradient(to top, #0d0b08 40%, transparent);"></div>
  </div>
</section>
