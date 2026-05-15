<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
  import {
    blueprint_iteration,
    iteration_material_board,
    iteration_prototype,
    iteration_sketch_01,
    iteration_sketch_02,
  } from '$lib/assets';
</script>

<svelte:head>
  <title>Iteration — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="The SOIRÉE design process — from ideation to real life. Five steps that made SUTTON No.01." />
</svelte:head>

<!-- Page header -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">SOIRÉE</p>
        <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-6">
          Iteration
        </h1>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed max-w-lg">
          From the first sketch on a napkin to the final piece in your hands — every version taught us something.
        </p>
        <div class="w-24 h-px bg-[#2e2416] mt-10"></div>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-[4/5] rounded-none border border-[#2e2416]">
        <img
          src={iteration_material_board}
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
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">CRAFTED WITH INTENTION</p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light italic leading-tight mb-8">
          "We refined it until<br/>there was nothing left to remove."
        </h2>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-5">
          Every prototype revealed something — a pocket slightly too shallow, a strap that didn't sit right. We went through eight iterations before arriving at SUTTON No.01.
        </p>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed">
          The result isn't just a bag. It's the answer to every compromise we refused to make.
        </p>
      </div>
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-2 gap-2">
        {#each [iteration_sketch_01, iteration_sketch_02, iteration_material_board, iteration_prototype] as src, i}
          <div class="overflow-hidden aspect-square">
            <img
              src={src}
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
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">BLUEPRINTS</p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light italic leading-tight mb-6">
          The final form was guided by lines, proportions, and function.
        </h2>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-6">
          Every sketch and prototype was evaluated not only for look, but for how it would live in motion. This blueprint captures the balance between structure and everyday use.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-3xl border border-[#2e2416] p-5 bg-[#141008]">
            <p class="font-body uppercase text-label-xs text-[#f2ede4] tracking-[0.2em] mb-2">Sketches</p>
            <p class="font-body text-sm text-[#a08d74] leading-relaxed">Early forms, quick notes, and the raw beginning of the design.</p>
          </div>
          <div class="rounded-3xl border border-[#2e2416] p-5 bg-[#141008]">
            <p class="font-body uppercase text-label-xs text-[#f2ede4] tracking-[0.2em] mb-2">Prototype</p>
            <p class="font-body text-sm text-[#a08d74] leading-relaxed">Material tests and structure checks before the bag was finalized.</p>
          </div>
        </div>
      </div>

      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden rounded-3xl border border-[#2e2416] bg-[#141008]">
        <img
          src={blueprint_iteration}
          alt="Iteration blueprint"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
