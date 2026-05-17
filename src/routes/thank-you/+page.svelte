<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { onMount } from 'svelte';
  import { animate } from 'motion';
  import { CheckCircle2 } from 'lucide-svelte';
  import { texture_noise } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let container: HTMLDivElement;
  const motionAnimate = animate as any;

  onMount(() => {
    motionAnimate('[data-ty-check]', { opacity: [0, 1], scale: [0.5, 1] }, { duration: 0.6, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-title]', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.3, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-sub]',   { opacity: [0, 1], y: [15, 0] }, { duration: 0.6, delay: 0.5, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-cta]',   { opacity: [0, 1], y: [10, 0] }, { duration: 0.5, delay: 0.7, easing: [0.25, 1, 0.5, 1] });
  });
</script>


<Seo
  title={$tr.pages.thankYou_title}
  description={$tr.pages.thankYou_meta}
  schemas={[{ type: 'WebSite' }]}
/>


<div
  bind:this={container}
  style="background-color: #0d0b08; padding-top: 6rem;"
  class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
>
  <div class="absolute inset-0 opacity-20 pointer-events-none">
    <img loading="lazy" decoding="async"       src={texture_noise}
      alt="Subtle premium texture background"
      class="w-full h-full object-cover blur-sm"
    />
    <div class="absolute inset-0 bg-soiree-black/90"></div>
  </div>
  <div class="relative z-10 text-center max-w-lg">
    <div style="opacity: 0;" data-ty-check class="flex justify-center mb-8">
      <CheckCircle2 size={48} color="#c4a882" strokeWidth={1} />
    </div>

    <div style="opacity: 0;" data-ty-title>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.nav.logo}</p>
      <h1 class="font-display text-display-lg text-soiree-cream font-light mb-3">{$tr.pages.thankYou}</h1>
      <p class="font-display text-display-md text-soiree-tan font-light italic mb-8">
        {$tr.pages.thankYou_meta}
      </p>
    </div>

    <div style="opacity: 0;" data-ty-sub class="mb-10">
      <div class="w-px h-12 bg-soiree-border mx-auto mb-8"></div>
      <p class="font-body text-sm text-soiree-warm leading-7 mb-2">
        {$tr.pages.thankYou_meta}
      </p>
      <p class="font-body text-sm text-soiree-warm leading-7">
        {$tr.pages.thankYou_confirm}
      </p>
    </div>

    <div style="opacity: 0;" data-ty-cta>
      <a
        href="/"
        class="group border border-soiree-cream/60 px-8 py-3 inline-flex items-center gap-2 hover:border-soiree-tan transition-colors duration-300"
      >
          <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-cream transition-transform duration-300 group-hover:-translate-x-1">
          {$tr.footer.backToHome}
        </span>
        <span class="text-soiree-cream transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</div>
