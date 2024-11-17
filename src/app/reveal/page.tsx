"use client";
import React, { useState } from "react";

// type Props = {}

const Reveal = () => {
  const [inputState, setInputState] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold mt-2">
        Looking to Reveal Your Identity?
      </h1>
      <p className="mt-2">
        Enter your token here & de-anonymize yourself to people that match with
        you!{" "}
      </p>

      <input
        type="text"
        className="mt-4 p-2 border-gray-400 border-2 rounded-lg w-full"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        placeholder="Enter your user token"
      />

      <button
        onClick={handleSubmit}
        className="mt-4 p-4 border-white border-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all"
      >
        De-anonymize!
      </button>
    </div>
  );
};

export default Reveal;
