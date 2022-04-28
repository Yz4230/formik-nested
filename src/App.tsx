import styled from "@emotion/styled";
import { useState } from "react";

import CreateAccountForm from "./components/CreateAccountForm";

import type { CreateAccoutFormValues } from "./components/CreateAccountForm";

const Container = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  const [submitValue, setSubmitValue] = useState<CreateAccoutFormValues>();

  return (
    <Container>
      <CreateAccountForm onSubmit={setSubmitValue} />
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
