function crntLang(prop, rename = "") {
    return `"${rename || prop}": ${prop}[$lang]`;
}

export const image = `
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

export const pdf = `
    ...asset->{
        url,
        originalFilename
    },
    title
`;

export const sectionGallery = `
    _type == "sectionGallery" => {
        type,
        images[] {${image}}
    }
`;

export const sectionImage = `
    _type == "sectionImage" => {
        "image": image {${image}},
    }
`;

export const sectionTitleImage = `
    _type == "sectionTitleImage" => {
        "image": image {${image}}
    }
`;

export const sectionCta = `
    _type == "sectionCta" => {
        "cta": {
            label,
            url
        }
    }
`;

export const sectionRichtext = `
    _type == "sectionRichtext" => {
        "blocks": textEditor[$lang][] {
            ...,
            _type == "pdf" => {${pdf}}
        }
    }
`;

export const sectionYoutube = `
    _type == "sectionYoutube" => {
        "url": videoUrl
    }
`;

export const sectionSpace = `
    _type == "sectionSpace" => {
        size
    }
`;

export const sectionPdfList = `
    _type=="sectionPdfList" => {
        list[] {${pdf}}
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
        _type,
        ${sectionRichtext},
        ${sectionImage},
        ${sectionTitleImage},
        ${sectionGallery},
        ${sectionYoutube},
        ${sectionCta},
        ${sectionSpace},
        ${sectionPdfList}
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
