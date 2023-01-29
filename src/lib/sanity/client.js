import sanityClient from "@sanity/client";
import {mainNavigation, site, post, page} from "./queries";

export const sanity = sanityClient({
    projectId: "w2pmk8ct",
    dataset: "development",
    apiVersion: "2021-10-21",
    useCdn: true
});

export async function fetchSite(lang = "de") {
    try {
        return await sanity.fetch(site, {lang});
    } catch (error) {
        console.error("fetchSite", error);
        return null;
    }
}

export async function fetchPage(route = "", lang = "de") {
    try {
        return await sanity.fetch(page, {route, lang});
    } catch (error) {
        console.error("fetchPage", error);
        return null;
    }
}

export async function fetchPost(postSlug = "", lang = "de") {
    try {
        return await sanity.fetch(post, {postSlug, lang});
    } catch (error) {
        console.error("fetchPost", error);
        return null;
    }
}

export async function fetchMainNav(lang = "de") {
    try {
        return await sanity.fetch(mainNavigation, {lang});
    } catch (error) {
        console.error("fetchMainNav", error);
        return null;
    }
}
