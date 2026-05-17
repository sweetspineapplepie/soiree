<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
  import { lifestyle_coffee_scene } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let email = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim()) submitted = true;
  }
</script>


<Seo
  title={$tr.pages.reserve.title}
  description={$tr.pages.reserve.meta}
  schemas={[{ type: 'WebSite' }]}
/>


<!-- Hero -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="min-h-screen flex items-center">
  <div class="max-w-350 mx-auto px-6 lg:px-12 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
      <!-- Left -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-6">{$tr.pages.reserve.label}</p>
          <h1 class="font-display text-display-xl text-soiree-cream font-light leading-none mb-8">
            {#each $tr.pages.reserve.heading_lines as line, idx}
              {line}
              {#if idx < $tr.pages.reserve.heading_lines.length - 1}
                <br />
              {/if}
            {/each}
          </h1>
          <p class="font-body text-sm text-soiree-warm leading-7 max-w-sm mb-10">
            {$tr.pages.reserve.intro}
          </p>
        </div>

        <div use:reveal={{ delay: 0.2 }}>
            {#if submitted}
            <div style="border: 1px solid #2e2416;" class="px-6 py-5">
              <p class="font-body text-sm text-soiree-tan tracking-wide">
                {$tr.pages.reserve.submitted_msg}
              </p>
            </div>
          {:else}
            <form class="flex flex-col sm:flex-row gap-0 max-w-md" onsubmit={handleSubmit}>
              <EmailInput bind:value={email} placeholder={$tr.pages.reserve.email_placeholder} id="reserve-page-email" />
              <button
                type="submit"
                class="font-body uppercase text-label-sm tracking-[0.12em] bg-soiree-gold text-soiree-black px-6 py-3 hover:bg-soiree-tan transition-colors duration-300 whitespace-nowrap"
              >
                {$tr.pages.reserve.button}
              </button>
            </form>
            <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] mt-4 uppercase">
              {$tr.pages.reserve.no_spam}
            </p>
          {/if}
        </div>

        <!-- Stats row -->
        <div use:reveal={{ delay: 0.35 }} class="flex gap-12 mt-16 pt-12 border-t border-soiree-border">
          {#each $tr.pages.reserve.stats as stat, i}
          <div>
            <p class="font-display text-4xl {i === 2 ? 'text-soiree-tan' : 'text-soiree-cream'} font-light tabular-nums">{stat.value}</p>
            <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">{stat.label}</p>
          </div>
          {/each}
        </div>
      </div>

      <!-- Right -->
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-3/4 rounded-3xl border border-soiree-border bg-soiree-dark">
        <img loading="lazy" decoding="async"           src={lifestyle_coffee_scene}
          alt="Sutton bag with coffee scene for reserve access"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
