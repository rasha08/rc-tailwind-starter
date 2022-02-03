import React, { memo, useMemo, useState } from "react";
import { Step, Steps } from "../../../common/components/Steps/Steps";
import { AuthLayoutStyled, AuthModalStyled } from "../styled/auth.styled";
import Icon from "../../../common/components/Icon/Icon";
import {
  faCreditCard,
  faUser,
  faLeaf,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  const [currentStep, setCurrrentStep] = useState(2);
  const steps: Step[] = useMemo(
    () => [
      { title: "register.personalInfo", icon: <Icon icon={faUser} /> },
      { title: "register.confirmEmail", icon: <Icon icon={faEnvelope} /> },
      { title: "register.learners", icon: <Icon icon={faLeaf} /> },
      { title: "register.payments", icon: <Icon icon={faCreditCard} /> },
    ],
    []
  );

  return (
    <>
      <AuthLayoutStyled>
        <AuthModalStyled>
          <Steps steps={steps} current={currentStep} />
        </AuthModalStyled>
      </AuthLayoutStyled>
    </>
  );
};

export default memo(RegisterPage);
