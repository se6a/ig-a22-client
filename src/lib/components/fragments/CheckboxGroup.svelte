<script>
    import {writable} from "svelte/store";
    import Checkbox from "$lib/components/fragments/Checkbox.svelte";

    export let value = writable("");

    const box1 = writable($value === "Normal");
    const box2 = writable($value === "Gönner");

    box1.subscribe((v) => {
        if (v) {
            $box2 = false;
            $value = "Normal";
        } else {
            $box1 = false;
        }
    });

    box2.subscribe((v) => {
        if (v) {
            $box1 = false;
            $value = "Gönner";
        } else {
            $box2 = false;
        }
    });

    $: if (!$box1 && !$box2) $value = "";
</script>

<div class="CHECKBOX-GROUP" class:isUnchecked={$value.length < 1}>
    <Checkbox checked={box1} name="mitgliedschaft-normal" label="Mitgliedschaft, CHF 10.— / Jahr" />
    <Checkbox
        checked={box2}
        name="mitgliedschaft-goenner"
        label="Gönner-Mitgliedschaft, CHF 100.— / Jahr"
    />
</div>

<style>
    .CHECKBOX-GROUP {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-s);
    }

    .CHECKBOX-GROUP > :global(*) {
        flex-shrink: 0;
    }

    .CHECKBOX-GROUP::after {
        content: "";
        pointer-events: none;
        top: 0em;
        right: 0em;
        bottom: 0em;
        left: -10px;
        position: absolute;
        border-left: 5px solid crimson;
        transition: opacity var(--duration-slow);
        opacity: 0;
    }

    :global(.doAlertMissingFields) .isUnchecked::after {
        opacity: 0.5;
    }
</style>
