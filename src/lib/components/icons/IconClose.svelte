<script>
  import Icon from "./_Icon.svelte";

  export let preserveRatio = true;

  export let isOpen = false;
</script>

<Icon name="close" {preserveRatio}>


    <g >
      <path d="M 0,0 L 10,10" />
      <path d="M 0,10 L 10,0" />
    </g>

</Icon>

<style>

</style>
