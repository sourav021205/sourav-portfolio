
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(
              1,
              Math.max(
                0,
                window.scrollY / scrollableHeight
              )
            )
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform =
          `scaleX(${progress})`;
      }
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="scroll-progress"
      aria-hidden="true"
    />
  );
}
