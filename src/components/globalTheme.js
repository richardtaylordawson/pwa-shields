import React from "react"
import { Global, css } from "@emotion/core"

export const GlobalTheme = () => (
  <Global
    styles={css`
      main {
        font-size: 1rem;
        font-weight: 300;
        color: #3D3D3D;
        padding: 50px 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        line-height: 1.5
      }

      h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 3.052rem;
        letter-spacing: -.0625rem;
        line-height: 3rem;
        font-weight: 600;
        margin: 0 0 30px;
      }

      h2 {
        font-size: 2.75rem;
        margin-bottom: 10px;
        margin-bottom: 30px;
        letter-spacing: 0.05px;
        line-height: 2.25rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 600;
      }

      h3 {
        font-size: 1.75rem;
        margin-bottom: 10px;
        letter-spacing: 0.05px;
        line-height: 2.25rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 600;
      }

      h4 {
        display: inline;
      }

      p {
        font-size: 1.15rem;
      }

      nav a {
        font-size: 1.3rem;
      }

      img {
        margin-top: 2.5px;
        margin-right: 1px;
      }

      .small { font-size: 0.85rem; }
      .legal { font-size: 0.75rem; }
      .block { display: block; }
      .opaque { opacity: 0.5; }
      .navbar-brand img { height: 30px; }
      .flex-card { height: 90%; }
      .hidden { display: none; }

      .flex-group {
        display: flex;
        align-items: end;
      }

      .space-between { justify-content: space-between; }
    `}
  />
)
