<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { product_front, product_side, product_top_open } from '$lib/assets';
  import { tr } from '$lib/i18n';

  const images = [
    product_front,
    product_side,
    product_top_open,
  ];
</script>

<section style="background-color: #1c1710;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center">
      <!-- Left -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-8">{$tr.pages.home.form.section_label}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light leading-tight mb-8">
          {#each $tr.pages.home.form.heading_lines as line, idx}
            {line}{#if idx < $tr.pages.home.form.heading_lines.length - 1}<br/>{/if}
          {/each}
        </h2>
        {#each $tr.pages.home.form.paragraphs as para}
          <p class="font-body text-sm text-soiree-warm leading-7 mb-4">{para}</p>
        {/each}
        <a
          href="/details"
          class="group relative overflow-hidden border border-soiree-border px-8 py-3 flex items-center gap-2 w-fit hover:border-soiree-tan transition-colors duration-300"
        >
          <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:-translate-x-1">{$tr.pages.home.form.cta}</span>
          <span class="text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:translate-x-1 text-sm">→</span>
        </a>
      </div>

      <!-- Right: 3 images -->
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-3 gap-2">
        {#each images as src, i}
          <div class="overflow-hidden aspect-3/4">
            <img loading="lazy" decoding="async"               {src}
              alt="SUTTON No.01 product view {i + 1}"
              class="product-img w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
