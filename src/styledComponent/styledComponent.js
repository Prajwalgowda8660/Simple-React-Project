import { ButtonGroup } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components"; // Correct import

// Corrected Button component
const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : grey[500])};
  color: white;
  padding: 10px 20px;
  border: none; /* Corrected 'bonder' to 'border' */
  border-radius: 3px;
`;

// Corrected DangerButton component
const DangerButton = styled(Button)`
  background: red;
`;

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
      <DangerButton>Danger Button</DangerButton>
    </div>
  );
}

export default App;
