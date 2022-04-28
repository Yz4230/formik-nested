import styled from "@emotion/styled";
import { useFormik } from "formik";

import AddressFields, { validateAddress } from "./AddressFields";

import type { AddressValues } from "./AddressFields";
import type { FormikErrors } from "formik";
import { useState } from "react";

const Container = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
});

type Form = {
  address: AddressValues;
};

function App() {
  const [submitValue, setSubmitValue] = useState<Form>();

  const formik = useFormik<Form>({
    initialValues: {
      address: {
        country: "",
        city: "",
        zipcode: "",
        building: "",
      },
    },
    validate: (values) => {
      const errors: FormikErrors<Form> = {};
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
        <AddressFields
          values={formik.values.address}
          errors={formik.errors.address}
          onChange={(values) => {
            formik.setFieldValue("address", values);
          }}
        />
        <div
          css={{
            marginTop: "1em",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button type="submit">Submit</button>
        </div>
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
