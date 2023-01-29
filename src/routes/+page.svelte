<script>
    import {pageData as pd} from "$lib/store";
    import Sections from "$components/layout/Sections.svelte";
    export let data = {};

    const pageData = data?.pageData || {};
    const sections = pageData?.sections || [];

    $: $pd = pageData;
</script>

<Sections {sections} />
