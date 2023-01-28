<script>
    import Blocks from "../elements/Blocks.svelte";

    export let section = {};
    const blocks = section?.blocks || [];
</script>

<div class="SECTION-TEXT box">
    <Blocks {blocks} />
</div>

<style>
    .SECTION-TEXT {
        max-width: var(--content-maxWidth);
        margin-left: auto;
        margin-right: auto;
    }
</style>
