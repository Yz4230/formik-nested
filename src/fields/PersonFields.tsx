import { number, object, string } from "yup";

import Input from "../components/Input";
import Stack from "../components/Stack";

import type { FieldsProps } from "../types";
import type { FC } from "react";

export type PersonValues = {
  firstName: string;
  lastName: string;
  age: string;
};

export const personValidationSchema = object({
  firstName: string().required("Required"),
  lastName: string().required("Required"),
  age: number()
    .required("Required")
    .min(0, "Age should be more than 0")
    .max(120, "Age should be less than 120"),
});

type Props = FieldsProps<PersonValues>;

const PersonFields: FC<Props> = ({ values, errors, onChange }) => {
  return (
    <Stack>
      <Input
        label="First Name"
        name="firstName"
        value={values.firstName}
        error={errors?.firstName}
        onChange={(e) => {
          onChange({ ...values, firstName: e.target.value });
        }}
      />
      <Input
        label="Last Name"
        name="lastName"
        value={values.lastName}
        error={errors?.lastName}
        onChange={(e) => {
          onChange({ ...values, lastName: e.target.value });
        }}
      />
      <Input
        label="Age"
        name="age"
        type="number"
        value={values.age}
        error={errors?.age}
        onChange={(e) => {
          onChange({ ...values, age: e.target.value });
        }}
      />
    </Stack>
  );
};

export default PersonFields;
