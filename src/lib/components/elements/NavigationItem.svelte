<script>
    import {createId} from "$lib/functions/utility.ts";

    export let item = {};
    export let subItems = [];

    export let showMobile = writable(false);

    const inputId = createId();
    const pageTitle = item?.pageTitle || "";
    const route = item?.slug || "";
</script>

{#if pageTitle}
    <li class="NAV-ITEM" class:hasSubItems={subItems.length} class:isCurrent={false}>
        <a class="link forItem" on:click={() => ($showMobile = false)} href={route}>
            {pageTitle}
        </a>

        <input
            class="toggle forSubItems ifMobile"
            type="checkbox"
            name="mobileItemToggle"
            id={inputId}
        />
        <label class="label forSubItems ifMobile" for={inputId}>
            {pageTitle}
        </label>

        {#if subItems.length}
            <div class="subItemGroup useColorPreset-1" style:--subItems={subItems.length}>
                <ul>
                    {#each subItems as subItem}
                        {#if subItem?.slug && subItem?.pageTitle}
                            <li class="subItem">
                                <a
                                    class="link"
                                    on:click={() => (showMobile = false)}
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
        /* .NAV-ITEM.isCurrent {
            color: black;
        } */

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

        .NAV-ITEM.isCurrent .label {
            color: var(--color-front-isCurrent);
        }

        .hasSubItems .link.forItem,
        .toggle.forSubItems,
        .label.forSubItems {
            display: none;
        }

        .hasSubItems .toggle.forSubItems,
        .hasSubItems .label.forSubItems {
            display: block;
        }

        .link.forItem,
        .label.forSubItems {
            font-size: var(--fontSize-l);
        }

        .hasSubItems .label.forSubItems::after {
            content: "←";
            display: inline-block;
            transition: transform var(--duration-middle);
            position: absolute;
            margin-left: 1em;
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

        .toggle.forSubItems:checked ~ .label::after {
            transform: rotate(-90deg);
        }

        .toggle.forSubItems:checked ~ .label ~ .subItemGroup {
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
