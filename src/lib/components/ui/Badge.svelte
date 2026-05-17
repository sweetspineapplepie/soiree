<script lang="ts">
  import { tr } from '$lib/i18n';
  let { label = '', class: className = '' } = $props();
</script>

<span
  class="inline-block border border-soiree-border text-label-xs font-body uppercase tracking-[0.12em] text-soiree-tan px-3 py-1 {className}"
>
  {label || $tr.pages.home.edition.label}
</span>
