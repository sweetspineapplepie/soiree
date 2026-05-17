<script lang="ts">
  import { locale, setLocale } from '$lib/i18n';
  import { browser } from '$app/environment';

  // Always render with 'en' initially to match SSR, then update on mount
  let currentLocale = $state('en');

  $effect(() => {
    if (browser && $locale) {
      currentLocale = $locale;
    }
  });

  function toggle() {
    const next = currentLocale === 'en' ? 'id' : 'en';
    setLocale(next);
  }
</script>

<button
  type="button"
  role="switch"
  aria-checked={currentLocale === 'id'}
  onclick={toggle}
  class="group relative flex h-7 w-14 items-center rounded-full bg-soiree-surface p-[3px] transition-colors border border-soiree-border hover:border-soiree-tan focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-soiree-tan shrink-0"
>
  <span class="sr-only">Toggle language</span>
  
  <!-- track indicators -->
  <div class="absolute inset-0 flex justify-between px-2 items-center pointer-events-none text-[9px] font-medium tracking-[0.12em] text-soiree-muted">
    <span class="transition-colors duration-300 {currentLocale === 'id' ? 'text-soiree-warm' : ''}">EN</span>
    <span class="transition-colors duration-300 {currentLocale === 'en' ? 'text-soiree-warm' : ''}">ID</span>
  </div>

  <!-- thumb -->
  <div
    class="relative z-10 flex h-full w-6 items-center justify-center rounded-full bg-soiree-tan shadow-sm transition-transform duration-500 cubic-bezier-[0.25,1,0.5,1]"
    style="transform: translateX({currentLocale === 'en' ? '0' : '24px'});"
  >
    <span class="text-[9px] font-bold text-soiree-black">
      {currentLocale.toUpperCase()}
    </span>
  </div>
</button>
