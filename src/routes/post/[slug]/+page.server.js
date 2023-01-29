import {fetchPost} from "$lib/sanity/client";

export async function load({params}) {
    const slug = params?.slug || "";
    const pageData = await fetchPost(slug);
    return {pageData};
}
