import { css } from "@emotion/react";

// Corrected buttonStyle with backticks
const buttonStyle = css`
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
`;

function EmotionExample() {
  console.log("Button Style", buttonStyle);
  return <button css={buttonStyle}>Emotion Button</button>;
}

export default EmotionExample;
