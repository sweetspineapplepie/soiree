<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';
  import Counter from '$lib/components/ui/Counter.svelte';
  import {
    edition_certificate,
    edition_tag,
    packaging_box,
    packaging_unboxing,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';
</script>


<Seo
  title="Edition 01 — SOIRÉE SUTTON No.01 | Limited to 500"
  description="Edition 01 of SUTTON No.01 — a true limited edition. Only 500 will ever exist."
  schemas={[{ type: 'Product' }]}
/>


<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-16">
  <div class="max-w-350 mx-auto px-6 lg:px-12 text-center">
    <div use:reveal>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.edition01.label}</p>
      <h1 class="font-display text-display-xl text-soiree-cream font-light leading-none mb-4">
        {$tr.pages.edition01.heading_true}
      </h1>
      <p class="font-display text-display-md text-soiree-warm font-light italic">
        {$tr.pages.edition01.heading_only}
      </p>
    </div>
  </div>
</div>

<!-- Certificate card -->
<section style="background-color: #0d0b08;" class="py-16">
  <div class="max-w-150 mx-auto px-6">
    <div use:reveal style="background-color: #231d14; border: 1px solid #2e2416;" class="p-12 text-center">
      <!-- Logo -->
      <p class="font-display font-light tracking-[0.12em] text-xs text-soiree-dimmed mb-8">{$tr.nav.logo}</p>

      <div class="w-24 h-px bg-soiree-border mx-auto mb-8"></div>

      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.edition01.cert}</p>
      <h2 class="font-display text-3xl text-soiree-cream font-light tracking-wide mb-6">{$tr.pages.edition01.title}</h2>

      <div class="font-display text-[3.5rem] text-soiree-tan font-light italic leading-none mb-4">
        028 / 500
      </div>

      <div class="w-24 h-px bg-soiree-border mx-auto mb-6"></div>

      <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] leading-7 max-w-xs mx-auto">
        {$tr.pages.edition01.cert_desc}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="overflow-hidden rounded-3xl border border-soiree-border bg-soiree-dark aspect-4/5">
          <img loading="lazy" decoding="async" src={edition_certificate} alt="Edition certificate" class="w-full h-full object-cover" />
        </div>
        <div class="overflow-hidden rounded-3xl border border-soiree-border bg-soiree-dark aspect-4/5">
          <img loading="lazy" decoding="async" src={edition_tag} alt="Edition tag" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-soiree-border">
        <p class="font-display text-sm text-soiree-warm italic">{$tr.pages.edition01.cert_date}</p>
      </div>
    </div>
  </div>
</section>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.edition01.packaging}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light italic leading-tight mb-6">
          {$tr.pages.edition01.packaging_title}
        </h2>
        <p class="font-body text-sm text-soiree-warm leading-7 mb-6">
          {$tr.pages.edition01.packaging_desc2}
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-3xl border border-soiree-border bg-soiree-dark overflow-hidden">
            <img loading="lazy" decoding="async" src={packaging_box} alt="Packaging box" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-3xl border border-soiree-border bg-soiree-dark overflow-hidden">
            <img loading="lazy" decoding="async" src={packaging_unboxing} alt="Packaging unboxing" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Counter -->
<section style="background-color: #0d0b08; border-top: 1px solid #2e2416;" class="py-20">
  <div class="max-w-350 mx-auto px-6 lg:px-12 text-center">
    <div use:reveal class="flex items-baseline justify-center gap-3 mb-6">
      <span class="font-display text-counter text-soiree-cream font-light">
        <Counter target={37} duration={2} padded={3} />
      </span>
      <span class="font-display text-counter text-soiree-muted font-light">/</span>
      <span class="font-display text-counter text-soiree-cream font-light">
        <Counter target={500} duration={2.5} padded={3} />
      </span>
    </div>

    <div use:reveal={{ delay: 0.2 }} class="flex items-center justify-center gap-8 mb-12">
      <span class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">{$tr.pages.edition01.cert_title}</span>
      <div class="w-32 h-px bg-soiree-border"></div>
      <span class="font-body text-label-xs text-soiree-tan tracking-[0.12em]">{$tr.pages.home.edition.batch_reserved}</span>
    </div>

    <div use:reveal={{ delay: 0.3 }}>
      <a
        href="/reserve"
        class="group border border-soiree-cream/60 px-8 py-3 inline-flex items-center gap-2 hover:border-soiree-tan transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-cream transition-transform duration-300 group-hover:-translate-x-1">
          {$tr.pages.edition01.view_progress}
        </span>
        <span class="text-soiree-cream transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</section>
