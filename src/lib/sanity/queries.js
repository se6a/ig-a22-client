function crntLang(prop, rename = "") {
    return `"${rename || prop}": ${prop}[$lang]`;
}

export const image = `
    ...asset->{
        "src": url,
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height,
        "aspectRatio": metadata.dimensions.aspectRatio
    },
    hotspot
`;

export const sectionGallery = `
    _type == "sectionGallery" => {
        _type,
        type,
        images[] {${image}}
    }
`;

export const sectionImage = `
    _type == "sectionImage" => {
        _type,
        "image": image {${image}}
    }
`;

export const sectionTitleImage = `
    _type == "sectionTitleImage" => {
        _type,
        "image": image {${image}}
    }
`;

export const sectionCta = `
    _type == "sectionCta" => {
        _type,
        "cta": {
            label,
            url
        }
    }
`;

export const sectionRichtext = `
    _type == "sectionRichtext" => {
        _type,
        "blocks": textEditor[$lang]
    }
`;

export const sectionYoutube = `
    _type == "sectionYoutube" => {
        _type,
        "url": videoUrl
    }
`;

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

export const page = `
    ${crntLang("pageTitle")},
    "slug": slug.current,
    sections[] {
        ${sectionRichtext},
        ${sectionImage},
        ${sectionTitleImage},
        ${sectionGallery},
        ${sectionYoutube},
        ${sectionCta}
    }
`;

// Get page defined as $route or - if not defined - startpage
export const site = `
{
    "navigation": {
        "main": ${mainNavigation},
        "sub": ${subNavigation}
    },

    "pageData": * [_type == "pages" && slug.current == $route || _type == "settings" ][0] {
        _type == "pages" => {
            ${page}
        },
        _type == "settings" => {
            ...navigationMain[0]-> {
                ${page}
            }
        }
    },

    "subPages": * [_type == "pages" && isSubpage == true && parentPage->slug.current == $route] {
        "slug": slug.current,
        ${crntLang("pageTitle")},
    }
}
`;
