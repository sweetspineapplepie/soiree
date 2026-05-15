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

  const details = [
    'Premium synthetic leather with soft touch',
    'Suede signature panel',
    'YKK zipper',
    'Detachable & adjustable strap',
    'Gold-tone hardware',
    'Protective metal feet',
  ];

  const specs = [
    { label: 'Laptop compartment', desc: 'up to 14 inch' },
    { label: 'Bottle sleeve', desc: 'keeps it upright' },
    { label: 'Multiple pockets', desc: 'for daily essentials' },
    { label: 'Key leash', desc: 'never lose it again' },
  ];

  const detailImages = [
    product_front,
    product_back,
    product_side,
    product_top_open,
    product_interior,
  ];

  const detailIcons = [
    { src: detail_suede, label: 'Suede panel', desc: 'Subtle texture meets luxurious contrast.' },
    { src: detail_zipper, label: 'YKK zipper', desc: 'Reliable motion with premium hardware.' },
    { src: detail_hardware, label: 'Gold trim', desc: 'Softly gleaming details at every edge.' },
  ];

  const textures = [
    { src: texture_leather, label: 'Leather grain', desc: 'A structured surface with warm depth.' },
    { src: texture_grain, label: 'Fine grain', desc: 'A tactile finish that ages beautifully.' },
    { src: texture_noise, label: 'Subtle noise', desc: 'A dark patina-like surface for quiet luxury.' },
  ];
</script>

<svelte:head>
  <title>Details — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="SUTTON No.01 details — thoughtful inside and out. Premium materials, YKK zippers, gold hardware." />
</svelte:head>

<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">SOIRÉE</p>
        <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-6">Details</h1>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed max-w-lg">
          Discover the thoughtful details that make SUTTON No.01 feel refined from every angle, inside and out.
        </p>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-[4/5] rounded-none border border-[#2e2416]">
        <img
          src={product_interior}
          alt="Interior detail of SUTTON No.01"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

<!-- Main details section -->
<section style="background-color: #0d0b08;" class="pb-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">DETAILS</p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light italic leading-tight mb-10">
          Thoughtful inside<br/>and out.
        </h2>

        <ul class="flex flex-col gap-4">
          {#each details as item}
            <li class="flex items-start gap-3 font-body text-sm text-[#a08d74] leading-relaxed">
              <span class="text-[#c4a882] mt-0.5 flex-shrink-0">•</span>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Right: image grid -->
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-2 gap-2">
        {#each detailImages as src, i}
          <div class="overflow-hidden aspect-square">
            <img
              {src}
              alt="Product detail {i + 1}"
              class="product-img w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>

      <div use:reveal={{ delay: 0.3 }} class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {#each detailIcons as icon}
          <div class="rounded-3xl border border-[#2e2416] overflow-hidden bg-[#141008]">
            <div class="overflow-hidden aspect-square">
              <img src={icon.src} alt={icon.label} class="w-full h-full object-cover" />
            </div>
            <div class="p-5">
              <h3 class="font-body uppercase text-label-xs text-[#f2ede4] tracking-[0.2em] mb-2">{icon.label}</h3>
              <p class="font-body text-sm text-[#a08d74] leading-relaxed">{icon.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div use:reveal class="text-center mb-14">
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">MATERIAL STUDY</p>
      <h2 class="font-display text-display-md text-[#f2ede4] font-light italic leading-tight">
        Textures that define the mood.
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each textures as texture}
        <div use:reveal={{ delay: 0.15 }} class="rounded-3xl overflow-hidden border border-[#2e2416] bg-[#141008]">
          <div class="overflow-hidden h-56">
            <img src={texture.src} alt={texture.label} class="w-full h-full object-cover" />
          </div>
          <div class="p-5">
            <h3 class="font-body uppercase text-label-xs text-[#f2ede4] tracking-[0.2em] mb-2">{texture.label}</h3>
            <p class="font-body text-sm text-[#a08d74] leading-relaxed">{texture.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Specs bottom strip -->
<section style="background-color: #1c1710; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#2e2416]">
      {#each specs as spec, i}
        <div use:reveal={{ delay: i * 0.08 }} class="flex flex-col items-center text-center gap-2 py-10 px-6">
          <span class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest">
            {spec.label}
          </span>
          <span class="font-body text-xs text-[#6b5c46]">{spec.desc}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
