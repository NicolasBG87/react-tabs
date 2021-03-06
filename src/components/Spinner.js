import React from "react";

const Spinner = () => {
  return (
    <svg
      width="200px"
      height="200px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-ripple"
      style={{ background: "none" }}
    >
      <circle
        cx="50"
        cy="50"
        r="33.5569"
        fill="none"
        stroke="#facd9e"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;40"
          keyTimes="0;1"
          dur="1"
          keySplines="0 0.2 0.8 1"
          begin="-0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="1"
          keySplines="0.2 0 0.8 1"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="14.0218"
        fill="none"
        stroke="#389798"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          values="0;40"
          keyTimes="0;1"
          dur="1"
          keySplines="0 0.2 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          values="1;0"
          keyTimes="0;1"
          dur="1"
          keySplines="0.2 0 0.8 1"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Spinner;
