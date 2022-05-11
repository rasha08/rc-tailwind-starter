import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller , ControllerFieldState} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "../validation/loginValidationSchema";
import { AuthPrimaryActionButtonStyled } from "../styled/auth.styled";
import { Input } from "../../../common/components/Input/Input";

export type LoginFormData = Record<"username" | "password", string>;

type LoginFormProps = {
  onSubmit: (data: LoginFormData) => void;
};

export const LoginForm: FC<LoginFormProps> = () => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginValidationSchema(t)),
  });

  return (
    <>
      <div>
        <Controller
          control={control}
          name={"username"}
          render={(props) => <Input label={"form.username.label"} {...props} />}
        />
      </div>
      <div>
        <Controller
          control={control}
          name={"password"}
          render={(props) => (
            <Input
              label={"form.password.label"}
              type={"password"}
              placeholder={"********"}
              {...props}
            />
          )}
        />
      </div>
      <div className="grid  gap-8 mt-4">
        <AuthPrimaryActionButtonStyled
          onClick={handleSubmit(console.dir, console.error)}
        >
          Login
        </AuthPrimaryActionButtonStyled>
      </div>
    </>
  );
};
