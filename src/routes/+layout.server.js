import {fetchSite} from "$lib/sanity/client";

export async function load() {
    const data = await fetchSite();
    return data;
}
