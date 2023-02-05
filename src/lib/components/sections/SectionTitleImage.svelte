<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
</script>

<div class="TITLE-IMAGE section isFullwidth">
    <Image {image} objectFit="cover" objectPosition="50% 65%" allowFullscreen={false} />
</div>

<style>
    .TITLE-IMAGE {
        height: var(--titleImage-height);
        position: relative;
        padding-right: 0;
        padding-left: 0;
        padding-top: 0;
        max-width: unset;
    }
</style>
