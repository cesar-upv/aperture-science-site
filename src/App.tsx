import { useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Product from "./components/Product"
import PortalDemo from "./components/PortalDemo"
import About from "./components/About"
import StrategySection from "./components/StrategySection"
import OrgSection from "./components/OrgSection"
import Facilities from "./components/Facilities"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function App() {
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setMotion(!preference.matches)
    preference.addEventListener("change", onChange)
    return () => preference.removeEventListener("change", onChange)
  }, [])
  return (
    <div className={`aperture-site ${motion ? "motion-on" : "motion-off"}`}>
      <Navigation />
      <main id="contenido">
        <Hero />
        <div className="science-strip">
          <div className="wrap">
            <span>LA CIENCIA NO SE DETIENE.</span>
            <span className="strip-icon">✻</span>
            <span>USTED TAMPOCO.</span>
          </div>
        </div>
        <Product />
        <PortalDemo />
        <About />
        <StrategySection />
        <OrgSection />
        <Facilities />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
