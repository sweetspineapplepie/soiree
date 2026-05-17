<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { texture_leather } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="py-24" style="background-color: #0d0b08;">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mb-16">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.faq}</p>
        <h2 class="font-display text-display-lg text-soiree-cream font-light italic leading-tight">
          {#each $tr.pages.faq_title_lines as line, idx}
            {line}
            {#if idx < $tr.pages.faq_title_lines.length - 1}
              <br />
            {/if}
          {/each}
        </h2>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="hidden lg:block overflow-hidden aspect-4/5 rounded-none border border-soiree-border">
        <img loading="lazy" decoding="async" src={texture_leather} alt="Subtle leather texture" class="product-img w-full h-full object-cover" />
      </div>
    </div>

    <div class="max-w-2xl mx-auto">
      <div class="flex flex-col">
      {#each $tr.pages.faq_items as faq, i}
        <div use:reveal={{ delay: i * 0.06 }} style="border-bottom: 1px solid #2e2416;">
          <button
            class="w-full flex items-center justify-between py-6 text-left group"
            onclick={() => toggle(i)}
            id="faq-btn-{i}"
            aria-expanded={openIndex === i}
          >
            <span class="font-body text-sm text-soiree-cream group-hover:text-soiree-tan transition-colors duration-300 pr-8">
              {faq.question}
            </span>
            <span
              class="text-soiree-warm shrink-0 text-lg transition-transform duration-300"
              style="transform: rotate({openIndex === i ? '45deg' : '0deg'})"
            >
              +
            </span>
          </button>
          {#if openIndex === i}
            <div
              class="overflow-hidden pb-6"
              style="animation: slideDown 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards;"
            >
              <p class="font-body text-sm text-soiree-warm leading-7">
                {faq.answer}
              </p>
            </div>
          {/if}
        </div>
      {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
