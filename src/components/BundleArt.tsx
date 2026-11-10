import portalGun from "../assets/portal-gun-polished.webp"

export default function BundleArt({ boots, alt, loading = "lazy" }: { boots: string; alt: string; loading?: "eager" | "lazy" }) {
  return (
    <span className="bundle-art">
      <img className="bundle-boots" src={boots} alt={alt} loading={loading} />
      <img className="bundle-gun" src={portalGun} alt="" aria-hidden="true" loading={loading} />
    </span>
  )
}
