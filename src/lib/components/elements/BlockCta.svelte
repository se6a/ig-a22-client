<script>
    import Cta from "./Cta.svelte";

    export let portableText = [];
    const cta = portableText.value;

    console.log("CCC TTT AAA", cta);
</script>

<Cta {cta} />
