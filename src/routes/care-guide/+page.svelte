<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    care_cleaning,
    care_hardware_care,
    care_storage,
    care_suede_care,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';
</script>

<svelte:head>
  <title>Care Guide — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="How to care for your SUTTON No.01. Made to last with the right care." />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.care_guide.title}</p>
          <h1 class="font-display text-display-lg text-soiree-cream font-light italic leading-tight mb-12">
            {@html $tr.pages.care_guide.heading}
          </h1>
        </div>

        <div class="flex flex-col gap-10">
          {#each $tr.pages.care_guide.rules as rule, i}
            <div use:reveal={{ delay: i * 0.1 }} class="flex gap-6 items-start group">
              <div class="shrink-0 w-16 h-16 overflow-hidden rounded-3xl border border-soiree-border bg-soiree-dark">
                <img loading="lazy" decoding="async" src={rule.image} alt={rule.title} class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em] mb-2">
                  {rule.title}
                </h3>
                <p class="font-body text-sm text-soiree-warm leading-7">
                  {rule.desc}
                </p>
              </div>
            </div>
          {/each}
        </div>

        <div use:reveal={{ delay: 0.5 }} class="mt-12">
          <a
            href="/contact"
            class="group border border-soiree-border px-8 py-3 inline-flex items-center gap-2 hover:border-soiree-tan transition-colors duration-300"
          >
            <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:-translate-x-1">
              VIEW FULL CARE GUIDE
            </span>
            <span class="text-soiree-warm group-hover:text-soiree-cream transition-all duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <!-- Right image -->
      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-3/4 rounded-3xl border border-soiree-border bg-soiree-dark">
        <img loading="lazy" decoding="async"           src={care_hardware_care}
          alt="Care hardware for SUTTON No.01"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
