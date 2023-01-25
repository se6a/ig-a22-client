<script>
    import Image from "$components/elements/Image.svelte";
</script>

<div class="TITLE-IMAGE">
    <Image src="/images/libelle.jpg" objectFit="cover" objectPosition="50% 65%" />
</div>

<style>
    .TITLE-IMAGE {
        height: var(--titleImage-height);
        position: relative;
    }
</style>
