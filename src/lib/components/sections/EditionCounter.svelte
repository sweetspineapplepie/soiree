<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Counter from '$lib/components/ui/Counter.svelte';
</script>

<section style="background-color: #0d0b08; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
    <div use:reveal>
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-3">
        EDITION 01 — LIMITED TO 500 PIECES
      </p>
      <p class="font-body text-xs text-[#6b5c46] tracking-widest mb-16">
        Once retired, never reproduced.
      </p>
    </div>

    <!-- Giant Counter -->
    <div use:reveal={{ delay: 0.15 }} class="flex items-baseline justify-center gap-3 mb-6">
      <span class="font-display text-counter text-[#f2ede4] font-light">
        <Counter target={37} duration={2} padded={3} />
      </span>
      <span class="font-display text-counter text-[#3d3020] font-light">/</span>
      <span class="font-display text-counter text-[#f2ede4] font-light">
        <Counter target={500} duration={2.5} padded={3} />
      </span>
    </div>

    <!-- Batch info -->
    <div use:reveal={{ delay: 0.3 }} class="flex items-center justify-center gap-8 mb-12">
      <span class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">Batch 001</span>
      <div class="w-24 h-px bg-[#2e2416]"></div>
      <span class="font-body text-label-xs text-[#c4a882] tracking-widest">37/50 reserved</span>
    </div>

    <div use:reveal={{ delay: 0.4 }}>
      <a
        href="/edition-01"
        class="group relative overflow-hidden border border-[rgba(242,237,228,0.6)] px-8 py-3 inline-flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-widest text-[#f2ede4] transition-transform duration-300 group-hover:-translate-x-1">
          VIEW EDITION PROGRESS
        </span>
        <span class="text-[#f2ede4] transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
      </a>
    </div>
  </div>
</section>
