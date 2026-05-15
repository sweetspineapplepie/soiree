<script lang="ts">
  let { placeholder = 'Your email address', id = 'email', name = 'email', value = $bindable('') } = $props();
</script>

<input
  type="email"
  {id}
  {name}
  bind:value
  {placeholder}
  class="flex-1 bg-transparent border border-[#2e2416] px-4 py-3 font-body text-sm text-[#f2ede4] placeholder:text-[#6b5c46] focus:outline-none focus:border-[#c4a882] focus:shadow-[0_0_0_1px_#c4a882] transition-all duration-300"
/>
