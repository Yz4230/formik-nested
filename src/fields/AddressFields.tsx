import Input from "../components/Input";
import Stack from "../components/Stack";

import type { Errors, FieldsProps } from "../types";
import type { FC } from "react";

export type AddressValues = {
  country: string;
  city: string;
  zipcode: string;
  building: string;
};

export const validateAddress = (values: AddressValues) => {
  const errors: Errors<AddressValues> = {};
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.zipcode) {
    errors.zipcode = "Required";
  } else if (!/\d{7}/.test(values.zipcode)) {
    errors.zipcode = "Zipcode should have 7 numbers";
  }
  if (!values.building) {
    errors.building = "Required";
  }
  return errors;
};

type Props = FieldsProps<AddressValues>;

const AddressFields: FC<Props> = ({ values, errors, onChange }) => {
  return (
    <Stack>
      <Input
        label="Country"
        name="country"
        value={values.country}
        error={errors?.country}
        onChange={(e) => {
          onChange({ ...values, country: e.target.value });
        }}
      />
      <Input
        label="City"
        name="city"
        value={values.city}
        error={errors?.city}
        onChange={(e) => {
          onChange({ ...values, city: e.target.value });
        }}
      />
      <Input
        label="Zipcode"
        name="zipcode"
        value={values.zipcode}
        error={errors?.zipcode}
        onChange={(e) => {
          onChange({ ...values, zipcode: e.target.value });
        }}
      />
      <Input
        label="Building"
        name="building"
        value={values.building}
        error={errors?.building}
        onChange={(e) => {
          onChange({ ...values, building: e.target.value });
        }}
      />
    </Stack>
  );
};

export default AddressFields;
