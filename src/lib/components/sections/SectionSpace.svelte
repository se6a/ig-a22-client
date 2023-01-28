<script>
    export let section = {};

    const size = section?.size || "";
</script>

<div class="SECTION-SPACE isSize-{size}" />

<style>
    .SECTION-SPACE {
        height: var(--sectionSpace-size);
    }

    .isSize-s {
        height: 2rem;
    }

    .isSize-m {
        height: 3em;
    }

    .isSize-l {
        height: 6em;
    }
</style>
