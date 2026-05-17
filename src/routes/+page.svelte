<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import FeaturesBar from '$lib/components/sections/FeaturesBar.svelte';
  import TheStory from '$lib/components/sections/TheStory.svelte';
  import FormFollowsPurpose from '$lib/components/sections/FormFollowsPurpose.svelte';
  import ProcessTimeline from '$lib/components/sections/ProcessTimeline.svelte';
  import EditionCounter from '$lib/components/sections/EditionCounter.svelte';
  import AvailableOnShopee from '$lib/components/sections/AvailableOnShopee.svelte';
  import ShippingAvailability from '$lib/components/sections/ShippingAvailability.svelte';
  import ReserveAccess from '$lib/components/sections/ReserveAccess.svelte';
  import FAQ from '$lib/components/sections/FAQ.svelte';
  import { tr } from '$lib/i18n';
</script>

<Seo
  title={$tr.pages.home_title}
  description={$tr.pages.home_meta}
  schemas={[{ type: 'WebSite' }]}
/>

<Hero />
<FeaturesBar />
<TheStory />
<FormFollowsPurpose />
<ProcessTimeline />
<EditionCounter />
<AvailableOnShopee />
<ShippingAvailability />
<ReserveAccess />
<FAQ />
