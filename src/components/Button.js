import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 mx-2 font-semibold rounded-md bg-slate-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
