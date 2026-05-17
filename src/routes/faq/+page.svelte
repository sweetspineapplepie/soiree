<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import FAQ from '$lib/components/sections/FAQ.svelte';
  import { tr } from '$lib/i18n';
</script>

<Seo
  title="FAQ — SOIRÉE SUTTON No.01"
  description="Frequently asked questions about SUTTON No.01 — materials, shipping, returns, and more."
  schemas={[{ type: 'FAQPage' }]}
/>

<div class="pt-16">
  <FAQ />
</div>
