<script>
    import "$lib/css/normalize.css";
    import "$lib/css/fonts.css";
    import "$lib/css/breakpoints.css";
    import "$lib/css/variables.css";
    import "$lib/css/style.css";
    import "$lib/css/flags.css";

    import {pageData} from "$lib/store";
    import Header from "$components/layout/Header.svelte";
    import Footer from "$components/layout/Footer.svelte";
    import Main from "$components/layout/Main.svelte";

    export let data = {};
</script>

<svelte:head>
    <title>{$pageData?.pageMetaTitle || $pageData?.pageTitle || "IG A22"}</title>
    <meta name="description" content={$pageData || ""} />
</svelte:head>

<div class="layout _site">
    <div class="layout _main">
        <Header {data} />
        <Main>
            <slot />
        </Main>
    </div>
    <div class="layout _footer">
        <Footer {data} />
    </div>
</div>

<style>
    .layout._site {
        overflow-x: hidden;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    .layout._main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .layout._footer {
        margin-top: auto;
    }
</style>
