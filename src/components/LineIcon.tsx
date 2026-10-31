const paths = {
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21ZM12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  truck: "M2 6h12v10H2zM14 10h4l3 3v3h-7M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  store: "M3 10 5 4h14l2 6M4 10v10h16V10M3 10h18M9 20v-6h6v6",
  building: "M4 21V5l8-3v19M12 9h8v12M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2M2 21h20",
  swap: "M4 8h14l-4-4M20 16H6l4 4",
  check: "m5 12 5 5 9-10",
  close: "M6 6l12 12M18 6 6 18",
  alert: "M12 8v5M12 16.5v.5M12 3l9.5 17h-19Z",
  expand: "M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7",
  shrink: "M4 14h6v6M20 10h-6V4M10 14l-7 7M14 10l7-7",
  prev: "M15 5l-7 7 7 7",
  next: "M9 5l7 7-7 7",
  tag: "M3 3h8l10 10-8 8L3 11zM7.5 7.5h.01",
  card: "M2 6h20v12H2zM2 10h20M6 15h4",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  send: "M3 11 21 3l-8 18-2-8z",
}

export type IconName = keyof typeof paths

export default function LineIcon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg className="line-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
