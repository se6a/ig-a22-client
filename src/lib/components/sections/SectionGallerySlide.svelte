<script>
    import Image from "../elements/Image.svelte";

    const images = [
        {src: "/images/img1.jpg"},
        {src: "/images/img2.jpg"},
        {src: "/images/img3.jpg"},
        {src: "/images/img4.jpg"},
        {src: "/images/img5.jpg"},
        {src: "/images/img6.jpg"},
        {src: "/images/img7.jpg"}
    ];

    let crntImageIndx = 0;
    $: if (crntImageIndx > images.length - 1) crntImageIndx = 0;
    $: if (crntImageIndx < 0) crntImageIndx = images.length - 1;
</script>

<div class="SECTION-GALLERY-SLIDE box" class:hasNavigation={images.length > 1}>
    <button class="button prev" aria-label="Zeige letztes Bild" on:click={() => crntImageIndx--} />

    <div class="images">
        {#each images as image, i}
            <div class="imageWrapper" class:isCurrent={crntImageIndx === i}>
                <Image src={image.src} objectFit="cover" />
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
        position: relative;
        max-width: var(--content-maxWidth);
        margin-right: auto;
        margin-left: auto;
        --galleryButton-size: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        left: calc((var(--galleryButton-size) + var(--space-m)) * -1);
    }

    .button.next {
        right: calc((var(--galleryButton-size) + var(--space-m)) * -1);
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
        overflow: hidden;
        position: relative;
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
