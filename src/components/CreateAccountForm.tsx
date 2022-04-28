import styled from "@emotion/styled";
import { useFormik } from "formik";
import { object } from "yup";

import Stack from "./Stack";

import AddressFields, {
  addressValidationSchema,
} from "../fields/AddressFields";
import PersonFields, { personValidationSchema } from "../fields/PersonFields";

import type { AddressValues } from "../fields/AddressFields";
import type { PersonValues } from "../fields/PersonFields";
import type { FC } from "react";

const Right = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});

export type CreateAccoutFormValues = {
  person: PersonValues;
  address: AddressValues;
};

type Props = {
  onSubmit: (values: CreateAccoutFormValues) => void;
};

const CreateAccountForm: FC<Props> = ({ onSubmit }) => {
  const formik = useFormik<CreateAccoutFormValues>({
    initialValues: {
      person: {
        firstName: "",
        lastName: "",
        age: "",
      },
      address: {
        country: "",
        city: "",
        zipcode: "",
        building: "",
      },
    },
    validationSchema: object({
      person: personValidationSchema,
      address: addressValidationSchema,
    }),
    validateOnChange: false,
    onSubmit,
  });

  return (
    <Stack>
      <h1>Create Account</h1>
      <form css={{ width: "20em" }} onSubmit={formik.handleSubmit}>
        <Stack>
          <h2>Your Information</h2>
          <PersonFields
            values={formik.values.person}
            errors={formik.errors.person}
            onChange={(values) => formik.setFieldValue("person", values)}
          />
          <h2>Address</h2>
          <AddressFields
            values={formik.values.address}
            errors={formik.errors.address}
            onChange={(values) => {
              formik.setFieldValue("address", values);
            }}
          />
          <Right>
            <button type="submit">Submit</button>
          </Right>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateAccountForm;
