import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import { SpinnerWrapperStyled } from "./spinner.styled";

type SpinnerProps = {
  fullscreen?: boolean;
  size?: "sm" | "normal";
};

const StyledSpinner = styled.div<Pick<SpinnerProps, "size">>(
  ({ size = "normal" }) => [
    tw`border-t-4 border-b-4 border-primary-900 rounded-full animate-spin`,
    size === "sm" && tw`w-20 h-20`,
    size === "normal" && tw`w-40 h-40`,
  ]
);

export const Spinner: FC<SpinnerProps> = ({ fullscreen, size }) => {
  return (
    <SpinnerWrapperStyled fullscreen={fullscreen}>
      <StyledSpinner size={size} />
    </SpinnerWrapperStyled>
  );
};
