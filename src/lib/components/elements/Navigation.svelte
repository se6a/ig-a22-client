<script>
    import Item from "$components/elements/NavigationItem.svelte";
    import IconMenu from "$components/icons/IconMenu.svelte";

    export let navigation = {};

    const [_, ...main] = navigation?.main || [];
    const sub = navigation?.sub || [];

    const subOrdered = {};

    sub.forEach((page) => {
        if (page.parent in subOrdered === false) {
            subOrdered[page.parent] = [];
        }
        subOrdered[page.parent].push(page);
    });

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
        {#each main as item}
            <Item {item} subItems={subOrdered?.[item.slug] || []} />
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
            width: 3rem;
            height: 3rem;
            display: block;
            --icon-strokeWidth: 1.5px;
            --icon-color: black;
        }

        .items {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-bottom: 40%;
            position: fixed;
            top: calc(var(--header-height) - var(--space-m));
            left: 0;
            right: 0;
            bottom: 0;
            visibility: hidden;
            pointer-events: none;
            user-select: none;
            opacity: 0;
            transition: opacity var(--duration-middle), visibility 1ms var(--duration-middle);
            background-color: white;
        }

        /* interactivity
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        .toggle.forMenu:checked ~ .label ~ .items {
            visibility: visible;
            pointer-events: all;
            opacity: 1;
            transition: opacity var(--duration-middle), visibility 0ms;
        }
    }
</style>
