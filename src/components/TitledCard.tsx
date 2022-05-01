import Stack from "./Stack";

import type { FC } from "react";

type Props = {
  title: string;
};

const TitledCard: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Stack>{children}</Stack>
    </div>
  );
};

export default TitledCard;
