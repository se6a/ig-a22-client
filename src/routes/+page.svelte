<script>
    import Sections from "$components/layout/Sections.svelte";
    import TitleImage from "$components/sections/SectionTitleImage.svelte";
    import Text from "$components/sections/SectionText.svelte";
    import Image from "$components/sections/SectionImage.svelte";
    import GalleryGrid from "$components/sections/SectionGalleryGrid.svelte";
    import GallerySlide from "$components/sections/SectionGallerySlide.svelte";
    import Youtube from "$components/sections/SectionYoutube.svelte";
</script>

<Sections>
    <TitleImage />
    <Text />
    <Youtube />
    <GalleryGrid />
    <GallerySlide />
    <Image />
</Sections>
