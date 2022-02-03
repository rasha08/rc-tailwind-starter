import tw, { styled } from "twin.macro";

export const StepStyled = styled.div<Record<"active" | "completed", boolean>>(
  ({ active, completed }) => [
    tw`bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200`,
    active && tw`bg-primary-500alpha15`,
    completed && tw`bg-success-500alpha15`,
  ]
);

export const StepTitleStyled = styled.div<
  Record<"active" | "completed", boolean>
>(({ active, completed }) => [
  tw`w-2/3 bg-gray-200 h-10 flex flex-col items-center justify-center px-1 rounded-r-lg`,
  active && tw`bg-primary-500alpha15`,
  completed && tw`bg-success-500alpha15`,
]);

export const StepConnectorStyled = styled.div<
  Record<"active" | "completed", boolean>
>(({ active, completed }) => [
  tw`flex items-center text-gray-300`,
  active && tw`text-primary-500`,
  completed && tw`text-success-500`,
]);

export const StepIconStyled = styled.div<
  Record<"active" | "completed", boolean>
>(({ active, completed }) => [
  tw`w-1/3 bg-transparent h-10 flex items-center justify-center text-gray-500`,
  active && tw`text-primary-500`,
  completed && tw`text-success-500`,
]);
