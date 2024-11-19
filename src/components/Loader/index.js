import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        height="80"
        width="80"
        color="darkcyan"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
