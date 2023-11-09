import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
  @media (max-width: 1700px){
    font-size: 75%;
    }
  }
  body{
    background: white;
    x-overflow: hidden;
    font-family: 'Ubuntu', sans-serif;
  }
  h2{
    font-weight: lighter;
    font-size: 5.5rem;
  }
  h1{
    font-weight: lighter;
    font-size: 2rem;
    color: #ff7676;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
