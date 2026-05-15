<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Counter from '$lib/components/ui/Counter.svelte';
  import {
    edition_certificate,
    edition_tag,
    packaging_box,
    packaging_unboxing,
  } from '$lib/assets';
</script>

<svelte:head>
  <title>Edition 01 — SOIRÉE SUTTON No.01 | Limited to 500</title>
  <meta name="description" content="Edition 01 of SUTTON No.01 — a true limited edition. Only 500 will ever exist." />
</svelte:head>

<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-16">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
    <div use:reveal>
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">EDITION 01</p>
      <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-4">
        A true limited edition.
      </h1>
      <p class="font-display text-display-md text-[#a08d74] font-light italic">
        Only 500 will ever exist.
      </p>
    </div>
  </div>
</div>

<!-- Certificate card -->
<section style="background-color: #0d0b08;" class="py-16">
  <div class="max-w-[600px] mx-auto px-6">
    <div use:reveal style="background-color: #231d14; border: 1px solid #2e2416;" class="p-12 text-center">
      <!-- Logo -->
      <p class="font-display font-light tracking-[0.35em] text-xs text-[#6b5c46] mb-8">SOIRÉE</p>

      <div class="w-24 h-px bg-[#2e2416] mx-auto mb-8"></div>

      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">CERTIFICATE OF AUTHENTICITY</p>
      <h2 class="font-display text-[2rem] text-[#f2ede4] font-light tracking-wide mb-6">SUTTON No.01</h2>

      <div class="font-display text-[3.5rem] text-[#c4a882] font-light italic leading-none mb-4">
        028 / 500
      </div>

      <div class="w-24 h-px bg-[#2e2416] mx-auto mb-6"></div>

      <p class="font-body text-label-xs text-[#6b5c46] tracking-widest leading-relaxed max-w-xs mx-auto">
        This piece is part of an edition strictly limited to 500 units. Once the edition is complete, SUTTON No.01 will be permanently retired.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="overflow-hidden rounded-3xl border border-[#2e2416] bg-[#141008] aspect-[4/5]">
          <img src={edition_certificate} alt="Edition certificate" class="w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden rounded-3xl border border-[#2e2416] bg-[#141008] aspect-[4/5]">
          <img src={edition_tag} alt="Edition tag" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-[#2e2416]">
        <p class="font-display text-sm text-[#a08d74] italic">SOIRÉE Studio, 2025</p>
      </div>
    </div>
  </div>
</section>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">PACKAGING</p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light italic leading-tight mb-6">
          Presented with ceremony.
        </h2>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-6">
          SUTTON No.01 arrives in a tailored presentation box with a numbered tag — a small ritual that echoes the attention given to the bag inside.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-3xl border border-[#2e2416] bg-[#141008] overflow-hidden">
            <img src={packaging_box} alt="Packaging box" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-3xl border border-[#2e2416] bg-[#141008] overflow-hidden">
            <img src={packaging_unboxing} alt="Packaging unboxing" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Counter -->
<section style="background-color: #0d0b08; border-top: 1px solid #2e2416;" class="py-20">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
    <div use:reveal class="flex items-baseline justify-center gap-3 mb-6">
      <span class="font-display text-counter text-[#f2ede4] font-light">
        <Counter target={37} duration={2} padded={3} />
      </span>
      <span class="font-display text-counter text-[#3d3020] font-light">/</span>
      <span class="font-display text-counter text-[#f2ede4] font-light">
        <Counter target={500} duration={2.5} padded={3} />
      </span>
    </div>

    <div use:reveal={{ delay: 0.2 }} class="flex items-center justify-center gap-8 mb-12">
      <span class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">Batch 001</span>
      <div class="w-32 h-px bg-[#2e2416]"></div>
      <span class="font-body text-label-xs text-[#c4a882] tracking-widest">37/50 reserved</span>
    </div>

    <div use:reveal={{ delay: 0.3 }}>
      <a
        href="/reserve"
        class="group border border-[rgba(242,237,228,0.6)] px-8 py-3 inline-flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-widest text-[#f2ede4] transition-transform duration-300 group-hover:-translate-x-1">
          VIEW FULL PROGRESS
        </span>
        <span class="text-[#f2ede4] transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</section>
