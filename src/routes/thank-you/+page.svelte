<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'motion';
  import { CheckCircle2 } from 'lucide-svelte';
  import { texture_noise } from '$lib/assets';

  let container: HTMLDivElement;
  const motionAnimate = animate as any;

  onMount(() => {
    motionAnimate('[data-ty-check]', { opacity: [0, 1], scale: [0.5, 1] }, { duration: 0.6, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-title]', { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.3, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-sub]',   { opacity: [0, 1], y: [15, 0] }, { duration: 0.6, delay: 0.5, easing: [0.25, 1, 0.5, 1] });
    motionAnimate('[data-ty-cta]',   { opacity: [0, 1], y: [10, 0] }, { duration: 0.5, delay: 0.7, easing: [0.25, 1, 0.5, 1] });
  });
</script>

<svelte:head>
  <title>Thank You — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Your spot is reserved. You'll be the first to know when Batch 02 opens." />
</svelte:head>

<div
  bind:this={container}
  style="background-color: #0d0b08; padding-top: 6rem;"
  class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
>
  <div class="absolute inset-0 opacity-20 pointer-events-none">
    <img
      src={texture_noise}
      alt="Subtle premium texture background"
      class="w-full h-full object-cover blur-sm"
    />
    <div class="absolute inset-0 bg-[#0d0b08]/90"></div>
  </div>
  <div class="relative z-10 text-center max-w-lg">
    <div style="opacity: 0;" data-ty-check class="flex justify-center mb-8">
      <CheckCircle2 size={48} color="#c4a882" strokeWidth={1} />
    </div>

    <div style="opacity: 0;" data-ty-title>
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">SOIRÉE</p>
      <h1 class="font-display text-display-lg text-[#f2ede4] font-light mb-3">THANK YOU</h1>
      <p class="font-display text-display-md text-[#c4a882] font-light italic mb-8">
        Your spot is reserved.
      </p>
    </div>

    <div style="opacity: 0;" data-ty-sub class="mb-10">
      <div class="w-px h-12 bg-[#2e2416] mx-auto mb-8"></div>
      <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-2">
        You'll be the first to know when Batch 02 opens.
      </p>
      <p class="font-body text-sm text-[#a08d74] leading-relaxed">
        A confirmation email has been sent to your inbox.
      </p>
    </div>

    <div style="opacity: 0;" data-ty-cta>
      <a
        href="/"
        class="group border border-[rgba(242,237,228,0.6)] px-8 py-3 inline-flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-widest text-[#f2ede4] transition-transform duration-300 group-hover:-translate-x-1">
          BACK TO HOME
        </span>
        <span class="text-[#f2ede4] transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</div>
