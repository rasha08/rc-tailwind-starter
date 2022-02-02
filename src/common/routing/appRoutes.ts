import { RoutePath } from "../consts/route-path";
import { env } from "../config/env";
import LoginPage from "../../views/anon/pages/LoginPage";
import { UserRole } from "../enums/UserRole";
import RegisterPage from "../../views/anon/pages/RegisterPage";

export const AppRoutes = [
  {
    path: RoutePath.home.locale[env.locale],
    component: LoginPage,
    authProtected: false,
    roles: [UserRole.Learner, UserRole.Sponsor],
    exact: true,
  },
  {
    path: RoutePath.home.sub.register.locale[env.locale],
    component: RegisterPage,
    authProtected: false,
    roles: [UserRole.Sponsor],
    exact: true,
  },
];
