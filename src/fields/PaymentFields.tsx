import Input from "../components/Input";
import Radio from "../components/Radio";
import Stack from "../components/Stack";

import type { Errors, FieldsProps } from "../types";
import type { FC } from "react";

export type PaymentValues = {
  paymentOption: "inFull" | "inParts";
  /**
   * @description 支払い回数
   * `paymentOption` が `inParts` の場合に有効
   */
  paymentParts?: string;
};

export const validatePayment = (values: PaymentValues) => {
  const errors: Errors<PaymentValues> = {};
  if (values.paymentOption === "inParts") {
    if (!values.paymentParts) {
      errors.paymentParts = "Required";
    } else if (!/\d+/.test(values.paymentParts)) {
      errors.paymentParts = "Invalid number";
    } else if (Number(values.paymentParts) < 2) {
      errors.paymentParts = "Should be greater than 1";
    }
  }
  return errors;
};

type Props = FieldsProps<PaymentValues>;

const PaymentFields: FC<Props> = ({ values, errors, onChange }) => {
  return (
    <Stack>
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
      {values.paymentOption === "inParts" && (
        <Input
          label="Payment Parts"
          name="paymentParts"
          value={values.paymentParts}
          error={errors?.paymentParts}
          onChange={(e) => {
            onChange({ ...values, paymentParts: e.target.value });
          }}
        />
      )}
    </Stack>
  );
};

export default PaymentFields;
