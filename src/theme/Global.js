import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  html {
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.black};
    }
  }
`}
`;
