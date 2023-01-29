<script>
    import Image from "../elements/Image.svelte";

    export let section = {};
    const posts = section?.posts || [];
</script>

<div class="SECTION-POSTS section">
    {#each posts as post}
        <article class="postPreview">
            <a href="/post/{post.slug}">
                <header class="head">
                    <p class="posted">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                    <h2>{post.title}</h2>
                </header>
                <div class="content">
                    <div class="image">
                        <Image image={post.titleImage} objectFit="cover" />
                    </div>

                    <div class="text">
                        {post?.description}
                    </div>
                </div>
            </a>
        </article>
    {/each}
</div>

<style>
    .SECTION-POSTS {
        display: flex;
        flex-direction: column;
    }

    .postPreview > a {
        display: flex;
        flex-direction: column;
    }

    .content {
        margin-top: var(--space-m);
        display: flex;
    }

    .image {
        width: 20vmin;
        height: 20vmin;
        flex-shrink: 0;
        margin-right: var(--space-m);
    }

    .postPreview + .postPreview {
        margin-top: var(--space-l);
    }
</style>
