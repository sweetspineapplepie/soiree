<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    detail_suede,
    detail_zipper,
    detail_hardware,
    product_front,
    product_back,
    product_side,
    product_top_open,
    product_interior,
    texture_leather,
    texture_grain,
    texture_noise,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';

  // map assets into translation-driven data
  const detailImages = [
    product_front,
    product_back,
    product_side,
    product_top_open,
    product_interior,
  ];

  const detailIcons = [
    { src: detail_suede, key: 0 },
    { src: detail_zipper, key: 1 },
    { src: detail_hardware, key: 2 },
  ];

  const textures = [
    { src: texture_leather, key: 0 },
    { src: texture_grain, key: 1 },
    { src: texture_noise, key: 2 },
  ];
</script>

  <svelte:head>
    <title>{$tr.pages.details.title}</title>
    <meta name="description" content={$tr.pages.details.meta} />
  </svelte:head>

<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.details.header_label}</p>
        <h1 class="font-display text-display-xl text-soiree-cream font-light leading-none mb-6">{$tr.pages.details.heading_lines[0]}</h1>
        <p class="font-body text-sm text-soiree-warm leading-7 max-w-lg">
          {$tr.pages.details.intro}
        </p>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-4/5 rounded-none border border-soiree-border">
        <img loading="lazy" decoding="async"           src={product_interior}
          alt="Interior detail of SUTTON No.01"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

<!-- Main details section -->
<section style="background-color: #0d0b08;" class="pb-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.pages.details.section_label}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light italic leading-tight mb-10">
          {#each $tr.pages.details.section_heading_lines as line, idx}
            {line}
            {#if idx < $tr.pages.details.section_heading_lines.length - 1}
              <br />
            {/if}
          {/each}
        </h2>

        <ul class="flex flex-col gap-4">
          {#each $tr.pages.details.details_list as item}
            <li class="flex items-start gap-3 font-body text-sm text-soiree-warm leading-7">
              <span class="text-soiree-tan mt-0.5 shrink-0">•</span>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Right: image grid -->
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-2 gap-2">
        {#each detailImages as src, i}
          <div class="overflow-hidden aspect-square">
            <img loading="lazy" decoding="async"               {src}
              alt="{$tr.pages.details.product_image_alt} {i + 1}"
              class="product-img w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>

      <div use:reveal={{ delay: 0.3 }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {#each detailIcons as icon}
          <div class="rounded-3xl border border-soiree-border overflow-hidden bg-soiree-dark">
            <div class="overflow-hidden aspect-square">
              <img loading="lazy" decoding="async" src={icon.src} alt={$tr.pages.details.detail_icons[icon.key].label} class="w-full h-full object-cover" />
            </div>
            <div class="p-5">
              <h3 class="font-body uppercase text-label-xs text-soiree-cream tracking-[0.12em] mb-2">{$tr.pages.details.detail_icons[icon.key].label}</h3>
              <p class="font-body text-sm text-soiree-warm leading-7">{$tr.pages.details.detail_icons[icon.key].desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div use:reveal class="text-center mb-14">
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.details.material_label}</p>
      <h2 class="font-display text-display-md text-soiree-cream font-light italic leading-tight">
        {$tr.pages.details.material_heading}
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each textures as texture}
        <div use:reveal={{ delay: 0.15 }} class="rounded-3xl overflow-hidden border border-soiree-border bg-soiree-dark">
          <div class="overflow-hidden h-56">
            <img loading="lazy" decoding="async" src={texture.src} alt={$tr.pages.details.textures[texture.key].label} class="w-full h-full object-cover" />
          </div>
          <div class="p-5">
            <h3 class="font-body uppercase text-label-xs text-soiree-cream tracking-[0.12em] mb-2">{$tr.pages.details.textures[texture.key].label}</h3>
            <p class="font-body text-sm text-soiree-warm leading-7">{$tr.pages.details.textures[texture.key].desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Specs bottom strip -->
<section style="background-color: #1c1710; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-soiree-border">
      {#each $tr.pages.details.specs as spec, i}
        <div use:reveal={{ delay: i * 0.08 }} class="flex flex-col items-center text-center gap-2 py-10 px-6">
          <span class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em]">
            {spec.label}
          </span>
          <span class="font-body text-xs text-soiree-dimmed">{spec.desc}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
