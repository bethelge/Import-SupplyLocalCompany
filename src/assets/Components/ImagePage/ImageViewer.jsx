// src/components/ImageDisplay.jsx
import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ImageDisplay() {
  const location = useLocation();
  const { imageUrls = [] } = location.state || {};

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Explore Product</h2>
      {imageUrls.length > 0 ? (
        imageUrls.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`product-${i}`}
            style={{ width: "80%", maxWidth: "600px", marginBottom: "20px" }}
          />
        ))
      ) : (
        <p>No image provided</p>
      )}
    </div>
  );
}

export default ImageDisplay;
