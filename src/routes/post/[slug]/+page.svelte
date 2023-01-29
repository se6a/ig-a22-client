<script>
    import {pageData} from "$lib/store";
    import Post from "$components/layout/Post.svelte";

    export let data = {};
    $: $pageData = data;
</script>

<Post {data} />
