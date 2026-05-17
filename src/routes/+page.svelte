<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import TheStory from '$lib/components/sections/TheStory.svelte';
  import FeaturesBar from '$lib/components/sections/FeaturesBar.svelte';
  import FormFollowsPurpose from '$lib/components/sections/FormFollowsPurpose.svelte';
  import EditionCounter from '$lib/components/sections/EditionCounter.svelte';
  import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
  import ReserveAccess from '$lib/components/sections/ReserveAccess.svelte';
  import { tr } from '$lib/i18n';
</script>

<svelte:head>
  <title>{$tr.pages.home_title}</title>
  <meta name="description" content={$tr.pages.home_meta} />
</svelte:head>

<Hero />
<FeaturesBar />
<TheStory />
<FormFollowsPurpose />
<EditionCounter />
<ProcessTimeline />
<ReserveAccess />
