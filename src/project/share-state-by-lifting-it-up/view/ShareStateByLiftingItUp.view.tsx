import React, { useState } from "react";
import styled from "styled-components";
import { Child } from "../components";

const ShareStateByLiftingItUp: React.FC = () => {
  const [resultText, setResultText] = useState("");

  return (
    <main>
      <Section>
        <Layer>
          <Child onClick={setResultText} />
          <SubmitText>{resultText}</SubmitText>
        </Layer>
      </Section>
    </main>
  );
};

export default ShareStateByLiftingItUp;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Layer = styled.div``;

const SubmitText = styled.div`
  margin-top: 20px;
`;
