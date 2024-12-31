import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="loader">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
