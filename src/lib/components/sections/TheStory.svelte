<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import {
    inspiration_tail_light,
    lifestyle_coffee_scene,
    lifestyle_coworking,
    lifestyle_meeting,
    lifestyle_walking,
  } from '$lib/assets';

  const philosophyPoints = [
    { label: 'INTENTIONAL', desc: '100 pieces per year' },
    { label: 'FUNCTIONAL', desc: 'Designed to perform' },
    { label: 'TIMELESS', desc: 'Easy to carry' },
    { label: 'LIMITED', desc: '500 pieces total' },
  ];

  const images = [
    lifestyle_coworking,
    lifestyle_coffee_scene,
    lifestyle_walking,
    lifestyle_meeting,
  ];
</script>

<section style="background-color: #0d0b08;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left editorial -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-8">THE STORY</p>
          <h2 class="font-display text-display-lg text-[#f2ede4] font-light italic leading-tight mb-10">
            Made for days<br/>that move with you.
          </h2>
        </div>

        <div use:reveal={{ delay: 0.1 }}>
          <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-5">
            The SUTTON No.01 was born from a frustration familiar to many — a world full of bags that were either too precious to use or too ordinary to love.
          </p>
        </div>
        <div use:reveal={{ delay: 0.2 }}>
          <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-5">
            We set out to build something different. A bag that could hold your 14-inch laptop and your water bottle. Your documents and your everyday essentials. Without looking like it's trying too hard.
          </p>
        </div>
        <div use:reveal={{ delay: 0.3 }}>
          <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-10">
            Quiet luxury. Considered design. Built for those who move with purpose.
          </p>
        </div>

        <div use:reveal={{ delay: 0.35 }} class="border-t border-[#2e2416] pt-10 mb-8">
          <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">OUR PHILOSOPHY</p>
          <blockquote class="font-display text-display-md text-[#c4a882] font-light italic leading-tight">
            "Less, but intentional."
          </blockquote>
        </div>
      </div>

      <!-- Right grid + philosophy icons -->
      <div>
        <div use:reveal={{ delay: 0.15 }} class="grid grid-cols-2 gap-2 mb-10">
          {#each images as src, i}
            <div class="overflow-hidden aspect-square">
              <img
                {src}
                alt="Lifestyle {i + 1}"
                class="product-img w-full h-full object-cover"
              />
            </div>
          {/each}
        </div>

        <div use:reveal={{ delay: 0.3 }} class="overflow-hidden aspect-[2/1] rounded-none border border-[#2e2416] mb-10">
          <img
            src={inspiration_tail_light}
            alt="Tail light inspiration"
            class="product-img w-full h-full object-cover"
          />
        </div>

        <!-- Icon values -->
        <div use:reveal={{ delay: 0.35 }} class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {#each philosophyPoints as point}
            <div class="flex flex-col items-center text-center gap-2">
              <div class="w-8 h-px bg-[#c4a882] mb-2"></div>
              <span class="font-body uppercase text-label-xs text-[#f2ede4] tracking-widest">{point.label}</span>
              <span class="font-body text-xs text-[#6b5c46]">{point.desc}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
