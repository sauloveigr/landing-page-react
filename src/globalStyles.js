import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #181818;
        font-family: 'Be Vietnam Pro', sans-serif;
    }

    :root {
    --base-color: #4452fe
    --light-color: #fff

}
`;

export default GlobalStyle;
