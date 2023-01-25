<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
    const src = image?.src || "";
</script>

<div class="TITLE-IMAGE">
    <Image {image} objectFit="cover" objectPosition="50% 65%" />
</div>

<style>
    .TITLE-IMAGE {
        height: var(--titleImage-height);
        position: relative;
    }
</style>
