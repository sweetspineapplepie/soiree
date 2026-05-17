<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';
  import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
  import {
    blueprint_iteration,
    iteration_material_board,
    iteration_prototype,
    iteration_sketch_01,
    iteration_sketch_02,
  } from '$lib/assets';
  import { tr } from '$lib/i18n';
</script>


<Seo
  title="Iteration — SOIRÉE SUTTON No.01"
  description="The SOIRÉE design process — from ideation to real life. Five steps that made SUTTON No.01."
  schemas={[{ type: 'WebSite' }]}
/>


<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.iteration.title}</p>
        <h1 class="font-display text-display-xl text-soiree-cream font-light leading-none mb-6">
          {$tr.pages.iteration.heading}
        </h1>
        <p class="font-body text-sm text-soiree-warm leading-7 max-w-lg">
          From the first sketch on a napkin to the final piece in your hands — every version taught us something.
        </p>
        <div class="w-24 h-px bg-soiree-border mt-10"></div>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-4/5 rounded-none border border-soiree-border">
        <img loading="lazy" decoding="async"           src={iteration_material_board}
          alt="Iteration material board"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

<ProcessTimeline />

<!-- Additional iteration content -->
<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.pages.iteration.crafted}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light italic leading-tight mb-8">
          {$tr.pages.iteration.crafted_heading}
        </h2>
        <p class="font-body text-sm text-soiree-warm leading-7 mb-5">
          {$tr.pages.iteration.crafted_desc1}
        </p>
        <p class="font-body text-sm text-soiree-warm leading-7">
          {$tr.pages.iteration.crafted_desc2}
        </p>
      </div>
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-2 gap-2">
        {#each [iteration_sketch_01, iteration_sketch_02, iteration_material_board, iteration_prototype] as src, i}
          <div class="overflow-hidden aspect-square">
            <img loading="lazy" decoding="async"               src={src}
              alt="Iteration image {i + 1}"
              class="product-img w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.iteration.blueprints}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light italic leading-tight mb-6">
          The final form was guided by lines, proportions, and function.
        </h2>
        <p class="font-body text-sm text-soiree-warm leading-7 mb-6">
          Every sketch and prototype was evaluated not only for look, but for how it would live in motion. This blueprint captures the balance between structure and everyday use.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-3xl border border-soiree-border p-5 bg-soiree-dark">
            <p class="font-body uppercase text-label-xs text-soiree-cream tracking-[0.12em] mb-2">{$tr.pages.iteration.blueprint_sketches}</p>
            <p class="font-body text-sm text-soiree-warm leading-7">{$tr.pages.iteration.blueprint_sketches_desc}</p>
          </div>
          <div class="rounded-3xl border border-soiree-border p-5 bg-soiree-dark">
            <p class="font-body uppercase text-label-xs text-soiree-cream tracking-[0.12em] mb-2">{$tr.pages.iteration.blueprint_prototype}</p>
            <p class="font-body text-sm text-soiree-warm leading-7">{$tr.pages.iteration.blueprint_prototype_desc}</p>
          </div>
        </div>
      </div>

      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden rounded-3xl border border-soiree-border bg-soiree-dark">
        <img loading="lazy" decoding="async"           src={blueprint_iteration}
          alt="Iteration blueprint"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
