import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${Colors.dark};
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 100%;

        @media (max-width: 480px) {
            overflow-x: hidden;
        }
    }
`;

export default GlobalStyle;
