import {fetchSite} from "$lib/sanity/client";

export async function load({params}) {
    console.log(params.route);
    const data = await fetchSite(params?.route || "");
    return data;
}
