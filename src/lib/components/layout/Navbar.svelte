<script lang="ts">
  import { page } from '$app/stores';
  import { mobileMenuOpen, scrolled } from '$lib/stores/navigation';
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';
  import { tr, setLocale, locale } from '$lib/i18n';
  import { derived } from 'svelte/store';
  import LanguageToggle from '$lib/components/ui/LanguageToggle.svelte';

  const navLinks = [
     { key: 'story', href: '/story' },
     { key: 'iteration', href: '/iteration' },
     { key: 'details', href: '/details' },
     { key: 'edition', href: '/edition-01' },
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled.set(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // typed derived alias for template use (avoids TS index signature complaints)
  const translations = derived(tr, ($t) => $t as any);

  function toggleMenu() {
    mobileMenuOpen.update((v: boolean) => !v);
  }
  function closeMenu() {
    mobileMenuOpen.set(false);
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-soiree-border { $scrolled ? 'bg-soiree-dark/95 backdrop-blur-sm' : 'bg-soiree-dark' }"
>
  <div class="max-w-350 mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
    <!-- Logo -->
    <a
      href="/"
      class="font-display font-light tracking-[0.12em] text-sm text-soiree-cream hover:text-soiree-tan transition-colors duration-300 z-50"
      onclick={closeMenu}
    >
        {$translations.nav.logo}
    </a>

    <!-- Desktop Nav -->
    <div class="hidden lg:flex items-center gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-item font-body uppercase text-label-sm text-soiree-warm hover:text-soiree-cream transition-colors duration-300 relative"
          class:!text-soiree-cream={$page.url.pathname === link.href}
        >
            {$translations.nav[link.key]}
        </a>
      {/each}
        <!-- Language toggle -->
        <div class="ml-4 flex items-center">
          <LanguageToggle />
        </div>
    </div>

    <!-- Desktop CTA -->
    <div class="hidden lg:block">
      <a
        href="/reserve"
        class="group relative overflow-hidden border border-soiree-cream/60 px-5 py-2 flex items-center gap-2 hover:border-soiree-tan transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-cream transition-transform duration-300 group-hover:-translate-x-1">
          {$translations.nav.reserve}
        </span>
        <span class="text-soiree-cream transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
      </a>
    </div>

    <!-- Hamburger -->
    <button
      class="lg:hidden text-soiree-cream z-50 p-2"
      onclick={toggleMenu}
      aria-label={$translations.nav.toggle_menu}
    >
      {#if $mobileMenuOpen}
        <X size={20} />
      {:else}
        <Menu size={20} />
      {/if}
    </button>
  </div>
</nav>

<!-- Mobile Drawer -->
<div
  class="mobile-drawer fixed inset-0 z-40 bg-soiree-dark flex flex-col items-center justify-center lg:hidden"
  class:open={$mobileMenuOpen}
  class:opacity-100={$mobileMenuOpen}
  class:pointer-events-auto={$mobileMenuOpen}
  class:opacity-0={!$mobileMenuOpen}
  class:pointer-events-none={!$mobileMenuOpen}
>
  <div class="flex flex-col items-center gap-8 w-full px-8">
    {#each navLinks as link}
        <a
        href={link.href}
        onclick={closeMenu}
        class="font-body uppercase text-label-sm text-soiree-warm hover:text-soiree-cream transition-colors duration-300 tracking-[0.12em]"
      >
            {$translations.nav[link.key]}
      </a>
    {/each}
    <div class="w-full max-w-xs border-t border-soiree-border pt-8 mt-2 flex justify-center">
      <a
        href="/reserve"
        onclick={closeMenu}
        class="group border border-soiree-cream/60 px-8 py-3 flex items-center gap-2"
      >
        <span class="font-body uppercase text-label-sm tracking-[0.12em] text-soiree-cream">{$translations.nav.reserve}</span>
        <span class="text-soiree-cream">→</span>
      </a>
    </div>
  </div>
</div>
