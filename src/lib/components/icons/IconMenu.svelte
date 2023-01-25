<script>
  import Icon from "./_Icon.svelte";

  export let preserveRatio = true;

  export let isOpen = false;
</script>

<Icon classes={isOpen ? "isOpen" : ""} name="menu" {preserveRatio}>
  <g class="wrapper" class:isOpen>
    <g class="showWhenClosed">
      <path d="M 0,1 L 10,1" />
      <path d="M 0,5 L 10,5" />
      <path d="M 0,9 L 10,9" />
    </g>

    <g class="showWhenOpen">
      <path d="M 0,0 L 10,10" />
      <path d="M 0,10 L 10,0" />
    </g>
  </g>
</Icon>

<style>
  .showWhenClosed,
  .showWhenOpen {
    transition: opacity var(--duration-fast);
  }

  .isOpen .showWhenClosed,
  .showWhenOpen {
    opacity: 0;
  }

  .showWhenClosed,
  .isOpen .showWhenOpen {
    opacity: 1;
  }

  .wrapper {
    transform: rotate(0deg);
    transform-origin: center center;
    transition: transform var(--duration-fast);
  }

  .wrapper.isOpen {
    transform: rotate(180deg);
  }
</style>
