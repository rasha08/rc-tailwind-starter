import React, { memo } from "react";

const RegisterPage = () => {
  return (
    <>
      <ul className="w-full steps">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
      RegisterPage
    </>
  );
};

export default memo(RegisterPage);
