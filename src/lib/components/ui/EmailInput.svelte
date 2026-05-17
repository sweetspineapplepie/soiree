<script lang="ts">
  import { tr } from '$lib/i18n';
  let {
    type = 'email',
    placeholder = '',
    id = 'email',
    name = 'email',
    value = $bindable(''),
    class: className = '',
  } = $props();
</script>

<input
  {type}
  {id}
  {name}
  bind:value
  placeholder={placeholder || $tr.pages.reserve.email_placeholder}
  aria-label={placeholder || $tr.pages.reserve.email_placeholder}
  autocomplete="email"
  class="flex-1 bg-transparent border border-soiree-border px-4 py-3 font-body text-sm text-soiree-cream placeholder:text-soiree-dimmed focus:outline-none focus:border-soiree-tan focus:ring-1 focus:ring-soiree-tan transition-all duration-300 {className}"
/>
