<script>
    import Youtube from "../elements/Youtube.svelte";

    export let section = {};
    const url = section?.url || "";
    const ytVideoId = url.match(/(?:vi?(?:=|\/)|embed\/|youtu\.be\/)([a-zA-Z0-9_-]+)/)?.[1] || "";
</script>

<div class="SECTION-YOUTUBE section">
    <div class="videoWrapper">
        <Youtube {ytVideoId} />
    </div>
</div>

<style>
    .SECTION-YOUTUBE {
        display: flex;
        justify-content: center;
    }
</style>
