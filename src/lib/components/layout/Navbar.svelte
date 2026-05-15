<script lang="ts">
  import { page } from '$app/stores';
  import { mobileMenuOpen, scrolled } from '$lib/stores/navigation';
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

  const navLinks = [
    { label: 'THE STORY', href: '/story' },
    { label: 'ITERATION', href: '/iteration' },
    { label: 'DETAILS', href: '/details' },
    { label: 'EDITION 01', href: '/edition-01' },
  ];

  onMount(() => {
    const handleScroll = () => {
      scrolled.set(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMenu() {
    mobileMenuOpen.update(v => !v);
  }
  function closeMenu() {
    mobileMenuOpen.set(false);
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
  class:backdrop-blur-sm={$scrolled}
  style="background-color: {$scrolled ? 'rgba(20,16,8,0.95)' : '#141008'}; border-bottom: 1px solid #2e2416;"
>
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
    <!-- Logo -->
    <a
      href="/"
      class="font-display font-light tracking-[0.25em] text-sm text-[#f2ede4] hover:text-[#c4a882] transition-colors duration-300 z-50"
      onclick={closeMenu}
    >
      SOIRÉE
    </a>

    <!-- Desktop Nav -->
    <div class="hidden lg:flex items-center gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-item font-body uppercase text-label-sm text-[#a08d74] hover:text-[#f2ede4] transition-colors duration-300 relative"
          class:!text-[#f2ede4]={$page.url.pathname === link.href}
        >
          {link.label}
        </a>
      {/each}
    </div>

    <!-- Desktop CTA -->
    <div class="hidden lg:block">
      <a
        href="/reserve"
        class="group relative overflow-hidden border border-[rgba(242,237,228,0.6)] px-5 py-2 flex items-center gap-2 hover:border-[#c4a882] transition-colors duration-300"
      >
        <span class="font-body uppercase text-label-sm tracking-widest text-[#f2ede4] transition-transform duration-300 group-hover:-translate-x-1">
          RESERVE ACCESS
        </span>
        <span class="text-[#f2ede4] transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
      </a>
    </div>

    <!-- Hamburger -->
    <button
      class="lg:hidden text-[#f2ede4] z-50 p-2"
      onclick={toggleMenu}
      aria-label="Toggle menu"
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
  class="mobile-drawer fixed inset-0 z-40 bg-[#141008] flex flex-col items-center justify-center lg:hidden"
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
        class="font-body uppercase text-label-sm text-[#a08d74] hover:text-[#f2ede4] transition-colors duration-300 tracking-widest"
      >
        {link.label}
      </a>
    {/each}
    <div class="w-full max-w-xs border-t border-[#2e2416] pt-8 mt-2 flex justify-center">
      <a
        href="/reserve"
        onclick={closeMenu}
        class="group border border-[rgba(242,237,228,0.6)] px-8 py-3 flex items-center gap-2"
      >
        <span class="font-body uppercase text-label-sm tracking-widest text-[#f2ede4]">RESERVE ACCESS</span>
        <span class="text-[#f2ede4]">→</span>
      </a>
    </div>
  </div>
</div>
