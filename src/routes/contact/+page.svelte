<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { AtSign, Link2, Mail } from 'lucide-svelte';
  import { lifestyle_coffee_scene } from '$lib/assets';

  let form = $state({ name: '', email: '', subject: '', message: '' });
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (form.name && form.email && form.message) submitted = true;
  }

  const inputClass = "w-full bg-transparent border border-[#2e2416] px-4 py-3 font-body text-sm text-[#f2ede4] placeholder:text-[#6b5c46] focus:outline-none focus:border-[#c4a882] focus:shadow-[0_0_0_1px_#c4a882] transition-all duration-300";
</script>

<svelte:head>
  <title>Contact — SOIRÉE SUTTON No.01</title>
  <meta name="description" content="Get in touch with SOIRÉE. Questions, feedback, or just to say hello." />
</svelte:head>

<div style="background-color: #0d0b08; padding-top: 6rem;" class="py-24 min-h-screen">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-16 items-center mb-16">
      <div use:reveal>
        <p class="font-body uppercase text-label-xs text-[#6b5c46] tracking-[0.2em] mb-4">CONTACT</p>
        <h1 class="font-display text-display-lg text-[#f2ede4] font-light italic leading-tight mb-6">
          We'd love to<br/>hear from you.
        </h1>
        <p class="font-body text-sm text-[#a08d74] leading-relaxed max-w-xl">
          Whether it's a question, feedback, or just to say hi — we're here.
        </p>
      </div>
      <div use:reveal={{ delay: 0.15 }} class="overflow-hidden aspect-[4/5] rounded-none border border-[#2e2416]">
        <img
          src={lifestyle_coffee_scene}
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
            <AtSign size={18} class="text-[#c4a882]" />
            <span class="font-body text-sm text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 nav-item">
              @soiree.studio
            </span>
          </a>
          <a href="https://pinterest.com/soiree.studio" target="_blank" rel="noreferrer" class="flex items-center gap-4 group">
            <Link2 size={18} class="text-[#c4a882]" />
            <span class="font-body text-sm text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 nav-item">
              Pinterest
            </span>
          </a>
          <a href="mailto:hello@soiree.studio" class="flex items-center gap-4 group">
            <Mail size={18} class="text-[#c4a882]" />
            <span class="font-body text-sm text-[#a08d74] group-hover:text-[#f2ede4] transition-colors duration-300 nav-item">
              hello@soiree.studio
            </span>
          </a>
        </div>
      </div>

      <!-- Right: contact form -->
      <div use:reveal={{ delay: 0.15 }}>
        {#if submitted}
          <div style="border: 1px solid #2e2416; background-color: #1c1710;" class="p-12 text-center">
            <p class="font-display text-[1.5rem] text-[#c4a882] font-light italic mb-4">Thank you.</p>
            <p class="font-body text-sm text-[#a08d74]">We'll be in touch shortly.</p>
          </div>
        {:else}
          <form class="flex flex-col gap-4" onsubmit={handleSubmit}>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-name" class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase mb-2 block">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  bind:value={form.name}
                  placeholder="Your name"
                  class={inputClass}
                />
              </div>
              <div>
                <label for="contact-email" class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase mb-2 block">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  bind:value={form.email}
                  placeholder="your@email.com"
                  class={inputClass}
                />
              </div>
            </div>
            <div>
              <label for="contact-subject" class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase mb-2 block">Subject</label>
              <input
                type="text"
                id="contact-subject"
                bind:value={form.subject}
                placeholder="What's this about?"
                class={inputClass}
              />
            </div>
            <div>
              <label for="contact-message" class="font-body text-label-xs text-[#6b5c46] tracking-widest uppercase mb-2 block">Message</label>
              <textarea
                id="contact-message"
                bind:value={form.message}
                placeholder="Your message..."
                rows={6}
                class="{inputClass} resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full font-body uppercase text-label-sm tracking-widest bg-[#c8a96e] text-[#0d0b08] px-6 py-4 hover:bg-[#c4a882] transition-colors duration-300 mt-2"
            >
              SEND MESSAGE
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</div>
