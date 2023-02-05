<script>
    import Image from "../elements/Image.svelte";

    export let section = {};

    const images = section.images || [];
</script>

<div class="SECTION-GALLERY-GRID section isFullwidth" class:hasNavigation={images.length > 1}>
    <div class="images">
        {#each images as image}
            <div class="imageWrapper _outer">
                <div class="pushHeight" />
                <div class="imageWrapper _inner">
                    <Image {image} objectFit="cover" />
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    @import "$lib/css/breakpoints.css";

    .SECTION-GALLERY-GRID {
        --widthHeightRatio: 0.75;
    }

    /*  IMAGES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .images {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 1fr;
        justify-content: center;
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

    @media (--vw-m) {
        .images {
            gap: 2vw;
        }
    }
</style>
