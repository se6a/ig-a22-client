<script>
    export let section = {};
    const list = section?.list || [];
</script>

<div class="SECTION-PDF-LIST section">
    <ul>
        {#each list as pdf}
            {#if pdf?.url}
                <li>
                    Pdf: <a class="textLink" href={pdf.url || ""} target="_blank" rel="noreferrer">
                        {pdf.title ? pdf.title : pdf.originalFilename}
                    </a>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    a {
        line-break: anywhere;
    }
</style>
