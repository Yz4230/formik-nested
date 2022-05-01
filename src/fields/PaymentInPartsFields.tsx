import Input from "../components/Input";
import Stack from "../components/Stack";

import type { FieldsProps } from "../types";
import type { FC } from "react";

export type PaymentInPartsValues = {
  paymentParts: number;
};

type Props = FieldsProps<PaymentInPartsValues>;

const PaymentInPartsFields: FC<Props> = ({ values, errors, onChange }) => {
  return (
    <Stack>
      <Input
        type="number"
        label="Number of parts"
        value={values.paymentParts}
        error={errors?.paymentParts}
        onChange={(e) => onChange({ paymentParts: Number(e.target.value) })}
      />
    </Stack>
  );
};

export default PaymentInPartsFields;
