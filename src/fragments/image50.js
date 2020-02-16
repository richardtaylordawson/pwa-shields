import { graphql } from "gatsby"

export const Image50 = graphql`
  fragment Image50 on File {
    childImageSharp {
      fluid(maxWidth: 50, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`
