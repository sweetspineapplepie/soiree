<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Feather, Laptop, Droplets, Key, FolderOpen } from 'lucide-svelte';

  const features = [
    {
      icon: Feather,
      label: 'LIGHTWEIGHT',
      sublabel: '700–880 gram',
    },
    {
      icon: Laptop,
      label: 'FIT LAPTOP',
      sublabel: 'up to 14 inch',
    },
    {
      icon: Droplets,
      label: 'BOTTLE SLEEVE',
      sublabel: 'upright & secure',
    },
    {
      icon: Key,
      label: 'KEY LEASH',
      sublabel: 'Easy to find',
    },
    {
      icon: FolderOpen,
      label: 'HIDDEN POCKET',
      sublabel: 'For what matters',
    },
  ];
</script>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <!-- Section label -->
    <div class="py-6 border-b border-[#2e2416] text-center">
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em]">
        BUILT FOR YOUR DAY. REFINED FOR EVERY YOU.
      </p>
    </div>

    <!-- Features row -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-[#2e2416]">
      {#each features as feature, i}
        <div
          use:reveal={{ delay: i * 0.08 }}
          class="flex flex-col items-center text-center gap-3 py-10 px-6 group hover:-translate-y-1 transition-transform duration-400 cursor-default"
        >
          <feature.icon size={24} stroke-width={1.5} class="text-[#c4a882] transition-colors duration-300 group-hover:text-[#f2ede4]" />
          <span class="font-body uppercase text-label-sm text-[#f2ede4] tracking-widest mt-1">
            {feature.label}
          </span>
          <span class="font-body text-xs text-[#6b5c46]">
            {feature.sublabel}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
