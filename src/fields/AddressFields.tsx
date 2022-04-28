import { object, string } from "yup";

import Input from "../components/Input";
import Stack from "../components/Stack";

import type { FieldsProps } from "../types";
import type { FC } from "react";

export type AddressValues = {
  country: string;
  city: string;
  zipcode: string;
  building: string;
};

export const addressValidationSchema = object({
  country: string().required("Required"),
  city: string().required("Required"),
  zipcode: string()
    .required("Required")
    .matches(/\d{7}/, "Zipcode should have 7 numbers"),
  building: string().required("Required"),
});

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
