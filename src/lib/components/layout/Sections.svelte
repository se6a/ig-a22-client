<script>
    import SectionTitleImage from "$components/sections/SectionTitleImage.svelte";
    import SectionRichtext from "$components/sections/SectionRichtext.svelte";
    import SectionImage from "$components/sections/SectionImage.svelte";
    import SectionGallery from "$components/sections/SectionGallery.svelte";
    import SectionYoutube from "$components/sections/SectionYoutube.svelte";
    import SectionCta from "$components/sections/SectionCta.svelte";
    import SectionSpace from "$components/sections/SectionSpace.svelte";
    import SectionPdfList from "$components/sections/SectionPdfList.svelte";
    import SectionPosts from "$components/sections/SectionPosts.svelte";
    import SectionFormSupport from "$components/sections/SectionFormSupport.svelte";

    import {capitalize} from "$lib/functions/utility.ts";

    export let sections = [];

    $: components = {
        SectionTitleImage,
        SectionRichtext,
        SectionImage,
        SectionGallery,
        SectionYoutube,
        SectionCta,
        SectionSpace,
        SectionPdfList,
        SectionPosts,
        SectionFormSupport
    };
</script>

<div class="SECTIONS">
    {#each sections.filter((section) => section?._type) as section}
        {@const _type = capitalize(section._type)}
        {#if _type in components}
            <svelte:component this={components[_type]} {section} />
        {:else}
            {console.error(`${_type} is not a section`) || ""}
        {/if}
    {/each}
    <slot />
</div>

<style>
    .SECTIONS {
        display: flex;
        flex-direction: column;
    }

    /* .SECTIONS > :global(* + *) {
        margin-top: var(--space-s);
    } */
</style>
