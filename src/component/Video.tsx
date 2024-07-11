// import React from "react";
// import useAppStore from "../store/videostore";

// const VIdeo = React.forwardRef<HTMLVideoElement>(
//   (props, ref: React.MutableRefObject<HTMLVideoElement | null>) => {
//     const { setTotalDuration, setCurrentTimeStamp } = useAppStore();
//     return (
//       <video
//         src="/t20.mp4"
//         controls={false}
//         className="w-full"
//         ref={ref}
//         onLoadedMetadata={() => {
//           setTotalDuration(ref?.current?.duration || 0);
//         }}
//         onTimeUpdate={() => {
//           setCurrentTimeStamp(ref?.current?.currentTime || 0);
//         }}
//       />
//     );
//   }
// );

// //create a forward ref for video
// export default VIdeo;
