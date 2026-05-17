<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Button from '$lib/components/ui/Button.svelte';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
  import { tr } from '$lib/i18n';
  import { lifestyle_coffee_scene } from '$lib/assets';

  let email = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim()) {
      submitted = true;
    }
  }
</script>

<section style="background-color: #1c1710; border-top: 1px solid #2e2416;" class="py-24">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Left content -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.pages.reserve.label}</p>
        <h2 class="font-display text-display-md text-soiree-cream font-light mb-4 leading-tight">
          {#each $tr.pages.reserve.heading_lines as line, idx}
            {line}{#if idx < $tr.pages.reserve.heading_lines.length - 1}<br/>{/if}
          {/each}
        </h2>
        <p class="font-body text-sm text-soiree-warm leading-7 mb-10">{$tr.pages.reserve.intro}</p>

        {#if submitted}
          <div class="border border-soiree-border px-6 py-4">
            <p class="font-body text-sm text-soiree-tan tracking-wide">{$tr.pages.reserve.submitted_msg}</p>
          </div>
        {:else}
          <form class="flex flex-col sm:flex-row gap-0" onsubmit={handleSubmit}>
            <EmailInput bind:value={email} placeholder={$tr.pages.reserve.email_placeholder} id="reserve-email" />
            <Button type="submit" variant="gold" class="whitespace-nowrap">
              {$tr.pages.reserve.label}
            </Button>
          </form>
          <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] mt-4">{$tr.pages.reserve.no_spam}</p>
        {/if}
      </div>

      <!-- Right image -->
      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-4/5 lg:aspect-3/4 rounded-3xl border border-soiree-border bg-soiree-dark">
        <img loading="lazy" decoding="async"           src={lifestyle_coffee_scene}
          alt="Sutton bag with coffee scene for reserve access"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
