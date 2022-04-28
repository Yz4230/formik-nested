import type { FC } from "react";

type Props = {
  label: string;
  error?: string;
} & JSX.IntrinsicElements["input"];

const Input: FC<Props> = ({ label, error, ...props }) => {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <div css={{ display: "flex" }}>
        <label css={{ flex: 1 }}>{label}</label>
        <input {...props} />
      </div>
      {error && (
        <div
          css={{
            color: "red",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
