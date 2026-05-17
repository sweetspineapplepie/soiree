<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    detail_suede,
    edition_tag,
    inspiration_tail_light,
    iteration_sketch_01,
    lifestyle_walking,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';
  const steps = $tr.pages.home.process.steps;

  const processImages = [
    inspiration_tail_light,
    iteration_sketch_01,
    detail_suede,
    edition_tag,
    lifestyle_walking,
  ];
</script>

<section style="background-color: #0d0b08;" class="py-24 overflow-hidden">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div use:reveal class="mb-4">
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.home.process.section_label}</p>
      <h2 class="font-display text-display-md text-soiree-cream font-light">
        {#each $tr.pages.home.process.heading_lines as line, idx}
          {line}{#if idx < $tr.pages.home.process.heading_lines.length - 1}<br/>{/if}
        {/each}
      </h2>
    </div>

    <!-- Process images -->
    <div use:reveal={{ delay: 0.15 }} class="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-12 mb-12">
      {#each processImages as src, i}
        <div class="overflow-hidden aspect-4/5 rounded-3xl border border-soiree-border bg-soiree-dark">
          <img loading="lazy" decoding="async"             src={src}
            alt="Process step {i + 1}"
            class="product-img w-full h-full object-cover"
          />
        </div>
      {/each}
    </div>

    <!-- Steps row -->
    <div class="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
      <!-- Connecting line -->
      <div class="absolute top-3 left-0 right-0 h-px bg-soiree-border hidden lg:block mx-6"></div>

      {#each steps as step, i}
        <div use:reveal={{ delay: i * 0.1 }} class="relative flex flex-col gap-2">
          <span class="font-display text-display-md font-light" style="color: rgba(196,168,130,0.35);">
            {step.num}
          </span>
          <span class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em] mt-1">
            {step.label}
          </span>
          <span class="font-body text-xs text-soiree-dimmed leading-7">
            {step.desc}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
