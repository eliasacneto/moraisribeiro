// components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
