import sanityClient from "@sanity/client";
import {mainNavigation, site} from "./queries";

export const sanity = sanityClient({
    projectId: "w2pmk8ct",
    dataset: "development",
    apiVersion: "2021-10-21",
    useCdn: true
});

export async function fetchSite(route = "", lang = "de") {
    try {
        return sanity.fetch(site, {route, lang});
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchMainNav(lang = "de") {
    try {
        return sanity.fetch(mainNavigation, {lang});
    } catch (error) {
        console.error(error);
        return null;
    }
}
