import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body{
    font-family: "League Spartan", sans-serif;
    min-height: 100vh;
}`;
