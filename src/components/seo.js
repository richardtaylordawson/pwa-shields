import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
// import Favicon from "./../../static/pwa-"

export const SEO = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // link={[
      //   { rel: "shortcut icon", type: "image/png", href: `${Favicon}` },
      // ]}
      title={`${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          itemprop: `name`,
          content: title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:text:title`,
          content: title,
        },
        {
          name: `twitter:image:alt`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://pwa-shields.richarddawson.codes`,
        },
        {
          property: `og:image`,
          content: `https://pwa-shields.richarddawson.codes/images/social-share.png`,
        },
        {
          itemprop: `image`,
          content: `https://pwa-shields.richarddawson.codes/images/social-share.png`,
        },
        {
          name: `twitter:image`,
          content: `https://pwa-shields.richarddawson.codes/images/social-share.png`,
        },
        {
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          property: `og:image:width`,
          content: `640`,
        },
        {
          property: `og:image:height`,
          content: `320`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: `@richard_codes`,
        },
        {
          name: `twitter:creator`,
          content: `@richard_codes`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
