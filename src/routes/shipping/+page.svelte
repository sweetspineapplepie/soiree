<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Truck, RotateCcw } from 'lucide-svelte';
  import { tr } from '$lib/i18n';
  import { packaging_box, packaging_unboxing } from '$lib/assets';
</script>

<svelte:head>
  <title>{$tr.pages.shipping.title}</title>
  <meta name="description" content={$tr.pages.shipping.meta} />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left content -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.shipping.header_label}</p>
          <h1 class="font-display text-display-lg text-soiree-cream font-light leading-tight mb-12">
            {#each $tr.pages.shipping.heading_lines as line, idx}
              {line}{#if idx < $tr.pages.shipping.heading_lines.length - 1}<br/>{/if}
            {/each}
          </h1>
        </div>

        <!-- Shipping -->
        <div use:reveal={{ delay: 0.1 }} class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <Truck size={18} class="text-soiree-tan" />
            <h2 class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em]">{$tr.pages.shipping.shipping_label}</h2>
          </div>
          <ul class="flex flex-col gap-4">
            {#each $tr.pages.shipping.shipping_points as item}
              <li class="flex items-start gap-3 font-body text-sm text-soiree-warm leading-7">
                <span class="text-soiree-tan mt-0.5 shrink-0">—</span>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Returns -->
        <div use:reveal={{ delay: 0.2 }} class="mb-12 pt-8 border-t border-soiree-border">
          <div class="flex items-center gap-3 mb-6">
            <RotateCcw size={18} class="text-soiree-tan" />
            <h2 class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em]">{$tr.pages.shipping.returns_label}</h2>
          </div>
          <ul class="flex flex-col gap-4">
            {#each $tr.pages.shipping.returns_points as item}
              <li class="flex items-start gap-3 font-body text-sm text-soiree-warm leading-7">
                <span class="text-soiree-tan mt-0.5 shrink-0">—</span>
                {item}
              </li>
            {/each}
          </ul>
        </div>

        <div use:reveal={{ delay: 0.3 }}>
          <a
            href="/contact"
            class="group border border-soiree-border px-8 py-3 inline-flex items-center gap-2 hover:border-soiree-tan transition-colors duration-300"
          >
            <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:-translate-x-1">
              {$tr.pages.shipping.read_policy}
            </span>
            <span class="text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <!-- Right images -->
      <div class="grid grid-cols-1 gap-4">
        <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-4/5 rounded-3xl border border-soiree-border bg-soiree-dark">
          <img loading="lazy" decoding="async"             src={packaging_box}
            alt="SUTTON No.01 packaging box"
            class="product-img w-full h-full object-cover"
          />
        </div>
        <div use:reveal={{ delay: 0.3 }} class="overflow-hidden aspect-4/5 rounded-3xl border border-soiree-border bg-soiree-dark">
          <img loading="lazy" decoding="async"             src={packaging_unboxing}
            alt="SUTTON No.01 unboxing scene"
            class="product-img w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>
