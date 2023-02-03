<script>
    import Cta from "./Cta.svelte";
    export let portableText = [];
    const cta = portableText.value;
</script>

<p style="font-size: var(--font-size-s)">
    <slot />
</p>
