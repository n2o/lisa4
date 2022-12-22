import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/components/Map/dynamic-map"), {
  ssr: false,
})

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600
const DEFAULT_HEIGHT = 600

export function Map(props) {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  )
}