import clsx from "clsx";
import React from "react";

const Video = React.forwardRef<
  HTMLVideoElement,
  {
    loadedFunc: () => void;
    timeUpdateFunc: () => void;
    className: string;
  }
>(({ loadedFunc, timeUpdateFunc, className }, ref) => {
  return (
    <video
      src="/t20.mp4"
      controls={false}
      className={clsx("w-full aspect-video", className)}
      ref={ref}
      onLoadedMetadata={loadedFunc}
      onTimeUpdate={timeUpdateFunc}
    />
  );
});

//create memoized
const MemoizedVIdeo = React.memo(Video);
export default MemoizedVIdeo;
