<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import TheStory from '$lib/components/sections/TheStory.svelte';
  import { lifestyle_coworking } from '$lib/assets';
</script>

<svelte:head>
  <title>The Story — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="The story behind SUTTON No.01 — made for days that move with you. Our philosophy: less, but intentional." />
</svelte:head>

<!-- Page hero -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">SOIRÉE</p>
        <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-6">
          The Story
        </h1>
        <div class="w-24 h-px bg-[#2e2416]"></div>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed max-w-xl mt-8">
          Discover the quiet luxury and intentional craftsmanship behind SUTTON No.01. Every photograph, material choice, and line is built to move with you.
        </p>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-[4/5] rounded-none border border-[#2e2416]">
        <img
          src={lifestyle_coworking}
          alt="Sutton bag in a coworking lifestyle scene"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

<TheStory />
