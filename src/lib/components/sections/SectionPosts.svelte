<script>
    import Image from "../elements/Image.svelte";

    export let section = {};
    const posts = section?.posts || [];
</script>

<div class="SECTION-POSTS section">
    {#each posts as post}
        <a href="/post/{post.slug}">
            <article class="postPreview box">
                <div class="image">
                    <Image image={post.titleImage} objectFit="cover" />
                </div>

                <div class="box">
                    <h1>{post.title}</h1>
                    {post?.description}
                </div>
            </article>
        </a>
    {/each}
</div>

<style>
    .SECTION-POSTS {
        display: flex;
        flex-direction: column;
    }

    .postPreview {
        border: 1px solid gainsboro;
        display: flex;
    }

    .image {
        width: 20vmin;
        height: 20vmin;
    }
</style>
