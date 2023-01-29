import {fetchPage} from "$lib/sanity/client";

export async function load({params}) {
    const pageData = await fetchPage(params?.route);
    return {pageData};
}
