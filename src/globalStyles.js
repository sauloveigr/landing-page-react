import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${Colors.dark};
        font-family: 'Be Vietnam Pro', sans-serif;
    }

    :root {
    --base-color: #4452fe
    --light-color: #fff

}
`;

export default GlobalStyle;
