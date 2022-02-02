import tw, { css, styled } from "twin.macro";

export const SpinnerWrapperStyled = styled.div<{ fullscreen?: boolean }>(
  ({ fullscreen }) => [
    tw`flex items-center justify-center z-max backdrop-blur-sm absolute w-full h-full`,
    css`
      position: ${fullscreen ? "fixed" : "absolute"};
      bottom: 0;
      left: 0;
      backdrop-filter: blur(0.2rem);
    `,
  ]
);
