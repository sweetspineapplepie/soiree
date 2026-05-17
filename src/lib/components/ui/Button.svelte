<script lang="ts">
  let {
    href = undefined,
    variant = 'outline',
    fullWidth = false,
    type = 'button',
    onclick = undefined,
    target = undefined,
    rel = undefined,
    disabled = false,
    class: className = '',
    children,
  } = $props();

  const baseClasses =
    'group relative overflow-hidden inline-flex w-auto min-w-fit items-center justify-center gap-2 transition-all duration-300 text-label-sm font-body uppercase h-11';
</script>

{#if href}
  <a
    {href}
    target={target || undefined}
    rel={rel || (target === '_blank' ? 'noreferrer noopener' : undefined)}
    onclick={onclick}
    class={`${baseClasses} ${
      variant === 'gold'
        ? 'bg-soiree-gold text-soiree-black px-7 hover:bg-soiree-tan'
        : variant === 'ghost'
        ? 'border border-soiree-border text-soiree-warm px-7 hover:border-soiree-tan hover:text-soiree-cream'
        : 'border border-soiree-cream/60 text-soiree-cream px-7 hover:border-soiree-tan'
    } ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {@render children?.()}
    <span class="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
  </a>
{:else}
  <button
    type={type as 'button' | 'submit' | 'reset'}
    onclick={onclick}
    disabled={disabled}
    aria-disabled={disabled}
    class={`${baseClasses} ${
      variant === 'gold'
        ? 'bg-soiree-gold text-soiree-black px-7 hover:bg-soiree-tan'
        : variant === 'ghost'
        ? 'border border-soiree-border text-soiree-warm px-7 hover:border-soiree-tan hover:text-soiree-cream'
        : 'border border-soiree-cream/60 text-soiree-cream px-7 hover:border-soiree-tan'
    } ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    {@render children?.()}
    <span class="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
  </button>
{/if}
