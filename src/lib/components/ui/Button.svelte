<script lang="ts">
  let { href, variant = 'outline', fullWidth = false, type = 'button', onclick, class: className = '', children } = $props();
</script>

{#if href}
  <a
    {href}
    class="group relative overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 text-label-sm font-body uppercase tracking-widest
      {variant === 'outline' ? 'border border-[rgba(242,237,228,0.6)] text-[#f2ede4] px-8 py-3 hover:border-[#c4a882]' : ''}
      {variant === 'gold' ? 'bg-[#c8a96e] text-[#0d0b08] px-8 py-3 hover:bg-[#c4a882]' : ''}
      {variant === 'ghost' ? 'border border-[#2e2416] text-[#a08d74] px-8 py-3 hover:border-[#c4a882] hover:text-[#f2ede4]' : ''}
      {fullWidth ? 'w-full' : ''}
      {className}"
  >
    {@render children?.()}
    <span class="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
  </a>
{:else}
  <button
    type={type as 'button' | 'submit' | 'reset'}
    onclick={onclick}
    class="group relative overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 text-label-sm font-body uppercase tracking-widest
      {variant === 'outline' ? 'border border-[rgba(242,237,228,0.6)] text-[#f2ede4] px-8 py-3 hover:border-[#c4a882]' : ''}
      {variant === 'gold' ? 'bg-[#c8a96e] text-[#0d0b08] px-8 py-3 hover:bg-[#c4a882]' : ''}
      {variant === 'ghost' ? 'border border-[#2e2416] text-[#a08d74] px-8 py-3 hover:border-[#c4a882] hover:text-[#f2ede4]' : ''}
      {fullWidth ? 'w-full' : ''}
      {className}"
  >
    {@render children?.()}
    <span class="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
  </button>
{/if}
