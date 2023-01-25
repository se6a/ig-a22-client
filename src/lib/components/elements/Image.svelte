<script>
    export let src = "";
    export let alt = "";
    export let objectPosition = "50% 50%";
    export let objectFit = "contain";
</script>

<figure class="IMAGE">
    <picture>
        <img style:--objectPosition={objectPosition} style:--objectFit={objectFit} {src} {alt} />
    </picture>
</figure>

<style>
    .IMAGE,
    img {
        height: 100%;
        width: 100%;
    }

    img {
        object-position: var(--objectPosition);
        object-fit: var(--objectFit);
    }
</style>
