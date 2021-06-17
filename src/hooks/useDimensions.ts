import { useEffect, useRef } from "react";

interface Props {
  current: {
    offsetWidth: number;
    offsetHeight: number;
  } | null
}

const useDimensions = (ref: Props) => {
  const dimensions = useRef({ w: 0, h: 0 })

  useEffect(() => {
    dimensions.current.w = ref?.current?.offsetWidth || 0;
    dimensions.current.h = ref?.current?.offsetHeight || 0;
  }, [])

  return dimensions.current
}

export default useDimensions