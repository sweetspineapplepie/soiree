<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'motion';

  let { target, duration = 2, padded = 3 } = $props();

  let nodeRef: HTMLSpanElement;
  let triggered = false;
  const motionAnimate = animate as any;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          motionAnimate(
            (progress: number) => {
              if (nodeRef) {
                nodeRef.textContent = String(Math.round(progress * target)).padStart(padded, '0');
              }
            },
            { duration, easing: [0.25, 1, 0.5, 1] }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (nodeRef) observer.observe(nodeRef);
    return () => observer.disconnect();
  });
</script>

<span bind:this={nodeRef} class="tabular-nums">000</span>
