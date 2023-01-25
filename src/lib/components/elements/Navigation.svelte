<script>
    import Item from "$components/elements/NavigationItem.svelte";
    import IconMenu from "$components/icons/IconMenu.svelte";

    const navigation = [
        {
            pageTitle: "Blog",
            route: "",
            subItems: []
        },
        {
            pageTitle: "Argumente",
            route: "",
            subItems: []
        },
        {
            pageTitle: "Über uns",
            route: "",
            subItems: []
        },
        {
            pageTitle: "Kontakt",
            route: "",
            subItems: []
        }
    ];

    $: showMobile = false;
</script>

<nav class="NAVIGATION">
    <input
        class="toggle forMenu ifMobile"
        bind:checked={showMobile}
        type="checkbox"
        name="mobileMenuToggle"
        id="s345sfsfw"
    />
    <label class="label forMenu ifMobile" for="s345sfsfw">
        <IconMenu isOpen={showMobile} />
    </label>

    <ul class="items">
        {#each navigation as item}
            <Item {item} />
        {/each}
    </ul>
</nav>

<style>
    @import "$lib/css/breakpoints.css";

    .NAVIGATION {
        position: relative;
        display: flex;
        text-transform: uppercase;
        margin-left: auto;
        font-size: min(var(--fontSize-m), 1.8vw);
    }

    /*
  ###############################################################################################*/

    @media (--vw-above-m) {
        .ifMobile {
            display: none !important;
        }

        .items {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }

    /*
  ###############################################################################################*/

    @media (--vw-m) {
        .NAVIGATION {
            font-size: inherit;
        }

        .toggle.ifMobile {
            visibility: hidden;
            height: 0;
            width: 0;
            position: absolute;
        }

        .label.forMenu.ifMobile {
            width: 1.5rem;
            height: 1.5rem;
            display: block;
            --icon-strokeWidth: 2px;
            --icon-color: var(--color-front);
        }

        .items {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;

            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            bottom: 0;
            padding: var(--space-main);
            visibility: hidden;
            pointer-events: none;
            user-select: none;
            opacity: 0;
            transition: opacity var(--duration-middle), visibility 1ms var(--duration-middle);
            color: var(--color-front);
            background-color: var(--color-back);
        }

        /* interactivity
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        .toggle.forMenu:checked ~ .label ~ .items {
            visibility: visible;
            pointer-events: all;
            opacity: 1;
            transition: opacity var(--duration-middle), visibility 0ms;
        }

        /* Colors
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        .items {
            --color-front: white;
            --color-front-isFocus: var(--color-orange);
            --color-front-isCurrent: var(--color-orange);
            --color-back: var(--color-green);
        }
    }
</style>
