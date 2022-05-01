import Radio from "../components/Radio";

import type { FieldsProps } from "../types";
import type { FC } from "react";

export type PaymentValues = {
  paymentOption: "inFull" | "inParts";
};

type Props = FieldsProps<PaymentValues>;

const PaymentFields: FC<Props> = ({ values, onChange }) => {
  return (
    <div css={{ display: "flex", gap: "0.5em" }}>
      <Radio
        id="paymentOptionInFull"
        label="In Full"
        checked={values.paymentOption === "inFull"}
        onChange={() => onChange({ paymentOption: "inFull" })}
      />
      <Radio
        id="paymentOptionInParts"
        label="In Parts"
        checked={values.paymentOption === "inParts"}
        onChange={() => onChange({ paymentOption: "inParts" })}
      />
    </div>
  );
};

export default PaymentFields;
