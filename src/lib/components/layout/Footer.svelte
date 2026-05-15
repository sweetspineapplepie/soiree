<script lang="ts">
  const infoLinks = [
    { label: 'The Story', href: '/story' },
    { label: 'Iteration', href: '/iteration' },
    { label: 'Details', href: '/details' },
    { label: 'Edition 01', href: '/edition-01' },
  ];
  const supportLinks = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Care Guide', href: '/care-guide' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ];
  const connectLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Email', href: '/contact' },
  ];
</script>

<footer style="background-color: #141008; border-top: 1px solid #2e2416;" class="mt-auto">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      <!-- Branding -->
      <div class="col-span-2 lg:col-span-1">
        <a href="/" class="font-display font-light tracking-[0.25em] text-sm text-[#f2ede4] hover:text-[#c4a882] transition-colors duration-300">
          SOIRÉE
        </a>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-widest mt-3 leading-relaxed">
          OBJECTS OF DAILY<br/>SIGNIFICANCE
        </p>
      </div>

      <!-- Info -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-[#6b5c46] tracking-widest mb-5">INFO</h4>
        <ul class="flex flex-col gap-3">
          {#each infoLinks as link}
            <li>
              <a href={link.href} class="nav-item font-body text-xs text-[#a08d74] hover:text-[#f2ede4] transition-colors duration-300 relative">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-[#6b5c46] tracking-widest mb-5">SUPPORT</h4>
        <ul class="flex flex-col gap-3">
          {#each supportLinks as link}
            <li>
              <a href={link.href} class="nav-item font-body text-xs text-[#a08d74] hover:text-[#f2ede4] transition-colors duration-300 relative">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-[#6b5c46] tracking-widest mb-5">CONNECT</h4>
        <ul class="flex flex-col gap-3">
          {#each connectLinks as link}
            <li>
              <a href={link.href} class="nav-item font-body text-xs text-[#a08d74] hover:text-[#f2ede4] transition-colors duration-300 relative">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top: 1px solid #2e2416;" class="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">
        © 2025 SOIRÉE — All rights reserved.
      </p>
      <p class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase">
        SUTTON No.01
      </p>
    </div>
  </div>
</footer>
