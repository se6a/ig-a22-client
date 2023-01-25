<script>
    import SectionGallerySlide from "$components/sections/SectionGallerySlide.svelte";
    import SectionGalleryGrid from "$components/sections/SectionGalleryGrid.svelte";

    export let section = {};
</script>

{#if section.type === "grid"}
    <SectionGalleryGrid {section} />
{:else}
    <SectionGallerySlide {section} />
{/if}
