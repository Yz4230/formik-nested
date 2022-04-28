import styled from "@emotion/styled";
import { useFormik } from "formik";

import AddressFields, { validateAddress } from "./fields/AddressFields";

import type { AddressValues } from "./fields/AddressFields";
import type { FormikErrors } from "formik";
import { useState } from "react";
import PersonFields, {
  PersonValues,
  validatePerson,
} from "./fields/PersonFields";

const Container = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Right = styled.div({
  display: "flex",
  justifyContent: "flex-end",
});

type Form = {
  person: PersonValues;
  address: AddressValues;
};

function App() {
  const [submitValue, setSubmitValue] = useState<Form>();

  const formik = useFormik<Form>({
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
    },
    validate: (values) => {
      const errors: FormikErrors<Form> = {};

      const personErrors = validatePerson(values.person);
      if (Object.keys(personErrors).length > 0) {
        errors.person = personErrors;
      }

      const addressErrors = validateAddress(values.address);
      if (Object.keys(addressErrors).length > 0) {
        errors.address = addressErrors;
      }
      return errors;
    },
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
      setSubmitValue(values);
    },
  });

  return (
    <Container>
      <form css={{ width: "20em" }} onSubmit={formik.handleSubmit}>
        <PersonFields
          values={formik.values.person}
          errors={formik.errors.person}
          onChange={(values) => formik.setFieldValue("person", values)}
        />
        <AddressFields
          values={formik.values.address}
          errors={formik.errors.address}
          onChange={(values) => {
            formik.setFieldValue("address", values);
          }}
        />
        <Right css={{ marginTop: "1em" }}>
          <button type="submit">Submit</button>
        </Right>
      </form>
      {submitValue && (
        <div css={{ marginTop: "1em" }}>
          <code>
            <pre>{JSON.stringify(submitValue, null, 2)}</pre>
          </code>
        </div>
      )}
    </Container>
  );
}

export default App;
