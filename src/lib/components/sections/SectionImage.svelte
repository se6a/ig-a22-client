<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
</script>

<div class="SECTION-IMAGE box">
    <Image {image} />
</div>

<style>
    .SECTION-IMAGE {
        position: relative;
        max-width: var(--content-maxWidth);
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
</style>
