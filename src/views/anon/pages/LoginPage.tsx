import React, { memo, useMemo } from "react";
import LoginTemplate from "../templates/login/LoginTemplate";
import { useLocation } from "react-router-dom";
import { isRememberedUser } from "../factories/isRememberedUser";

const LoginPage = () => {
  const { search } = useLocation();
  const rememberedAccount = useMemo(() => isRememberedUser(search), [search]);

  return <LoginTemplate rememberedAccount={rememberedAccount} />;
};

export default memo(LoginPage);
