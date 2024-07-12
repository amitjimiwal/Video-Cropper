import React from "react";

const VIdeo = React.forwardRef<
  HTMLVideoElement,
  {
    loadedFunc: () => void;
    timeUpdateFunc: () => void;
  }
>(({ loadedFunc, timeUpdateFunc }, ref) => {
  return (
    <video
      src="/t20.mp4"
      controls={false}
      className="w-full"
      ref={ref}
      onLoadedMetadata={loadedFunc}
      onTimeUpdate={timeUpdateFunc}
    />
  );
});

//create memoized
const MemoizedVIdeo = React.memo(VIdeo);
export default MemoizedVIdeo;
