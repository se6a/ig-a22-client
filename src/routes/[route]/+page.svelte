<script>
    import Sections from "$components/layout/Sections.svelte";
    export let data = {};

    $: pageData = data?.pageData || {};
    $: sections = pageData?.sections || [];
</script>

{#key sections}
    <Sections {sections} />
{/key}
