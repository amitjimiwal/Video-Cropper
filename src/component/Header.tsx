import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center w-full px-3 py-5">
      <h1 className="px-3 py-2 text-xl font-bold text-primary">Cropper</h1>
      <div className="flex justify-center w-full text-center">
        <div className="flex px-2 py-1 text-sm bg-secondary rounded-xl text-primary">
          <button className="px-3 py-2">Preview Session</button>
          <button className="px-3 py-2 selected">Generate session</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
