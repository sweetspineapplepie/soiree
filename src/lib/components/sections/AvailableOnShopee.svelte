<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Button from '$lib/components/ui/Button.svelte';
  import { tr } from '$lib/i18n';
</script>

<section class="py-24" style="background-color: #0d0b08; border-top: 1px solid #1c1710; border-bottom: 1px solid #1c1710;">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="max-w-2xl mx-auto text-center" use:reveal>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">
        {$tr.pages.home.shopee.label}
      </p>
      <h2 class="font-display text-display-md text-soiree-cream font-light leading-tight mb-6">
        {$tr.pages.home.shopee.title}
      </h2>
      <p class="font-body text-sm text-soiree-warm leading-7 mb-10 mx-auto max-w-lg">
        {$tr.pages.home.shopee.description}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <Button href="https://shopee.co.id" variant="gold" class="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
          {$tr.pages.home.shopee.cta}
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 border-t border-soiree-border">
        {#each $tr.pages.home.shopee.benefits as benefit}
        <div>
          <span class="block text-soiree-cream text-lg mb-2">{benefit.icon}</span>
          <h3 class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-cream mb-2">{benefit.title}</h3>
          <p class="font-body text-xs text-soiree-dimmed">{benefit.desc}</p>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>
