import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId;
    return (
      <div className="w-full">
        {label && (
          <label className="inline-blok mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          type={type}
          id={id}
          {...props}
          ref={ref}
          className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        ></input>
      </div>
    );
  }
);

export default Input;
