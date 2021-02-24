import React from "react";

const BuildControl = (props) => (
  <div className="flex justify-between items-center">
    <div className="p-4 font-bold w-40 text-white uppercase">{props.label}</div>
    <button
      className="block inherit p-2 mx-2 w-36 bg-gray-500 shadow rounded border-2 border-gray-300 text-white my-4 hover:bg-yellow-400"
      onClick={props.removed}
    >
      Less
    </button>
    <button
      className="block inherit p-2 mx-2 w-36 bg-gray-700 shadow rounded border-2 border-gray-300 text-white my-4 hover:bg-yellow-600"
      onClick={props.added}
    >
      More
    </button>
  </div>
);

export default BuildControl;
