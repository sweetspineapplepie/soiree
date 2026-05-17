<script lang="ts">
  import { page } from '$app/stores';
  import { locale } from '$lib/i18n';
  import { generateSchema, type SchemaType } from './schema';

  let {
    title = 'SOIRÉE — Limited handcrafted edition',
    description = 'SUTTON No.01 — Designed for everyday rituals. Limited to 500 pieces. Available through Shopee.',
    image = 'https://soiree-studio.com/images/hero/hero-main-desktop.jpg',
    url = undefined,
    type = 'website',
    schemas = [] as { type: SchemaType; data?: any }[],
    noindex = false,
  } = $props();

  let currentUrl = $derived(url || `https://soiree-studio.com${$page.url.pathname}`);
  let currentLocaleStr = $derived($locale === 'id' ? 'id_ID' : 'en_US');
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  
  <!-- Canonical and Language Alternates -->
  <link rel="canonical" href={currentUrl} />
  <link rel="alternate" hreflang="en" href={`https://soiree-studio.com${$page.url.pathname}`} />
  <link rel="alternate" hreflang="id" href={`https://soiree-studio.com/id${$page.url.pathname === '/' ? '' : $page.url.pathname}`} />
  <link rel="alternate" hreflang="x-default" href={`https://soiree-studio.com${$page.url.pathname}`} />

  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow" />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={currentUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content={currentLocaleStr} />
  <meta property="og:site_name" content="SOIRÉE Studio" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={currentUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- Structured Data -->
  {#each schemas as schemaInfo}
    {@html generateSchema(schemaInfo.type, schemaInfo.data)}
  {/each}
</svelte:head>
