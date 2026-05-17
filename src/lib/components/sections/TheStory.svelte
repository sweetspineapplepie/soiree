<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    inspiration_tail_light,
    iteration_sketch_02,
    lifestyle_coffee_scene,
    lifestyle_coworking,
    lifestyle_walking,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';

  const philosophyPoints = $tr.pages.home.story.philosophy_points;

  const images = [
    lifestyle_coworking,
    iteration_sketch_02,
    lifestyle_walking,
    lifestyle_coffee_scene,
  ];
</script>

<section style="background-color: #0d0b08;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left editorial -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-8">{$tr.pages.home.story.label}</p>
          <h2 class="font-display text-display-lg text-soiree-cream font-light italic leading-tight mb-10">
            {#each $tr.pages.home.story.heading_lines as line, idx}
              {line}{#if idx < $tr.pages.home.story.heading_lines.length - 1}<br/>{/if}
            {/each}
          </h2>
        </div>

        {#each $tr.pages.home.story.paragraphs as para, i}
          <div use:reveal={{ delay: 0.1 + i * 0.1 }}>
            <p class="font-body text-sm text-soiree-warm leading-7 mb-5">{para}</p>
          </div>
        {/each}

        <div use:reveal={{ delay: 0.35 }} class="border-t border-soiree-border pt-10 mb-8">
          <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.pages.home.story.philosophy_label}</p>
          <blockquote class="font-display text-display-md text-soiree-tan font-light italic leading-tight">{$tr.pages.home.story.philosophy_quote}</blockquote>
        </div>
      </div>

      <!-- Right grid + philosophy icons -->
      <div>
        <div use:reveal={{ delay: 0.15 }} class="grid grid-cols-2 gap-2 mb-10">
          {#each images as src, i}
            <div class="overflow-hidden aspect-square">
              <img loading="lazy" decoding="async"                 {src}
                alt={$tr.pages.home.story.image_alts[i]}
                class="product-img w-full h-full object-cover"
              />
            </div>
          {/each}
        </div>

        <div use:reveal={{ delay: 0.3 }} class="overflow-hidden aspect-2/1 rounded-none border border-soiree-border mb-10">
          <img loading="lazy" decoding="async"             src={inspiration_tail_light}
            alt={$tr.pages.home.story.tail_light_alt}
            class="product-img w-full h-full object-cover"
          />
        </div>

        <!-- Icon values -->
        <div use:reveal={{ delay: 0.35 }} class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {#each philosophyPoints as point}
            <div class="flex flex-col items-center text-center gap-2">
              <div class="w-8 h-px bg-soiree-tan mb-2"></div>
              <span class="font-body uppercase text-label-xs text-soiree-cream tracking-[0.12em]">{point.label}</span>
              <span class="font-body text-xs text-soiree-dimmed">{point.desc}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
