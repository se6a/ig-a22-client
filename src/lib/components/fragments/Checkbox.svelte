<script>
  import {writable} from "svelte/store";
  import {createId} from "../../functions/utility";

  export let name = "";
  export let label = "";

  export let checked = writable(false);

  const id = createId();
</script>

<div class="CHECKBOX">
  <input class="input" type="checkbox" bind:checked={$checked} {id} placeholder=" " />
  <label for={id}>
    <div class="checkbox">
      <div class="checkMark" />
    </div>
    <div class="label">{label}</div>
  </label>
</div>

<style>
  .CHECKBOX {
    position: relative;
    display: flex;
  }

  .checkbox {
    border: 1px solid black;
    background-color: white;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
  }

  .input {
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
  }

  label {
    display: flex;
  }

  .label {
    margin-left: var(--space-1);
    margin-top: auto;
    margin-bottom: auto;
  }

  .checkMark {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
  }

  .checkMark:before,
  .checkMark:after {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 1px;
    background-color: currentColor;
  }

  .checkMark:before {
    transform: rotate(45deg);
  }

  .checkMark:after {
    transform: rotate(-45deg);
  }

  .input:checked + label .checkMark {
    opacity: 1;
  }
</style>
