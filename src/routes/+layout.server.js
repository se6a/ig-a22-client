import {fetchSite} from "$lib/sanity/client";

export async function load({params}) {
    const route = params?.route || "ig-a22";
    const data = await fetchSite(route || "");
    return data;
}
