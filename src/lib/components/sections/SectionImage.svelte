<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
</script>

<div class="SECTION-IMAGE section">
    <Image {image} />
</div>

<style>
    .SECTION-IMAGE > :global(.IMAGE) {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        align-items: flex-start;
    }

    .SECTION-IMAGE :global(img) {
        width: auto !important;
    }
</style>
