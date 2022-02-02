import React, { FC } from "react";

type RememberedUserCardProps = {
  data: Record<"username" | "avatar", string> | null;
  onSelect: () => void;
};

export const RememberedUserCard: FC<RememberedUserCardProps> = () => {
  return <></>;
};
