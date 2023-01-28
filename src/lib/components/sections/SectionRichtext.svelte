<script>
    import Blocks from "../elements/Blocks.svelte";

    export let section = {};
    const blocks = section?.blocks || [];
</script>

<div class="SECTION-TEXT section">
    <Blocks {blocks} />
</div>

<style>
</style>
