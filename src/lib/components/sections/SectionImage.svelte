<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const image = section?.image || {};
</script>

<div class="SECTION-IMAGE section">
    <Image {image} />
</div>

<style>
</style>
