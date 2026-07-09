import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Favicon from "./../../static/images/favicon.svg"

const HelmetComponent = Helmet as unknown as React.ComponentType<
  Record<string, unknown>
>

type SiteMetadataQuery = {
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
}

type SEOProps = {
  metaTitle: string
  metaDescription: string
}

export const SEO = ({ metaTitle, metaDescription }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  ) as SiteMetadataQuery

  const { siteUrl } = site.siteMetadata
  const shareImageUrl = `${siteUrl}/images/social-share.png`

  return (
    <HelmetComponent
      htmlAttributes={{
        lang: "en",
      }}
      link={[{ rel: "shortcut icon", type: "image/svg", href: `${Favicon}` }]}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          itemProp: `name`,
          content: metaTitle,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:text:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image:alt`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          itemProp: `description`,
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
          content: siteUrl,
        },
        {
          property: `og:image`,
          content: shareImageUrl,
        },
        {
          itemProp: `image`,
          content: shareImageUrl,
        },
        {
          name: `twitter:image`,
          content: shareImageUrl,
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
      ]}
    />
  )
}
