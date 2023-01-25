<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
    const src = image?.src || "";
</script>

<div class="SECTION-IMAGE box">
    <Image {image} />
</div>

<style>
    .SECTION-IMAGE {
        position: relative;
        max-width: var(--content-maxWidth);
        margin-right: auto;
        margin-left: auto;
    }
</style>
