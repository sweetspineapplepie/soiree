<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { texture_leather } from '$lib/assets';

  interface FaqItem {
    question: string;
    answer: string;
  }

  const faqs: FaqItem[] = [
    {
      question: 'What is SUTTON No.01?',
      answer: 'SUTTON No.01 is a structured utility work bag designed by SOIRÉE. It is the first piece from our inaugural collection, limited to a lifetime production of 500 units. It is designed for the person who moves through their day with intent.',
    },
    {
      question: 'Is the strap adjustable?',
      answer: 'Yes. The shoulder strap is fully detachable and adjustable to suit different carrying preferences. The gold-tone hardware makes adjustment smooth and secure.',
    },
    {
      question: 'What materials are used?',
      answer: 'SUTTON No.01 is crafted from premium synthetic leather with a soft-touch finish, featuring a suede signature panel, YKK zippers, gold-tone hardware, and protective metal feet at the base.',
    },
    {
      question: 'How do I collect the item?',
      answer: 'Once your order is confirmed and payment is cleared, your bag will be shipped within 3 business days. You will receive a tracking number via email as soon as it is dispatched.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship internationally. Delivery times may vary depending on your location. International customs fees and duties are the responsibility of the customer.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this to track your package through the respective carrier\'s website.',
    },
  ];

  let openIndex = $state<number | null>(null);

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<svelte:head>
  <title>FAQ — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Frequently asked questions about SUTTON No.01 — materials, shipping, returns, and more." />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24 min-h-screen">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mb-16">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">FAQ</p>
        <h1 class="font-display text-display-lg text-[#f2ede4] font-light italic leading-tight">
          Here are some<br/>things you might<br/>want to know.
        </h1>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="hidden lg:block overflow-hidden aspect-[4/5] rounded-none border border-[#2e2416]">
        <img
          src={texture_leather}
          alt="Subtle leather texture"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="max-w-2xl mx-auto">
      <div class="flex flex-col">
      {#each faqs as faq, i}
        <div use:reveal={{ delay: i * 0.06 }} style="border-bottom: 1px solid #2e2416;">
          <button
            class="w-full flex items-center justify-between py-6 text-left group"
            onclick={() => toggle(i)}
            id="faq-btn-{i}"
            aria-expanded={openIndex === i}
          >
            <span class="font-body text-sm text-[#f2ede4] group-hover:text-[#c4a882] transition-colors duration-300 pr-8">
              {faq.question}
            </span>
            <span
              class="text-[#a08d74] flex-shrink-0 text-lg transition-transform duration-300"
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
              <p class="font-body text-sm text-[#a08d74] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          {/if}
        </div>
      {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
