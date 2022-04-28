import styled from "@emotion/styled";

import Input from "./Input";

import type { FormikErrors } from "formik";
import type { FC } from "react";

export type AddressValues = {
  country: string;
  city: string;
  zipcode: string;
  building: string;
};

export const validateAddress = (values: AddressValues) => {
  const errors: FormikErrors<AddressValues> = {};
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

const Stack = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5em",
});

type Props = {
  name?: string;
  values: AddressValues;
  errors?: FormikErrors<AddressValues>;
  handleChange: (e: React.ChangeEvent) => void;
};

const AddressFields: FC<Props> = ({ name, values, errors, handleChange }) => {
  const getName = (key: string) => {
    if (name) {
      return `${name}.${key}`;
    }
    return key;
  };

  return (
    <Stack>
      <Input
        label="Country"
        name={getName("country")}
        value={values.country}
        error={errors?.country}
        onChange={handleChange}
      />
      <Input
        label="City"
        name={getName("city")}
        value={values.city}
        error={errors?.city}
        onChange={handleChange}
      />
      <Input
        label="Zipcode"
        name={getName("zipcode")}
        value={values.zipcode}
        error={errors?.zipcode}
        onChange={handleChange}
      />
      <Input
        label="Building"
        name={getName("building")}
        value={values.building}
        error={errors?.building}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default AddressFields;
