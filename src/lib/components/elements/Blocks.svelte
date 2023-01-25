<script>
    import {PortableText} from "@portabletext/svelte";
    import cta from "$components/elements/BlockCta.svelte";

    export let blocks = [];

    const components = {
        types: {
            cta
        }
    };
</script>

<article class="BLOCKS">
    <PortableText value={blocks} {components} />
</article>

<style lang="postcss">
    .BLOCKS {
        max-width: var(--content-maxWidth);
        margin-right: auto;
        margin-left: auto;
    }

    .BLOCKS > :global(* + *) {
        margin-top: var(--space-quarter);
    }

    .BLOCKS > :global(* + h2) {
        margin-top: var(--space-2);
    }

    .BLOCKS > :global(h1 + h2) {
        margin-top: 0;
    }

    /* STYLES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    .BLOCKS :global(ul) {
        padding-left: 1em;
    }

    .BLOCKS :global(ul > li) {
        position: relative;
    }

    .BLOCKS :global(ul > li::before) {
        position: absolute;
        left: -1em;
        display: inline-block;
        content: "–";
    }

    .BLOCKS :global(strong) {
        font-weight: 600;
    }
</style>
