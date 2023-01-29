<script>
  import {writable} from "svelte/store";
  import Checkbox from "$lib/components/fragments/Checkbox.svelte";

  export let value = writable("");

  const box1 = writable($value === "1.5-Zimmer");
  const box2 = writable($value === "3.5-Zimmer");
  const box3 = writable($value === "4.5-Zimmer");
  const box4 = writable($value === "5.5-Zimmer");

  box1.subscribe((v) => {
    if (v) {
      $box2 = $box3 = $box4 = false;
      $value = "1.5-Zimmer";
    } else {
      $box1 = false;
    }
  });

  box2.subscribe((v) => {
    if (v) {
      $box1 = $box3 = $box4 = false;
      $value = "3.5-Zimmer";
    } else {
      $box2 = false;
    }
  });

  box3.subscribe((v) => {
    if (v) {
      $box1 = $box2 = $box4 = false;
      $value = "4.5-Zimmer";
    } else {
      $box3 = false;
    }
  });

  box4.subscribe((v) => {
    if (v) {
      $box1 = $box2 = $box3 = false;
      $value = "5.5-Zimmer";
    } else {
      $box4 = false;
    }
  });

  $: if (!$box1 && !$box2 && !$box3 && !$box4) $value = "";
</script>

<div class="CHECKBOX-GROUP" class:isUnchecked={$value.length < 1}>
  <Checkbox checked={box1} name="room-1.5" label="1.5-Zimmer" />
  <Checkbox checked={box2} name="room-3.5" label="3.5-Zimmer" />
  <Checkbox checked={box3} name="room-4.5" label="4.5-Zimmer" />
  <Checkbox checked={box4} name="room-5.5" label="5.5-Zimmer" />
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
