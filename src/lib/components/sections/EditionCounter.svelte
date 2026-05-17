<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Counter from '$lib/components/ui/Counter.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { tr } from '$lib/i18n';
</script>

<section style="background-color: #0d0b08; border-top: 1px solid #2e2416; border-bottom: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12 text-center">
    <div use:reveal>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-3">{$tr.pages.home.edition.label}</p>
      <p class="font-body text-xs text-soiree-dimmed tracking-[0.12em] mb-16">{$tr.pages.home.edition.subtitle}</p>
    </div>

    <!-- Giant Counter -->
    <div use:reveal={{ delay: 0.15 }} class="flex items-baseline justify-center gap-3 mb-6">
      <span class="font-display text-counter text-soiree-cream font-light">
        <Counter target={37} duration={2} padded={3} />
      </span>
      <span class="font-display text-counter text-soiree-muted font-light">/</span>
      <span class="font-display text-counter text-soiree-cream font-light">
        <Counter target={500} duration={2.5} padded={3} />
      </span>
    </div>

    <!-- Batch info -->
      <div use:reveal={{ delay: 0.3 }} class="flex items-center justify-center gap-8 mb-12">
      <span class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">{$tr.pages.home.edition.batch_label}</span>
      <div class="w-24 h-px bg-soiree-border"></div>
      <span class="font-body text-label-xs text-soiree-tan tracking-[0.12em]">{$tr.pages.home.edition.batch_reserved}</span>
    </div>

    <div use:reveal={{ delay: 0.4 }}>
      <Button href="/edition-01" variant="outline">
        {$tr.pages.home.edition.cta}
      </Button>
    </div>
  </div>
</section>
