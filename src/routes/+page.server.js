import {fetchSite} from "$lib/sanity/client";

export async function load({params}) {
    const route = params?.route || "";
    const data = await fetchSite(route || "");
    return data;
}
