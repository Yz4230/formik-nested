import styled from "@emotion/styled";
import { useFormik } from "formik";

import Stack from "./Stack";
import TitledCard from "./TitledCard";

import AddressFields, { validateAddress } from "../fields/AddressFields";
import PaymentFields, { validatePayment } from "../fields/PaymentFields";
import PersonFields, { validatePerson } from "../fields/PersonFields";

import type { AddressValues } from "../fields/AddressFields";
import type { PaymentValues } from "../fields/PaymentFields";
import type { PersonValues } from "../fields/PersonFields";
import type { FormikErrors } from "formik";
import type { FC } from "react";

const Right = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});

export type CreateAccoutFormValues = {
  person: PersonValues;
  address: AddressValues;
  payment: PaymentValues;
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
        age: 20,
      },
      address: {
        country: "",
        city: "",
        zipcode: "",
        building: "",
      },
      payment: {
        paymentOption: "inFull",
      },
    },
    validate: (values) => {
      const errors: FormikErrors<CreateAccoutFormValues> = {};

      const personErrors = validatePerson(values.person);
      if (Object.keys(personErrors).length > 0) {
        errors.person = personErrors;
      }

      const addressErrors = validateAddress(values.address);
      if (Object.keys(addressErrors).length > 0) {
        errors.address = addressErrors;
      }

      const paymentErrors = validatePayment(values.payment);
      if (Object.keys(paymentErrors).length > 0) {
        errors.payment = paymentErrors;
      }

      return errors;
    },
    validateOnChange: false,
    onSubmit,
  });

  return (
    <Stack>
      <h1>Create Account</h1>
      <form css={{ width: "20em" }} onSubmit={formik.handleSubmit}>
        <Stack>
          <TitledCard title="Your Information">
            <PersonFields
              values={formik.values.person}
              errors={formik.errors.person}
              onChange={(values) => formik.setFieldValue("person", values)}
            />
          </TitledCard>
          <TitledCard title="Address">
            <AddressFields
              values={formik.values.address}
              errors={formik.errors.address}
              onChange={(values) => formik.setFieldValue("address", values)}
            />
          </TitledCard>
          <TitledCard title="Payment">
            <PaymentFields
              values={formik.values.payment}
              errors={formik.errors.payment}
              onChange={(values) => formik.setFieldValue("payment", values)}
            />
          </TitledCard>
          <Right>
            <button type="submit">Submit</button>
          </Right>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateAccountForm;
