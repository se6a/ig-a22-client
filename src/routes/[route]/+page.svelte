<script>
    import Sections from "$components/layout/Sections.svelte";
    export let data = {};

    const pageData = data?.pageData || {};
    const sections = pageData?.sections || [];
</script>

<Sections {sections} />
