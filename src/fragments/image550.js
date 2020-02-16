import { graphql } from "gatsby"

export const Image550 = graphql`
  fragment Image550 on File {
    childImageSharp {
      fluid(maxWidth: 550, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
