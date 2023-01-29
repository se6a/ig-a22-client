<script>
    import {pageData as pd} from "$lib/store";
    import Sections from "$components/layout/Sections.svelte";
    export let data = {};

    $: pageData = data?.pageData || {};
    $: sections = pageData?.sections || [];

    $: $pd = pageData;
</script>

{#key sections}
    <Sections {sections} />
{/key}
