import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  overflow?: string;
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`

html,body{
  overflow: ${(props) => (props.overflow ? props.overflow : "visible")};

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  text-decoration: none;
  list-style: none;
  font-family: sans-serif;
  scroll-behavior: smooth;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
}
body,
input,
button,
textarea {
  font-family: sans-serif;
  font-family: "Montserrat", sans-serif;
}

button,
a {
  cursor: pointer;
}
`;
