<script>
  import {writable} from "svelte/store";
  import {createId} from "../../functions/utility";

  export let type = "text";
  export let name = "";
  export let label = "";
  export let required = false;

  export let value = writable("");

  const id = createId();
</script>

<div class="FIELD" class:isEmpty={$value.length < 1}>
  {#if type === "text"}
    <input class="input" bind:value={$value} type="text" {name} {id} placeholder=" " {required} />
  {:else if type === "email"}
    <input class="input" bind:value={$value} type="email" {name} {id} placeholder=" " {required} />
  {/if}

  <label class="label" for={id}>
    <span>{label}</span>
  </label>
</div>

<style>
  .FIELD {
    position: relative;
  }

  .input {
    height: var(--field-height);
    width: 100%;
    border-radius: 0;
    border: 1px solid black;
    font-size: inherit;
    padding: 0 var(--field-padding-x);
    padding-top: 0.8em;
  }

  .label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--field-padding-x);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(0) scale(1);
    transition: transform var(--duration-middle);
    transform-origin: left;
    cursor: text;
  }

  .input:placeholder-shown + .label {
    transform: translateY(0) scale(1);
  }

  .input + .label,
  .input:focus + .label {
    transform: translateY(-0.7em) scale(0.5);
  }

  .FIELD::after {
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

  :global(.doAlertMissingFields) .isEmpty::after {
    opacity: 0.5;
  }
</style>
