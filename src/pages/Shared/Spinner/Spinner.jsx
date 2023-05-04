import React, { useContext } from 'react';
import { useState, CSSProperties } from "react";
import { BeatLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "orange",
};

function Spinner() {
    // const {loading} = useContext;
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">

      <ClipLoader
        color={color}
        // loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;