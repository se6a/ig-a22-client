import {fetchPage} from "$lib/sanity/client";

export async function load() {
    const data = await fetchPage("ig-a22");
    return {pageData: data};
}
