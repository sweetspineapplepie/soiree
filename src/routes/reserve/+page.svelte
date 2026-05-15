<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
  import { lifestyle_coffee_scene } from '$lib/assets';

  let email = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (email.trim()) submitted = true;
  }
</script>

<svelte:head>
  <title>Reserve Access — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Reserve your spot for SUTTON No.01. Limited to 50 units per batch. Join the early access list." />
</svelte:head>

<!-- Hero -->
<div style="background-color: #0d0b08; padding-top: 6rem;" class="min-h-screen flex items-center">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
      <!-- Left -->
      <div>
        <div use:reveal>
          <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">RESERVE</p>
          <h1 class="font-display text-display-xl text-[#f2ede4] font-light leading-none mb-8">
            Reserve<br/>Early Access
          </h1>
          <p class="font-body text-sm text-[#a08d74] leading-relaxed max-w-sm mb-10">
            Be the first to know when Batch 02 opens. Only 50 units per batch. Once they're gone, you wait for the next — or you miss out.
          </p>
        </div>

        <div use:reveal={{ delay: 0.2 }}>
          {#if submitted}
            <div style="border: 1px solid #2e2416;" class="px-6 py-5">
              <p class="font-body text-sm text-[#c4a882] tracking-wide">
                You're on the list. You'll hear from us soon.
              </p>
            </div>
          {:else}
            <form class="flex flex-col sm:flex-row gap-0 max-w-md" onsubmit={handleSubmit}>
              <EmailInput bind:value={email} placeholder="Your email address" id="reserve-page-email" />
              <button
                type="submit"
                class="font-body uppercase text-label-sm tracking-widest bg-[#c8a96e] text-[#0d0b08] px-6 py-3 hover:bg-[#c4a882] transition-colors duration-300 whitespace-nowrap"
              >
                RESERVE
              </button>
            </form>
            <p class="font-body text-label-xs text-[#6b5c46] tracking-widest mt-4 uppercase">
              No spam. Only when Batch 02 opens.
            </p>
          {/if}
        </div>

        <!-- Stats row -->
        <div use:reveal={{ delay: 0.35 }} class="flex gap-12 mt-16 pt-12 border-t border-[#2e2416]">
          <div>
            <p class="font-display text-[2.5rem] text-[#f2ede4] font-light tabular-nums">500</p>
            <p class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">Total pieces</p>
          </div>
          <div>
            <p class="font-display text-[2.5rem] text-[#f2ede4] font-light tabular-nums">50</p>
            <p class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">Per batch</p>
          </div>
          <div>
            <p class="font-display text-[2.5rem] text-[#c4a882] font-light tabular-nums">37</p>
            <p class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">Reserved</p>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-[3/4] rounded-3xl border border-[#2e2416] bg-[#141008]">
        <img
          src={lifestyle_coffee_scene}
          alt="Sutton bag with coffee scene for reserve access"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
