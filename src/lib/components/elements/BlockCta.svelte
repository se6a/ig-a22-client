<script>
    import Cta from "./Cta.svelte";

    export let portableText = [];
    const cta = portableText.value;
</script>

<Cta {cta} />
