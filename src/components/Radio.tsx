import type { FC } from "react";

type Props = {
  label: string;
} & JSX.IntrinsicElements["input"];

const Radio: FC<Props> = ({ label, ...props }) => {
  return (
    <div>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
};

export default Radio;
