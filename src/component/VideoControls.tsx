import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import useAppStore from "../store/videostore";
import { IoVolumeMuteSharp, IoVolumeHigh } from "react-icons/io5";
const VideoControls: React.FC = () => {
  const {
    isPlaying,
    setIsPlaying,
    totalDuration,
    currentTimeStamp,
    setCurrentTimeStamp,
    volume,
    setVolume,
  } = useAppStore();
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="w-full mx-auto text-white">
      <div className="flex items-center mb-2">
        <button className="mr-4 " onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <FaPause className="text-white" />
          ) : (
            <FaPlay className="text-white" />
          )}
        </button>
        <div className="flex-grow">
          <input
            type="range"
            min="0"
            max={totalDuration}
            value={currentTimeStamp}
            onChange={(e) => {
              setIsPlaying(false); //pause the player when you're seeking the video
              setCurrentTimeStamp(parseFloat(e.target.value));
            }}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {formatTime(currentTimeStamp)} / {formatTime(totalDuration)}
        </div>
        <div className="flex items-center">
          <button className="mr-4 focus:outline-none">
            {volume === 0 ? <IoVolumeMuteSharp /> : <IoVolumeHigh />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            id="volume"
            value={volume}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex items-center gap-5 pl-3 mt-3">
        <PlaybackSpeedControl />
        <select className="px-2 py-1 text-sm text-white bg-gray-700 rounded focus:outline-none">
          <option>Aspect Ratio 3:16</option>
          <option>9:16</option>
          <option>1:1</option>
        </select>
      </div>
    </div>
  );
};

export default VideoControls;
const PlaybackSpeedControl = () => {
  const { playbackRate, setPlaybackRate } = useAppStore();
  const [open, setOpen] = React.useState(false);
  const speeds = [
    { label: "0.5x", value: 0.5 },
    { label: "0.75x", value: 0.75 },
    { label: "1x", value: 1 },
    { label: "1.25x", value: 1.25 },
    { label: "1.5x", value: 1.5 },
    { label: "2x", value: 2 },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative px-4 py-2 text-xs font-medium text-white bg-transparent rounded-md hover: focus:outline-none ring-2 ring-tertiary w-[180px]"
      >
        Playback speed <span className="text-tertiary">{playbackRate}x</span>
      </button>
      {open && (
        <div className="absolute w-[180px] h-20 overflow-x-hidden overflow-y-scroll bg-transparent top-8 scrollbar-custom scrollbar-blue scrollbar-thin">
          <div className="">
            {speeds.map((speed) => (
              <div
                key={speed.value}
                onClick={() => {
                  setPlaybackRate(speed.value);
                  setOpen(false);
                }}
                className="w-full px-3 py-2 text-xs text-block text-tertiary hover:bg-secondary"
              >
                {speed.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
