import cssText from "data-text:~/styles/global.css"
import type { PlasmoCSConfig } from "plasmo"

import { CountButton } from "~/components/CountButton"

import "~/styles/base.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div className="z-50 flex fixed top-16 right-8">
      <CountButton />
    </div>
  )
}

export default PlasmoOverlay
