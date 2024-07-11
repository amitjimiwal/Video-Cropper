import "./App.css";
import Button from "./Button";
import Header from "./component/Header";
import NoPreview from "./component/NoPreview";
import VideoControls from "./component/VideoControls";

function App() {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header UI */}
      <Header />
      {/* Video UI */}
      <section className="h-[600px] flex w-full">
        <section className="w-1/2 px-10 py-7 ">
          <video src="/t20.mp4" controls={false} className="w-full" />
          <VideoControls />
        </section>
        <section className="w-1/2 px-10 py-7 ">
          <h5 className="text-center text-tertiary">Preview</h5>
          {/* No preview  */}
          <NoPreview />
        </section>
      </section>
      {/* Cropper Controls */}
      <CropperControls />
    </div>
  );
}

export default App;
function CropperControls() {
  return (
    <div className="flex flex-wrap items-center justify-start gap-2 px-4 py-2 rounded-lg">
      <Button>Start Cropper</Button>
      <Button>Remove Cropper</Button>
      <Button>Generate Preview</Button>
      <div className="flex-grow"></div>
      <button className="px-4 py-2 text-sm font-medium text-gray-300 rounded-md bg-secondary hover:text-white focus:outline-none">
        Cancel
      </button>
    </div>
  );
}
