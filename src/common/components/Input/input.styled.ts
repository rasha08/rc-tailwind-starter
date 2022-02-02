import tw, { styled } from "twin.macro";

export const InputStyled = styled.input<Record<"invalid", boolean>>(
  ({ invalid }) => [
    tw`border w-full h-10 px-3 rounded-md focus:border-primary-600 focus:outline-none`,
    invalid && tw`border-error-600 bg-error-500alpha15`,
  ]
);
