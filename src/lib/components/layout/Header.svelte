<script>
    import Logo from "$components/fragments/Logo.svelte";
    import Navigation from "$components/elements/Navigation.svelte";

    export let data = {};
    const navigation = data?.navigation || {};
</script>

<header class="HEADER ">
    <div class="box useBg-fullwidth">
        <a href="/" class="logo">
            <Logo />
        </a>
        <Navigation {navigation} />
    </div>
</header>

<style>
    @import "$lib/css/breakpoints.css";

    .HEADER {
        height: var(--header-height);
        position: relative;
        z-index: 100;
        --bg: white;
    }

    .box {
        box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.15);
        position: fixed;
        display: flex;
        align-items: flex-end;
        width: 100%;
        right: 0;
        left: 0;
        padding-top: var(--space-s);
        padding-bottom: 1.5rem;
        height: var(--header-height);
        margin: auto;
        max-width: var(--page-maxWidth);
    }

    .logo {
        height: var(--logo-height);
    }

    @media (--vw-m) {
        .box {
            align-items: center;
        }
    }
</style>
