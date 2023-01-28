<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const images = section.images || [];

    let crntImageIndx = 0;
    $: if (crntImageIndx > images.length - 1) crntImageIndx = 0;
    $: if (crntImageIndx < 0) crntImageIndx = images.length - 1;
</script>

<div class="SECTION-GALLERY-SLIDE section" class:hasNavigation={images.length > 1}>
    <button class="button prev" aria-label="Zeige letztes Bild" on:click={() => crntImageIndx--} />

    <div class="images">
        {#each images as image, i}
            <div class="imageWrapper" class:isCurrent={crntImageIndx === i}>
                <Image {image} objectFit="cover" />
            </div>
        {/each}
    </div>

    <button class="button next" aria-label="Zeige nächstes Bild" on:click={() => crntImageIndx++} />

    <div class="imageNumber">
        <div class="digit">
            {crntImageIndx + 1}
        </div>
        /
        <div class="digit">
            {images.length}
        </div>
    </div>
</div>

<style>
    .SECTION-GALLERY-SLIDE {
        --galleryButton-size: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: calc(var(--content-maxWidth) + var(--galleryButton-size) * 2);
    }

    /*  NAVIGATION
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .button {
        display: none;
        position: absolute;
        width: var(--galleryButton-size);
        height: var(--galleryButton-size);
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .hasNavigation .button {
        display: block;
    }

    .button:after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        display: block;
        top: 0;
        border-left: 2px solid currentColor;
        border-top: 2px solid currentColor;
    }

    .button.prev {
        left: var(--space-m);
    }

    .button.next {
        right: var(--space-m);
    }

    .button.prev::after {
        transform: rotate(-45deg);
    }

    .button.next::after {
        transform: rotate(135deg);
    }

    .imageNumber {
        margin-top: var(--space-1);
        display: flex;
        justify-content: center;
    }

    .imageNumber .digit {
        min-width: 3ch;
        text-align: center;
    }

    /*  IMAGES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .images {
        height: 60vh;
        width: calc(100% - var(--galleryButton-size) * 2);
        overflow: hidden;
        position: relative;
        margin: auto;
    }

    .imageWrapper {
        height: 100%;
        width: 100%;
        display: none;
    }

    .imageWrapper.isCurrent {
        display: block;
    }
</style>
