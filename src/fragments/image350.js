import { graphql } from "gatsby"

export const Image350 = graphql`
  fragment Image350 on File {
    childImageSharp {
      fluid(maxWidth: 350, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
