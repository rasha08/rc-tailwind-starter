import tw, { styled } from "twin.macro";

export const AuthLayoutStyled = styled.div(() => [
  tw`grid h-app justify-center content-center w-screen`,
]);

export const AuthModalStyled = styled.div(() => [
  tw`grid gap-3 rounded bg-white px-10 py-5  shadow-lg min-w-md border border-gray-100`,
]);

export const AuthPrimaryActionButtonStyled = styled.button(() => [
  tw`bg-primary-400 text-white p-2 rounded shadow-md rounded-md`,
]);
