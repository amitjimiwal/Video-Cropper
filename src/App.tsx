import { useEffect, useRef, useCallback } from "react";
import "./App.css";
import Button from "./Button";
import Header from "./component/Header";
import NoPreview from "./component/NoPreview";
import VideoControls from "./component/VideoControls";
import useAppStore from "./store/videostore";
import Video from "./component/Video";

function App() {
  const {
    isPlaying,
    volume,
    setTotalDuration,
    setCurrentTimeStamp,
    currentTimeStamp,
    playbackRate,
    isCroppedStarted,
    isDragging,
    setIsDragging,
    position,
    setPosition,
    aspectWidth,
  } = useAppStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const onMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && dragRef.current && videoRef.current) {
        const videoRect = videoRef.current.getBoundingClientRect();
        const dragRect = dragRef.current.getBoundingClientRect();

        let newX = e.clientX - videoRect.left - dragRect.width / 2;
        let newY = e.clientY - videoRect.top - dragRect.height / 2;

        newX = Math.max(0, Math.min(newX, videoRect.width - dragRect.width));
        newY = Math.max(0, Math.min(newY, videoRect.height - dragRect.height));

        setPosition({ x: newX, y: newY });
      }
    },
    [isDragging]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  //video start stop
  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  //handling the seekbar timestamp changes
  useEffect(() => {
    if (videoRef.current && !isPlaying)
      videoRef.current.currentTime = currentTimeStamp;
  }, [currentTimeStamp, isPlaying]);

  // Handling volume
  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume / 100;
  }, [volume]);

  // Handling playback rate
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <section className="h-[600px] flex w-full">
        <section className="w-1/2 px-10 py-7 ">
          <div
            className="relative"
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {isCroppedStarted && (
              <div
                ref={dragRef}
                className="absolute top-0 z-40 grid w-56 h-full grid-cols-3 bg-white cursor-move bg-opacity-20"
                style={{
                  width: `${aspectWidth}%`,
                  left: `${position.x}px`,
                }}
                onMouseDown={onMouseDown}
              >
                {[...Array(9)].map((_, index) => (
                  <div
                    key={index}
                    className="border border-white border-opacity-40"
                  ></div>
                ))}
              </div>
            )}
            <Video
              ref={videoRef}
              className=""
              loadedFunc={() => {
                setTotalDuration(videoRef.current?.duration || 0);
              }}
              timeUpdateFunc={() => {
                setCurrentTimeStamp(videoRef.current?.currentTime || 0);
              }}
            />
          </div>
          <VideoControls />
        </section>
        <section className="w-1/2 px-10 py-7 ">
          <h5 className="text-center text-tertiary">Preview</h5>
          {isCroppedStarted && isPlaying ? (
            <div className="w-full ">Started PReview</div>
          ) : (
            <NoPreview />
          )}
        </section>
      </section>
      <CropperControls />
    </div>
  );
}

function CropperControls() {
  const { setIsCroppedStarted, isCroppedStarted } = useAppStore();
  return (
    <div className="flex flex-wrap items-center justify-start gap-2 px-4 py-2 rounded-lg">
      <Button
        onClick={() => {
          setIsCroppedStarted(!isCroppedStarted);
        }}
        disabled={isCroppedStarted}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Start Cropper
      </Button>
      <Button
        onClick={() => {
          setIsCroppedStarted(!isCroppedStarted);
        }}
        disabled={!isCroppedStarted}
        className="disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Remove Cropper
      </Button>
      <Button
        disabled={!isCroppedStarted}
        className="disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Generate Preview
      </Button>
      <div className="flex-grow"></div>
      <button className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md bg-secondary hover:text-white focus:outline-none">
        Cancel
      </button>
    </div>
  );
}

export default App;
