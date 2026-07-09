import * as React from "react"
import type { ReactNode } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./../styles/global.css"
import { Navigation } from "./../components/navigation"

type MainProps = {
  children: ReactNode
  currentPage?: "home" | "series" | "create"
}

export const Main = ({ children, currentPage }: MainProps) => (
  <>
    <header>
      <Navigation currentPage={currentPage} />
    </header>
    <main>{children}</main>
  </>
)
