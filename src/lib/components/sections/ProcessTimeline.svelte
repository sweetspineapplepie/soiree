<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    detail_suede,
    edition_tag,
    inspiration_tail_light,
    iteration_sketch_01,
    lifestyle_walking,
  } from '$lib/assets';

  const steps = [
    { num: '01', label: 'INSPIRED', desc: 'Timeless lines' },
    { num: '02', label: 'FROM SKETCH', desc: 'Raw ideation' },
    { num: '03', label: 'CRAFTED', desc: 'Textured details' },
    { num: '04', label: 'NUMBERED', desc: 'Edition ritual' },
    { num: '05', label: 'MADE TO MOVE', desc: 'Everyday utility' },
  ];

  const processImages = [
    inspiration_tail_light,
    iteration_sketch_01,
    detail_suede,
    edition_tag,
    lifestyle_walking,
  ];
</script>

<section style="background-color: #0d0b08;" class="py-24 overflow-hidden">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div use:reveal class="mb-4">
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">THE PROCESS</p>
      <h2 class="font-display text-display-md text-[#f2ede4] font-light">
        Inspired by<br/>timeless lines.
      </h2>
    </div>

    <!-- Process images -->
    <div use:reveal={{ delay: 0.15 }} class="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-12 mb-12">
      {#each processImages as src, i}
        <div class="overflow-hidden aspect-[4/5] rounded-3xl border border-[#2e2416] bg-[#141008]">
          <img
            src={src}
            alt="Process step {i + 1}"
            class="product-img w-full h-full object-cover"
          />
        </div>
      {/each}
    </div>

    <!-- Steps row -->
    <div class="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
      <!-- Connecting line -->
      <div class="absolute top-3 left-0 right-0 h-px bg-[#2e2416] hidden lg:block mx-6"></div>

      {#each steps as step, i}
        <div use:reveal={{ delay: i * 0.1 }} class="relative flex flex-col gap-2">
          <span class="font-display text-display-md font-light" style="color: rgba(196,168,130,0.35);">
            {step.num}
          </span>
          <span class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest mt-1">
            {step.label}
          </span>
          <span class="font-body text-xs text-[#6b5c46] leading-relaxed">
            {step.desc}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
