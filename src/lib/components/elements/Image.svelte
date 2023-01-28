<script>
    export let image = {};
    export let objectPosition = "50% 50%";
    export let objectFit = "contain";

    const src = image?.src || "";
    const alt = image?.alt || "";
    const caption = image?.caption || "";
</script>

<figure class="IMAGE">
    <picture>
        <img style:--objectPosition={objectPosition} style:--objectFit={objectFit} {src} {alt} />
    </picture>

    {#if caption}
        <figcaption>
            {caption}
        </figcaption>
    {/if}
</figure>

<style>
    .IMAGE {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .IMAGE * {
        height: inherit;
        width: inherit;
    }

    figcaption {
        margin-top: 0.4em;
        font-size: var(--font-size-s);
    }

    img {
        max-height: 70vh;
        object-position: var(--objectPosition);
        object-fit: var(--objectFit);
    }
</style>
