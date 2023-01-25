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
</script>

<div class="SECTION-GALLERY-GRID box" class:hasNavigation={images.length > 1}>
    <div class="images">
        {#each images as image}
            <div class="imageWrapper _outer">
                <div class="pushHeight" />
                <div class="imageWrapper _inner">
                    <Image src={image.src} objectFit="cover" />
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .SECTION-GALLERY-GRID {
        position: relative;
        max-width: var(--content-wide-maxWidth);
        margin-right: auto;
        margin-left: auto;
        --widthHeightRatio: 0.75;
    }

    /*  IMAGES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .images {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-m);
    }

    .imageWrapper._outer {
        position: relative;
    }

    .pushHeight {
        margin-top: calc(100% * var(--widthHeightRatio));
    }

    .imageWrapper._inner {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
