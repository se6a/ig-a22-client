function crntLang(prop, rename = "") {
    return `"${rename || prop}": ${prop}[$lang]`;
}

/* PARTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const image = `
    ...asset->{
        "src": url,
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height,
        "aspectRatio": metadata.dimensions.aspectRatio,
    },
    alt,
    caption,
    hotspot
`;

const pdf = `
    ...asset->{
        url,
        originalFilename
    },
    title
`;

const sectionGallery = `
    _type == "sectionGallery" => {
        type,
        images[] {${image}}
    }
`;

const sectionImage = `
    _type == "sectionImage" => {
        "image": image {${image}},
    }
`;

const sectionTitleImage = `
    _type == "sectionTitleImage" => {
        "image": image {${image}}
    }
`;

const sectionCta = `
    _type == "sectionCta" => {
        "cta": {
            label,
            url
        }
    }
`;

const sectionRichtext = `
    _type == "sectionRichtext" => {
        "blocks": textEditor[$lang][] {
            ...,
            _type == "pdf" => {${pdf}}
        }
    }
`;

const sectionYoutube = `
    _type == "sectionYoutube" => {
        "url": videoUrl
    }
`;

const sectionSpace = `
    _type == "sectionSpace" => {
        size
    }
`;

const sectionPdfList = `
    _type=="sectionPdfList" => {
        list[] {${pdf}}
    }
`;

const sectionPosts = `
    _type == "sectionPosts" => {
        "posts": * [_type == "posts"] {
            title,
            description,
            "slug": slug.current,
            "createdAt": _createdAt,
            "updatedAt": _updatedAt,
            titleImage {${image}},
        }
    }
`;

const sections = `
    _type,
    ${sectionRichtext},
    ${sectionImage},
    ${sectionTitleImage},
    ${sectionGallery},
    ${sectionYoutube},
    ${sectionCta},
    ${sectionSpace},
    ${sectionPdfList},
    ${sectionPosts}
`;

/* QUERIES
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export const mainNavigation = `
* [_type == "settings"][0].navigationMain[]->{
    ${crntLang("pageTitle")},
    "slug": slug.current
}
`;

export const subNavigation = `
* [_type == "pages" && isSubpage == true ] {
    "parent": parentPage->slug.current,
    "slug": slug.current,
    ${crntLang("pageTitle")},
}
`;

export const post = `
* [_type == "posts" && slug.current == $postSlug][0] {
    title,
    description,
    "slug": slug.current,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt,
    titleImage {${image}},
    sections[] {${sections}}
}
`;

export const page = `
* [_type == "pages" && slug.current == $route][0] {
    ${crntLang("pageTitle")},
    "slug": slug.current,
    sections[] {${sections}}
}
`;

export const site = `
{
    "navigation": {
        "main": ${mainNavigation},
        "sub": ${subNavigation}
    }
}
`;

// "subPages": * [_type == "pages" && isSubpage == true && parentPage->slug.current == $route] {
//     "slug": slug.current,
//     ${crntLang("pageTitle")},
// }

// _type == "settings" => {
//     ...navigationMain[0]-> {
//         ${crntLang("pageTitle")},
//         "slug": slug.current,
//         sections[] {${sections}}
//     }
// }
