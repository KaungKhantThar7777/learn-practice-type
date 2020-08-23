import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        font-family:sans-serif;
        font-weight:300;
        color:#333;
    }
    h1,h2{
        margin-bottom:1rem;
    }
`;
