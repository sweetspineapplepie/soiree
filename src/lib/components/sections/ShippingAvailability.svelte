<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Button from '$lib/components/ui/Button.svelte';
  import { tr } from '$lib/i18n';
</script>

<section class="py-24" style="background-color: #0d0b08;">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="max-w-2xl mx-auto text-center" use:reveal>
      <h2 class="font-display text-display-md text-soiree-cream font-light leading-tight mb-6">
        {$tr.pages.home.shipping.title}
      </h2>
      <p class="font-body text-sm text-soiree-warm leading-7 mb-12 mx-auto max-w-lg">
        {#each $tr.pages.home.shipping.body_lines as line, idx}
          {line}{#if idx < $tr.pages.home.shipping.body_lines.length - 1}<br/>{/if}
        {/each}
      </p>

      <div class="flex flex-col gap-8 max-w-md mx-auto mb-16 text-left">
        <div class="border-l border-soiree-border pl-6">
          <h3 class="font-body text-lg text-soiree-cream font-light mb-2">{$tr.pages.home.shipping.indonesia.title}</h3>
          <p class="font-body text-sm text-soiree-dimmed"><span class="text-soiree-tan mr-2">✓</span>{$tr.pages.home.shipping.indonesia.status}</p>
        </div>
        <div class="border-l border-soiree-border pl-6">
          <h3 class="font-body text-lg text-soiree-cream font-light mb-2">{$tr.pages.home.shipping.international.title}</h3>
          <p class="font-body text-sm text-soiree-dimmed"><span class="text-soiree-tan mr-2">✓</span>{$tr.pages.home.shipping.international.status}</p>
        </div>
      </div>

      <div class="pt-10 border-t border-soiree-border">
        <p class="font-body text-sm text-soiree-warm mb-6">
          {$tr.pages.home.shipping.contact_prompt}
        </p>
        <Button href="/contact" variant="outline" class="w-full sm:w-auto">
          {$tr.pages.home.shipping.contact_cta}
        </Button>
      </div>
    </div>
  </div>
</section>
