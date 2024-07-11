import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoControls: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(40.98);

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
        <button className="mr-4 ">
          <FaPlay className="text-white" />
        </button>
        <div className="flex-grow">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <div className="flex items-center">
          <button className="mr-4 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={50}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 px-3 py-2">
        <select className="px-2 py-1 mr-2 text-sm text-white bg-gray-700 rounded focus:outline-none">
          <option>0.25x</option>
          <option>0.5x</option>
          <option>0.75x</option>
          <option>1x</option>
          <option>1.25x</option>
          <option>1.5x</option>
          <option>2x</option>
          <option>2.5x</option>
        </select>
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
