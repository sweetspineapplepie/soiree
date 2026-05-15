<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { product_front, product_interior, product_side } from '$lib/assets';

  const images = [
    product_front,
    product_interior,
    product_side,
  ];
</script>

<section style="background-color: #1c1710;" class="py-24">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-center">
      <!-- Left -->
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-8">FORM FOLLOWS PURPOSE</p>
        <h2 class="font-display text-display-md text-[#f2ede4] font-light leading-tight mb-8">
          Form Follows<br/>Purpose.
        </h2>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-4">
          Every pocket placed with intent. Every strap designed with your shoulder in mind. Nothing excess. Everything considered.
        </p>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-4">
          The SUTTON is the result of obsessing over how you move through your day — and building a bag that keeps up.
        </p>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed mb-10">
          Premium materials. Architectural silhouette. Quietly confident in every room it enters.
        </p>
        <a
          href="/details"
          class="group relative overflow-hidden border border-[#2e2416] px-8 py-3 flex items-center gap-2 w-fit hover:border-[#c4a882] transition-colors duration-300"
        >
          <span class="font-body uppercase text-label-sm tracking-widest text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 group-hover:-translate-x-1 transition-transform">
            SEE ALL DETAILS
          </span>
          <span class="text-[#a08d74] group-hover:text-[#f2ede4] transition-all duration-300 group-hover:translate-x-1 text-sm">→</span>
        </a>
      </div>

      <!-- Right: 3 images -->
      <div use:reveal={{ delay: 0.2 }} class="grid grid-cols-3 gap-2">
        {#each images as src, i}
          <div class="overflow-hidden aspect-[3/4]">
            <img
              {src}
              alt="SUTTON No.01 product view {i + 1}"
              class="product-img w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
