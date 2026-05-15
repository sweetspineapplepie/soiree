<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Truck, RotateCcw } from 'lucide-svelte';
  import { packaging_unboxing } from '$lib/assets';
</script>

<svelte:head>
  <title>Shipping & Returns — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Shipping and returns policy for SUTTON No.01. Processed within 3 business days." />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left content -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">SOIRÉE</p>
          <h1 class="font-display text-display-lg text-[#f2ede4] font-light leading-tight mb-12">
            Shipping &<br/>Returns
          </h1>
        </div>

        <!-- Shipping -->
        <div use:reveal={{ delay: 0.1 }} class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <Truck size={18} class="text-[#c4a882]" />
            <h2 class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest">SHIPPING</h2>
          </div>
          <ul class="flex flex-col gap-4">
            {#each ['Processed within 3 business days of confirmed order', 'Tracking provided once shipped via email', 'Only ships when order is confirmed & payment cleared', 'Delivery 5–10 business days (international may vary)'] as item}
              <li class="flex items-start gap-3 font-body text-sm text-[#a08d74] leading-relaxed">
                <span class="text-[#c4a882] mt-0.5 flex-shrink-0">—</span>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Returns -->
        <div use:reveal={{ delay: 0.2 }} class="mb-12 pt-8 border-t border-[#2e2416]">
          <div class="flex items-center gap-3 mb-6">
            <RotateCcw size={18} class="text-[#c4a882]" />
            <h2 class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest">RETURNS</h2>
          </div>
          <ul class="flex flex-col gap-4">
            {#each ['Contact us within 7 days of delivery', 'Item must be unused and in original condition', 'Original packaging and dust bag must be included', 'Return shipping is the responsibility of the customer'] as item}
              <li class="flex items-start gap-3 font-body text-sm text-[#a08d74] leading-relaxed">
                <span class="text-[#c4a882] mt-0.5 flex-shrink-0">—</span>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <div use:reveal={{ delay: 0.3 }}>
          <a
            href="/contact"
            class="group border border-[#2e2416] px-8 py-3 inline-flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
          >
            <span class="font-body uppercase text-label-sm tracking-widest text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 group-hover:-translate-x-1 transition-transform">
              READ FULL POLICY
            </span>
            <span class="text-[#a08d74] group-hover:text-[#f2ede4] transition-all duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <!-- Right image -->
      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-[4/5] rounded-3xl border border-[#2e2416] bg-[#141008]">
        <img
          src={packaging_unboxing}
          alt="SUTTON No.01 packaging unboxing"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
