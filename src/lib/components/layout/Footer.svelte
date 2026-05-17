<script lang="ts">
  import { tr } from '$lib/i18n';

  const infoLinks = [
    { key: 'story', href: '/story' },
    { key: 'iteration', href: '/iteration' },
    { key: 'details', href: '/details' },
    { key: 'edition', href: '/edition-01' },
  ];

  const supportLinks = [
    { key: 'faq', href: '/faq' },
    { key: 'care_guide', href: '/care-guide' },
    { key: 'shipping', href: '/shipping' },
    { key: 'contact', href: '/contact' },
  ];

  const connectLinks = [
    { key: 'instagram', href: 'https://instagram.com/soiree.studio', external: true },
    { key: 'pinterest', href: 'https://pinterest.com/soiree.studio', external: true },
    { key: 'email', href: '/contact', external: false },
  ];
</script>

<footer style="background-color: #141008; border-top: 1px solid #2e2416;" class="mt-auto">
  <div class="max-w-350 mx-auto px-6 lg:px-12 py-16">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      <!-- Branding -->
      <div class="col-span-2 lg:col-span-1">
        <a href="/" class="font-display font-light tracking-[0.12em] text-sm text-soiree-cream hover:text-soiree-tan transition-colors duration-300">
          SOIRÉE
        </a>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mt-3 leading-7 whitespace-pre-line">
          {$tr.footer.brandline}
        </p>
      </div>

      <!-- Info -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-5">{$tr.footer.section_info}</h4>
        <ul class="flex flex-col gap-3">
          {#each infoLinks as link}
            <li>
              <a href={link.href} class="nav-item font-body text-xs text-soiree-warm hover:text-soiree-cream transition-colors duration-300 relative">
                {$tr.nav[link.key]}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-5">{$tr.footer.section_support}</h4>
        <ul class="flex flex-col gap-3">
          {#each supportLinks as link}
            <li>
              <a href={link.href} class="nav-item font-body text-xs text-soiree-warm hover:text-soiree-cream transition-colors duration-300 relative">
                {$tr.footer.support[link.key]}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Connect -->
      <div>
        <h4 class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-5">{$tr.footer.section_connect}</h4>
        <ul class="flex flex-col gap-3">
          {#each connectLinks as link}
            <li>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
                class="nav-item font-body text-xs text-soiree-warm hover:text-soiree-cream transition-colors duration-300 relative"
              >
                {$tr.footer.connect[link.key]}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top: 1px solid #2e2416;" class="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">
        {$tr.footer.copyright}
      </p>
      <p class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase">
        {$tr.footer.product_label}
      </p>
    </div>
  </div>
</footer>
