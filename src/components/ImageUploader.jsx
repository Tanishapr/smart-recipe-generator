import React, { useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export default function ImageUploader({ onDetected }) {
  const imgRef = useRef();

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    imgRef.current.src = url;

    const model = await mobilenet.load();
    const predictions = await model.classify(imgRef.current);
    onDetected(predictions); // array of {className, probability}
  }

  return (
    <div style={{ marginTop: 12 }}>
      <input type="file" accept="image/*" onChange={handleFile} />
      <img ref={imgRef} alt="uploaded" style={{ display: "none" }} />
    </div>
  );
}