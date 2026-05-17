<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';
  import Button from '$lib/components/ui/Button.svelte';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
  import { batch_02_teaser, product_front, texture_noise } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let email = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim()) submitted = true;
  }
</script>


<Seo
  title={$tr.pages.batch02.page_title}
  description={$tr.pages.batch02.meta}
  schemas={[{ type: 'WebSite' }]}
/>


<div style="background-color: #0d0b08;" class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-24">
  <!-- Background image -->
  <div class="absolute inset-0 z-0 opacity-80 bg-black"></div>
  <div class="absolute inset-0 z-10 opacity-30 pointer-events-none">
    <img loading="lazy" decoding="async"       src={texture_noise}
      alt="Grain texture overlay"
      class="w-full h-full object-cover"
    />
  </div>
  <div class="absolute inset-0 z-0 opacity-40">
    <img loading="lazy" decoding="async"       src={batch_02_teaser}
      alt="Batch 02 teaser background"
      class="w-full h-full object-cover"
      style="filter: blur(8px);"
    />
  </div>

  <div class="relative z-10 text-center max-w-2xl w-full">
    <!-- Small product image -->
    <div use:reveal class="w-32 mx-auto mb-12 overflow-hidden aspect-square">
      <img loading="lazy" decoding="async"         src={product_front}
        alt="SUTTON No.01 front profile"
        class="w-full h-full object-cover opacity-60"
        style="filter: blur(1px);"
      />
    </div>

    <div use:reveal={{ delay: 0.1 }}>
      <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.nav.logo}</p>
      <h1 class="font-display text-display-xl text-soiree-cream font-light leading-none mb-3">
        {$tr.pages.batch02.title}
      </h1>
      <h2 class="font-display text-display-lg text-soiree-warm font-light italic">
        {$tr.pages.batch02.subtitle}
      </h2>
    </div>

    <div use:reveal={{ delay: 0.25 }} class="my-10">
      <div class="w-px h-12 bg-soiree-border mx-auto mb-8"></div>
      <p class="font-display text-display-md text-soiree-dimmed font-light italic leading-tight">
        {@html $tr.pages.batch02.quote}
      </p>
    </div>

    <div use:reveal={{ delay: 0.4 }}>
      {#if submitted}
        <p class="font-body text-sm text-soiree-tan tracking-wide">{$tr.pages.batch02.submitted_msg}</p>
      {:else}
        <form class="flex flex-col sm:flex-row justify-center gap-0 max-w-md mx-auto" onsubmit={handleSubmit}>
          <EmailInput bind:value={email} placeholder={$tr.pages.batch02.placeholder} id="batch02-email" />
          <Button type="submit" variant="gold" class="whitespace-nowrap">
            {$tr.pages.batch02.button}
          </Button>
        </form>
      {/if}
    </div>

    <!-- Minimal footer wordmark -->
    <div use:reveal={{ delay: 0.5 }} class="mt-24 pt-8 border-t border-soiree-border">
      <a href="/" class="font-display font-light tracking-[0.12em] text-sm text-soiree-dimmed hover:text-soiree-tan transition-colors duration-300">
        SOIRÉE
      </a>
    </div>
  </div>
</div>
