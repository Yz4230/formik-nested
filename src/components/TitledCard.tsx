import type { FC } from "react";

type Props = {
  title: string;
};

const TitledCard: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default TitledCard;
