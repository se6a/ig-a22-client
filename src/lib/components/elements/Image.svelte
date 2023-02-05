<script>
    export let image = {};
    export let objectPosition = "50% 50%";
    export let objectFit = "contain";
    import IconClose from "$lib/components/icons/IconClose.svelte";
    export let sizes = [400, 600, 800, 1400, 2000, 3000];
    export let allowFullscreen = true;

    const src = image?.src || "";
    const alt = image?.alt || "";
    const caption = image?.caption || "";

    const srcset = sizes.map((size) => `${src}?w=${size} ${size}w`).join(",");

    let showFullscreen = false;

    function toggleFullscreen() {
        showFullscreen = !showFullscreen;
    }

    function maybeEvents(N) {
        if (!allowFullscreen) return;

        N.addEventListener("click", toggleFullscreen);
        N.addEventListener("keyup", toggleFullscreen);

        return {
            destroy: () => {
                N.removeEventListener("click", toggleFullscreen);
                N.removeEventListener("keyup", toggleFullscreen);
            }
        };
    }
</script>

<figure class="IMAGE" class:allowFullscreen>
    <picture use:maybeEvents>
        <source {srcset} />
        <img style:--objectPosition={objectPosition} style:--objectFit={objectFit} {src} {alt} />
    </picture>

    {#if caption}
        <figcaption>
            {caption}
        </figcaption>
    {/if}
</figure>

{#if showFullscreen}
    <div class="box fullscreen">
        <button class="buttonClose" on:click={() => (showFullscreen = false)}>
            <IconClose />
        </button>
        <figure class="IMAGE">
            <picture
                on:click={() => (showFullscreen = !showFullscreen)}
                on:keyup={() => (showFullscreen = !showFullscreen)}
            >
                <source {srcset} />
                <img
                    style:--objectPosition={objectPosition}
                    style:--objectFit={objectFit}
                    {src}
                    {alt}
                />
            </picture>
        </figure>
    </div>
{/if}

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

    .allowFullscreen img {
        cursor: pointer;
    }

    .fullscreen {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: hsla(0, 0%, 100%, 0.9);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .fullscreen .IMAGE {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }

    .buttonClose {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
        width: 3em;
        height: 3em;
        cursor: pointer;
        --icon-strokeWidth: 1.5px;
        --icon-color: black;
    }

    source {
        position: absolute;
        pointer-events: none;
    }

    .fullscreen img {
        max-height: 90vh;
        max-width: 90vw;
        object-position: 50% 50%;
        object-fit: contain;
        margin: auto;
    }
</style>
