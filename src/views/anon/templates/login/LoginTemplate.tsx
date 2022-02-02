import React, { FC, memo, useState } from "react";
import { AuthLayoutStyled, AuthModalStyled } from "../../styled/auth.styled";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";

const LoginTemplate: FC<Record<"rememberedAccount", boolean>> = ({
  rememberedAccount,
}) => {
  const [useExisting] = useState(rememberedAccount);

  return (
    <AuthLayoutStyled>
      <AuthModalStyled>
        <h1 className={"text-center text-gray-950 text-2xl"}>Welcome Back!</h1>
        <p className={"text-gray-700 text-regular text-center -mt-2 mb-4"}>
          Don{"'"}t have an account yet?{" "}
          <Link
            className={"text-primary-800 underline font-bolder"}
            to={"/register"}
          >
            Register
          </Link>
        </p>
        {!useExisting && <LoginForm onSubmit={console.log} />}
        {useExisting && <LoginForm onSubmit={console.log} />}

        <p className={"mb-5 mt-2 text-gray-500 text-regular"}>
          Forgot password?{" "}
          <Link className={"text-primary-800"} to={"/forgot-password"}>
            Click Here
          </Link>
        </p>
      </AuthModalStyled>
    </AuthLayoutStyled>
  );
};

export default memo(LoginTemplate);
