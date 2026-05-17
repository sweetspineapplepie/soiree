<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Feather, Laptop, Droplets, Key, FolderOpen } from 'lucide-svelte';
  import { tr } from '$lib/i18n';

  const features = $tr.pages.home.features.items.map((f: any, i: number) => {
    const icons = [Feather, Laptop, Droplets, Key, FolderOpen];
    return { icon: icons[i], label: f.label, sublabel: f.sublabel };
  });
</script>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <!-- Section label -->
    <div class="py-6 border-b border-soiree-border text-center">
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em]">
        BUILT FOR YOUR DAY. REFINED FOR EVERY YOU.
      </p>
    </div>

    <!-- Features row -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-soiree-border">
      {#each features as feature, i}
        <div
          use:reveal={{ delay: i * 0.08 }}
          class="flex flex-col items-center text-center gap-3 py-10 px-6 group hover:-translate-y-1 transition-transform duration-500 cursor-default"
        >
          <feature.icon size={24} stroke-width={1.5} class="text-soiree-tan transition-colors duration-300 group-hover:text-soiree-cream" />
          <span class="font-body uppercase text-label-sm text-soiree-cream tracking-[0.12em] mt-1">
            {feature.label}
          </span>
          <span class="font-body text-xs text-soiree-dimmed">
            {feature.sublabel}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
