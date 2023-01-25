<div class="SECTIONS">
    <slot />
</div>

<style>
    .SECTIONS > :global(* + *) {
        margin-top: var(--space-l);
    }
</style>
