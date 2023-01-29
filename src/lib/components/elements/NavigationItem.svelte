<script>
    import {pageData} from "$lib/store";
    import {createId} from "$lib/functions/utility.ts";
    import {getContext} from "svelte";

    export let item = {};
    export let subItems = [];

    export let showMobile = getContext("showMobile");

    $: console.log("nav", $pageData.slug);

    const inputId = createId();
    const pageTitle = item?.pageTitle || "";
    const route = item?.slug || "";
</script>

{#if pageTitle}
    <li
        class="NAV-ITEM"
        class:hasSubItems={subItems.length}
        class:isCurrent={route === $pageData.slug ||
            subItems.filter((subItem) => subItem.slug === $pageData.slug).length > 0}
    >
        <a class="label link forItem" on:click={() => ($showMobile = false)} href="/{route}">
            {pageTitle}
        </a>

        {#if subItems.length}
            <input
                class="toggle forSubItems ifMobile"
                type="checkbox"
                name="mobileItemToggle"
                id={inputId}
            />
            <label class="button forSubItems ifMobile" for={inputId}>
                <div class="iconArrow">←</div>
            </label>

            <div class="subItemGroup useColorPreset-1" style:--subItems={subItems.length}>
                <ul>
                    {#each subItems as subItem}
                        {#if subItem?.slug && subItem?.pageTitle}
                            <li class="subItem" class:isCurrent={subItem.slug === $pageData.slug}>
                                <a
                                    class="link label"
                                    on:click={() => ($showMobile = false)}
                                    href="/{subItem.slug}">{subItem.pageTitle}</a
                                >
                            </li>
                        {/if}
                    {/each}
                </ul>
            </div>
        {/if}
    </li>
{/if}

<style lang="postcss">
    @import "$lib/css/breakpoints.css";

    @media (--vw-above-m) {
        .ifMobile {
            display: none !important;
        }

        .NAV-ITEM {
            padding: 1px 0 1px 0;
            flex-shrink: 0;
            position: relative;
            transform: translateY(0.3em);
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: 600;
            isolation: isolate;
        }

        :global(.NAV-ITEM) + .NAV-ITEM {
            margin-left: 1em;
        }

        .link.forItem {
            display: block;
            height: 100%;
        }

        .NAV-ITEM::after {
            content: "";
            position: absolute;
            display: block;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: -1;
            border-bottom: 1.5px solid currentColor;
            opacity: 0;
            visibility: none;
        }

        /* SUBITEMS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        .subItemGroup {
            --offset-y: 1.5em;
            top: 1em;
            background-color: white;
            position: absolute;
            visibility: hidden;
            opacity: 0;
            padding: calc(var(--space-quarter) + var(--offset-y)) var(--space-quarter)
                var(--space-quarter) var(--space-quarter);
            z-index: -1;
        }

        .subItem {
            white-space: nowrap;
            padding: 0.1em;
            position: relative;
        }

        .subItem ~ .subItem {
            border-top: 1px solid currentColor;
        }

        /* INTERACTIVITY
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        .isCurrent > .label {
            color: var(--green);
        }

        /* .NAV-ITEM:hover,
        .NAV-ITEM:focus,
        .NAV-ITEM:focus-within {
            color: black;
        } */

        .NAV-ITEM:hover::after,
        .NAV-ITEM:focus::after,
        .NAV-ITEM:focus-within::after {
            visibility: visible;
            opacity: 1;
        }

        .NAV-ITEM:hover .subItemGroup,
        .NAV-ITEM:focus .subItemGroup,
        .NAV-ITEM:focus-within .subItemGroup {
            visibility: visible;
            opacity: 1;
        }

        /* .subItem:hover,
        .subItem:focus,
        .subItemGroup:focus-within,
        .subItemGroup:active {

        } */

        /* TRANSITIONS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        .NAV-ITEM::after {
            transition: opacity var(--duration-fast);
        }

        .subItemGroup {
            transition: opacity var(--duration-fast);
        }

        .subItem {
            transition: color var(--duration-fast);
        }
    }

    /*
  ###############################################################################################*/

    @media (--vw-m) {
        .toggle.ifMobile {
            visibility: hidden;
            height: 0;
            width: 0;
            position: absolute;
        }

        .NAV-ITEM {
            position: relative;
            text-align: center;
            padding: 1em 0;
            font-size: var(--font-size-l);
            font-weight: 600;
            color: var(--green);
        }

        @media (--vw-s) {
            .NAV-ITEM {
                font-size: var(--font-size-m);
            }
        }

        .NAV-ITEM.isCurrent > .label,
        .subItem.isCurrent > .label {
            text-decoration: underline;
        }

        .toggle.forSubItems,
        .button.forSubItems {
            display: none;
        }

        .link.forItem,
        .button.forSubItems {
            font-size: var(--fontSize-l);
        }

        .button.forSubItems {
            position: absolute;
            top: 1.2em;
            height: 1em;
            width: 1em;
            right: 0;
            left: 50vw;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (--vw-s) {
            .button.forSubItems {
                left: 75vw;
            }
        }

        .button.forSubItems .iconArrow {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 0.2em;
            transform: rotate(-90deg);
            transition: transform var(--duration-middle);
        }

        .subItemGroup {
            padding-left: var(--space-1);
            height: 0;
            overflow: hidden;
            transition: height var(--duration-middle);
            --subItem-height: 2em;
            --subItemGroup-height: calc(var(--subItems) * var(--subItem-height));
        }

        .subItem {
            height: var(--subItem-height);
            line-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* INTERACTIVITY
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        .toggle.forSubItems:checked ~ .button .iconArrow {
            transform: rotate(90deg);
        }

        .toggle.forSubItems:checked ~ .button ~ .subItemGroup {
            height: var(--subItemGroup-height);
        }

        .label:hover,
        .link:hover,
        .label:focus,
        .link:focus {
            color: var(--color-front-isFocus);
        }
    }
</style>
