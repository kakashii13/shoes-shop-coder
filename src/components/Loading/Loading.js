import React from "react";

const Loading = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
