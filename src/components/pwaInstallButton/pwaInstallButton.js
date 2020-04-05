import React from "react"
import "./pwaInstallButton.css"

export const PWAInstallButton = () => (
  <pwa-install
    installbuttontext="Install +"
    iconpath="https://www.pwa-shields.com/images/favicon.svg"
    manifestpath="/manifest.webmanifest"
  ></pwa-install>
)
