import * as yup from "yup";
import { profileConstrains } from "../../../common/constrains/profileConstrains";
import { TFunction } from "react-i18next";

export const loginValidationSchema = (translate: TFunction) => {
  return yup.object({
    username: yup
      .string()
      .min(
        profileConstrains.minUsernameLength,
        translate("form.username.length", {
          min: profileConstrains.minUsernameLength,
        })
      )
      .required(translate("form.username.required")),
    password: yup
      .string()
      .min(
        profileConstrains.minPasswordLength,
        translate("form.password.length", {
          min: profileConstrains.minPasswordLength,
        })
      )
      .required(translate("form.password.required")),
  });
};
