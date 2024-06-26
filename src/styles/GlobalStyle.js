import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
html {
  // 1rem = 10px
  font-size:62.5%;
}
body{
  width: 100vw;
  height: 100vh;
  padding: 0px 20rem;
  background-image: url("/src/assets/bg.png");
  background-size: cover;
  background-position: center center;
  font-family: "SbAggroM";
  color: white;
  transition: padding 0.5s linear;
}
#root {
  width: 100%;
  height: 100%;
  min-width: 50rem;
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
input, button {
  background-color: transparent;
  border: none;
  outline: none;
}
h1, h2, h3, h4, h5, h6{
  
}
ol, ul, li{
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;
