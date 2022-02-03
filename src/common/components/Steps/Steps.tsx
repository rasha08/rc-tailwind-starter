import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  StepConnectorStyled,
  StepIconStyled,
  StepStyled,
  StepTitleStyled,
} from "./steps.styled";
import Icon from "../Icon/Icon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export type Step = {
  icon: JSX.Element;
  title: string;
};

export type StepsProps = {
  steps: Step[];
  current: number;
};

type StepProps = {
  icon: JSX.Element;
  title: string;
  active: boolean;
  completed: boolean;
};
const SingleStep: FC<StepProps> = ({ icon, title, active, completed }) => {
  const { t } = useTranslation();
  return (
    <div className="text-center px-6 flex-1">
      <StepStyled active={active} completed={completed}>
        <StepIconStyled active={active} completed={completed}>
          {icon}
        </StepIconStyled>
        <StepTitleStyled active={active} completed={completed}>
          <h2 className="font-bold text-sm">{t(title)}</h2>
        </StepTitleStyled>
      </StepStyled>
    </div>
  );
};

const StepConnector: FC<Record<"total" | "current" | "index", number>> = ({
  total,
  current,
  index,
}) => {
  if (index === total - 1) return null;

  return (
    <StepConnectorStyled
      active={current === index + 1}
      completed={current > index + 1}
    >
      <Icon icon={faArrowRight} />
    </StepConnectorStyled>
  );
};

export const Steps: FC<StepsProps> = ({ steps, current }) => {
  return (
    <div className="flex pb-2 border-b border-gray-100">
      {steps.map(({ title, icon }, index) => (
        <>
          <SingleStep
            key={title}
            title={title}
            icon={icon}
            active={current === index}
            completed={current > index}
          />
          <StepConnector index={index} total={steps.length} current={current} />
        </>
      ))}
    </div>
  );
};
