<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
  import { batch_02_teaser, product_front, texture_noise } from '$lib/assets';

  let email = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim()) submitted = true;
  }
</script>

<svelte:head>
  <title>Batch 02 Coming Soon — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Batch 02 of SUTTON No.01 is coming soon. Better things take time. Join the list." />
</svelte:head>

<div style="background-color: #0d0b08;" class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-24">
  <!-- Background image -->
  <div class="absolute inset-0 z-0 opacity-80 bg-black"></div>
  <div class="absolute inset-0 z-10 opacity-30 pointer-events-none">
    <img
      src={texture_noise}
      alt="Grain texture overlay"
      class="w-full h-full object-cover"
    />
  </div>
  <div class="absolute inset-0 z-0 opacity-40">
    <img
      src={batch_02_teaser}
      alt="Batch 02 teaser background"
      class="w-full h-full object-cover"
      style="filter: blur(8px);"
    />
  </div>

  <div class="relative z-10 text-center max-w-2xl w-full">
    <!-- Small product image -->
    <div use:reveal class="w-32 mx-auto mb-12 overflow-hidden aspect-square">
      <img
        src={product_front}
        alt="SUTTON No.01 front profile"
        class="w-full h-full object-cover opacity-60"
        style="filter: blur(1px);"
      />
    </div>

    <div use:reveal={{ delay: 0.1 }}>
      <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">SOIRÉE</p>
      <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-3">
        BATCH 02
      </h1>
      <h2 class="font-display text-display-lg text-[#a08d74] font-light italic">
        COMING SOON
      </h2>
    </div>

    <div use:reveal={{ delay: 0.25 }} class="my-10">
      <div class="w-px h-12 bg-[#2e2416] mx-auto mb-8"></div>
      <p class="font-display text-display-md text-[#6b5c46] font-light italic leading-tight">
        "Better things take time.<br/>Stay tuned."
      </p>
    </div>

    <div use:reveal={{ delay: 0.4 }}>
      {#if submitted}
        <p class="font-body text-sm text-[#c4a882] tracking-wide">You're on the list.</p>
      {:else}
        <form class="flex flex-col sm:flex-row justify-center gap-0 max-w-md mx-auto" onsubmit={handleSubmit}>
          <EmailInput bind:value={email} placeholder="Your email address" id="batch02-email" />
          <button
            type="submit"
            class="font-body uppercase text-label-sm tracking-widest bg-[#c8a96e] text-[#0d0b08] px-6 py-3 hover:bg-[#c4a882] transition-colors duration-300 whitespace-nowrap"
          >
            JOIN THE LIST
          </button>
        </form>
      {/if}
    </div>

    <!-- Minimal footer wordmark -->
    <div use:reveal={{ delay: 0.5 }} class="mt-24 pt-8 border-t border-[#2e2416]">
      <a href="/" class="font-display font-light tracking-[0.35em] text-sm text-[#6b5c46] hover:text-[#c4a882] transition-colors duration-300">
        SOIRÉE
      </a>
    </div>
  </div>
</div>
