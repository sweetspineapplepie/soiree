<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    care_cleaning,
    care_hardware_care,
    care_storage,
    care_suede_care,
  } from '$lib/assets';

  const careRules = [
    {
      image: care_cleaning,
      title: 'WIPE GENTLY',
      desc: 'Use a soft, clean cloth to wipe down the exterior. Avoid abrasive materials that could scratch the surface.'
    },
    {
      image: care_storage,
      title: 'STORE PROPERLY',
      desc: 'Store in the provided dust bag when not in use. Keep in a cool, dry place away from direct sunlight.'
    },
    {
      image: care_suede_care,
      title: 'SUEDE CARE',
      desc: 'Treat the suede panel with a soft brush and keep it away from direct moisture whenever possible.'
    },
    {
      image: care_hardware_care,
      title: 'HARDWARE CARE',
      desc: 'Keep the gold-tone hardware clean and dry. Wipe gently after use to preserve its finish.'
    },
  ];
</script>

<svelte:head>
  <title>Care Guide — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="How to care for your SUTTON No.01. Made to last with the right care." />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">CARE GUIDE</p>
          <h1 class="font-display text-display-lg text-[#f2ede4] font-light italic leading-tight mb-12">
            Made to last,<br/>with the right care.
          </h1>
        </div>

        <div class="flex flex-col gap-10">
          {#each careRules as rule, i}
            <div use:reveal={{ delay: i * 0.1 }} class="flex gap-6 items-start group">
              <div class="flex-shrink-0 w-16 h-16 overflow-hidden rounded-3xl border border-[#2e2416] bg-[#141008]">
                <img src={rule.image} alt={rule.title} class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest mb-2">
                  {rule.title}
                </h3>
                <p class="font-body text-sm text-[#a08d74] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          {/each}
        </div>

        <div use:reveal={{ delay: 0.5 }} class="mt-12">
          <a
            href="/contact"
            class="group border border-[#2e2416] px-8 py-3 inline-flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
          >
            <span class="font-body uppercase text-label-sm tracking-widest text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 group-hover:-translate-x-1 transition-transform">
              VIEW FULL CARE GUIDE
            </span>
            <span class="text-[#a08d74] group-hover:text-[#f2ede4] transition-all duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      <!-- Right image -->
      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-[3/4] rounded-3xl border border-[#2e2416] bg-[#141008]">
        <img
          src={care_hardware_care}
          alt="Care hardware for SUTTON No.01"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
