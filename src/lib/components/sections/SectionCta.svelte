<script>
    import Cta from "../elements/Cta.svelte";

    export let section = {};

    const cta = section?.cta || {};
</script>

<div class="SECTION-CTA">
    <Cta {cta} />
</div>
