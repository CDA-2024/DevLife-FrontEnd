import { useEffect, useRef, useState } from "react";

const useResize = (threshold: number) => {
  const [isSmall, setIsSmall] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const handleResize = () => {
      if (currentContainerRef) {
        setIsSmall(currentContainerRef.offsetWidth < threshold);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (currentContainerRef) {
      resizeObserver.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        resizeObserver.unobserve(currentContainerRef);
      }
    };
  }, [threshold]);

  return { isSmall, containerRef };
};

export default useResize;
