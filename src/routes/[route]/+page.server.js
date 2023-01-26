import {fetchSite} from "$lib/sanity/client";

export async function load({params}) {
    const data = await fetchSite(params?.route || "");
    return data;
}
