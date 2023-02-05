<script>
    import Sections from "$components/layout/Sections.svelte";
    export let data = {};

    const pageData = data?.pageData || {};
    const sections = pageData?.sections || [];

    const date = pageData?.useDate
        ? new Date(pageData.useDate).toLocaleDateString()
        : pageData?.createdAt
        ? new Date(pageData.createdAt).toLocaleDateString()
        : "";
</script>

<article class="POST">
    <header class="head section">
        <p class="posted">
            {date}
        </p>

        <h1>
            {pageData?.title || ""}
        </h1>
    </header>
    <Sections {sections} />
</article>

<style>
    .POST {
        display: flex;
        flex-direction: column;
    }

    .head {
        display: flex;
        flex-direction: column;
        margin-top: var(--space-m);
    }
</style>
