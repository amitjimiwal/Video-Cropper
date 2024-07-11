import React from "react";
import clsx from "clsx";
const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 text-sm font-medium text-white rounded-md bg-purple hover: focus:outline-none ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
