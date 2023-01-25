<script>
    import Youtube from "../elements/Youtube.svelte";
    export let ytVideoId = "7TrL8A25Qv8";
</script>

<div class="SECTION-YOUTUBE box">
    <div class="videoWrapper">
        <Youtube {ytVideoId} />
    </div>
</div>

<style>
    .SECTION-YOUTUBE {
        max-width: var(--content-maxWidth);
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: center;
    }
</style>
