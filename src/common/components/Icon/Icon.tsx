import React, { FC, memo } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Icon: FC<FontAwesomeIconProps> = ({ children, ...props }) => {
  return <FontAwesomeIcon {...props} />;
};

export default memo(Icon);
