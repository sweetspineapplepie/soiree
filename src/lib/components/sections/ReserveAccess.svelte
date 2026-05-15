<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import EmailInput from '$lib/components/ui/EmailInput.svelte';
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
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Left content -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-6">
          RESERVE EARLY ACCESS
        </p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light mb-4 leading-tight">
          Be the first to know<br/>when Batch 02 opens.
        </h2>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-10">
          Reserve your spot before the next batch drops. Only 50 units per batch.
        </p>

        {#if submitted}
          <div class="border border-[#2e2416] px-6 py-4">
            <p class="font-body text-sm text-[#c4a882] tracking-wide">
              You're on the list. We'll be in touch.
            </p>
          </div>
        {:else}
          <form class="flex flex-col sm:flex-row gap-0" onsubmit={handleSubmit}>
            <EmailInput bind:value={email} placeholder="Your email address" id="reserve-email" />
            <button
              type="submit"
              class="font-body uppercase text-label-sm tracking-widest bg-[#c8a96e] text-[#0d0b08] px-6 py-3 hover:bg-[#c4a882] transition-colors duration-300 whitespace-nowrap"
            >
              NOTIFY ME
            </button>
          </form>
          <p class="font-body text-label-xs text-[#6b5c46] tracking-widest mt-4">
            No spam. Only important updates.
          </p>
        {/if}
      </div>

      <!-- Right image -->
      <div use:reveal={{ delay: 0.2 }} class="overflow-hidden aspect-[4/5] lg:aspect-[3/4] rounded-3xl border border-[#2e2416] bg-[#141008]">
        <img
          src={lifestyle_coffee_scene}
          alt="Sutton bag with coffee scene for reserve access"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
