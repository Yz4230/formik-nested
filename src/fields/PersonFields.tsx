import Input from "../components/Input";
import Stack from "../components/Stack";

import type { Errors, FieldsProps } from "../types";
import type { FC } from "react";

export type PersonValues = {
  firstName: string;
  lastName: string;
  age: number;
};

export const validatePerson = (values: PersonValues) => {
  const errors: Errors<PersonValues> = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (values.age < 0 || values.age > 120) {
    errors.age = "Age should be between 0 and 120";
  }
  return errors;
};

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
          onChange({ ...values, age: Number(e.target.value) });
        }}
      />
    </Stack>
  );
};

export default PersonFields;
