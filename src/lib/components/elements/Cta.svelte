<script>
    export let cta = {};

    const label = cta.label?.split("\n") || ["Call to Action"];
    const url = cta.url || "";
</script>

<a class="BLOCK-CTA box" href={url}>
    <div class="circle">
        <div class="label">
            {#each label as part}
                <span>{part}</span>
            {/each}
        </div>
        <div class="pushHeight" />
    </div>
</a>

<style>
    @import "$lib/css/breakpoints.css";

    .BLOCK-CTA {
        color: white;
        font-size: var(--font-size-l);
        text-transform: uppercase;
        font-weight: 600;
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        transform: scale(1);
        transition: transform var(--duration-middle);
    }

    .circle {
        background-color: var(--red);
        transform: rotate(10deg);
        display: grid;
        grid-template-areas: "a";
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .label {
        padding: var(--space-m);
        grid-area: a;
        display: flex;
        flex-direction: column;
    }

    span {
        text-align: center;
    }

    .pushHeight {
        grid-area: a;
        margin-top: 100%;
    }

    .BLOCK-CTA:hover {
        transform: scale(1.05);
    }

    @media (--vw-s) {
        .BLOCK-CTA {
            font-size: var(--font-size-m);
            max-width: 100%;
        }
    }
</style>
