import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    /* @font-face {
        src: url(../src/fonts/GraphikRegular.otf);
        font-family: GraphikRegular;
    } */

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #181818;
        /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
        font-family: 'Be Vietnam Pro', sans-serif;
    }
`;

export default GlobalStyle;
