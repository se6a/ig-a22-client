<script>
    import SectionTitleImage from "$components/sections/SectionTitleImage.svelte";
    import SectionRichtext from "$components/sections/SectionRichtext.svelte";
    import SectionImage from "$components/sections/SectionImage.svelte";
    import SectionGallery from "$components/sections/SectionGallery.svelte";
    import SectionYoutube from "$components/sections/SectionYoutube.svelte";
    import SectionCta from "$components/sections/SectionCta.svelte";

    import {capitalize} from "$lib/functions/utility.ts";

    export let sections = [];

    $: components = {
        SectionTitleImage,
        SectionRichtext,
        SectionImage,
        SectionGallery,
        SectionYoutube,
        SectionCta
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
    .SECTIONS > :global(* + *) {
        margin-top: var(--space-l);
    }
</style>
