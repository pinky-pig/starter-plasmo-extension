import '../styles/global.css'
import { useEffect } from "react";
import { themeChange } from "theme-change";

export function Providers(props: {
  children: React.ReactNode
}) {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div >
      {props.children}      
    </div>
  )
}
