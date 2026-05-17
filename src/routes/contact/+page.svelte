<script lang="ts">
  import Seo from '$lib/seo/Seo.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { AtSign, Link2, Mail } from 'lucide-svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { lifestyle_coffee_scene } from '$lib/assets';
  import { tr } from '$lib/i18n';

  let form = $state({ name: '', email: '', subject: '', message: '' });
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (form.name && form.email && form.message) submitted = true;
  }

  const inputClass = "w-full bg-transparent border border-soiree-border px-4 py-3 font-body text-sm text-soiree-cream placeholder:text-soiree-dimmed focus:outline-none focus:border-soiree-tan focus:ring-1 focus:ring-soiree-tan transition-all duration-300";
</script>


<Seo
  title={$tr.pages.contact.page_title}
  description={$tr.pages.contact.page_description}
  schemas={[{ type: 'Organization' }]}
/>


<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24 min-h-screen">
  <div class="max-w-350 mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center mb-16">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-soiree-dimmed tracking-[0.12em] mb-4">{$tr.pages.contact.title}</p>
        <h1 class="font-display text-display-lg text-soiree-cream font-light italic leading-tight mb-6">
          {$tr.pages.contact.heading}
        </h1>
        <p class="font-body text-sm text-soiree-warm leading-7 max-w-xl">
          {$tr.pages.contact.description}
        </p>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-4/5 rounded-none border border-soiree-border">
        <img loading="lazy" decoding="async"           src={lifestyle_coffee_scene}
          alt="Sutton bag lifestyle coffee scene"
          class="product-img w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left -->
      <div>
        <div use:reveal={{ delay: 0.2 }} class="flex flex-col gap-5">
          <a href="https://instagram.com/soiree.studio" target="_blank" rel="noreferrer" class="flex items-center gap-4 group">
            <AtSign size={18} class="text-soiree-tan" />
            <span class="font-body text-sm text-soiree-warm group-hover:text-soiree-cream transition-colors duration-300 nav-item">
              @soiree.studio
            </span>
          </a>
          <a href="https://pinterest.com/soiree.studio" target="_blank" rel="noreferrer" class="flex items-center gap-4 group">
            <Link2 size={18} class="text-soiree-tan" />
            <span class="font-body text-sm text-soiree-warm group-hover:text-soiree-cream transition-colors duration-300 nav-item">
              Pinterest
            </span>
          </a>
          <a href="mailto:hello@soiree.studio" class="flex items-center gap-4 group">
            <Mail size={18} class="text-soiree-tan" />
            <span class="font-body text-sm text-soiree-warm group-hover:text-soiree-cream transition-colors duration-300 nav-item">
              hello@soiree.studio
            </span>
          </a>
        </div>
      </div>

      <!-- Right: contact form -->
      <div use:reveal={{ delay: 0.15 }}>
        {#if submitted}
          <div style="border: 1px solid #2e2416; background-color: #1c1710;" class="p-12 text-center">
            <p class="font-display text-2xl text-soiree-tan font-light italic mb-4">{$tr.pages.contact.submitted_title}</p>
            <p class="font-body text-sm text-soiree-warm">{$tr.pages.contact.submitted_desc}</p>
          </div>
        {:else}
          <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-name" class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase mb-2 block">{$tr.pages.contact.label_name}</label>
                <input
                  type="text"
                  id="contact-name"
                  bind:value={form.name}
                  placeholder={$tr.pages.contact.placeholder_name}
                  class={inputClass}
                />
              </div>
              <div>
                <label for="contact-email" class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase mb-2 block">{$tr.pages.contact.label_email}</label>
                <input
                  type="email"
                  id="contact-email"
                  bind:value={form.email}
                  placeholder={$tr.pages.contact.placeholder_email}
                  class={inputClass}
                />
              </div>
            </div>
            <div>
              <label for="contact-subject" class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase mb-2 block">{$tr.pages.contact.label_subject}</label>
              <input
                type="text"
                id="contact-subject"
                bind:value={form.subject}
                placeholder={$tr.pages.contact.placeholder_subject}
                class={inputClass}
              />
            </div>
            <div>
              <label for="contact-message" class="font-body text-label-xs text-soiree-dimmed tracking-[0.12em] uppercase mb-2 block">{$tr.pages.contact.label_message}</label>
              <textarea
                id="contact-message"
                bind:value={form.message}
                placeholder={$tr.pages.contact.placeholder_message}
                rows={6}
                class="{inputClass} resize-none"
              ></textarea>
            </div>
            <Button type="submit" variant="gold" class="mt-2">
              {$tr.pages.contact.send_button}
            </Button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
