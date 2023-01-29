<script>
    export let portableText = [];
    const pdf = portableText.value;
    const href = pdf?.url || "";
    const title = pdf?.title || pdf?.originalFilename || "PDF";
</script>

<a class="PDF-BLOCK textLink" {href} target="_blank" rel="noreferrer">
    {title}
</a>

<style>
    .PDF-BLOCK {
        display: block;
        margin-top: 0 !important;
        line-break: anywhere;
    }
</style>
