import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  
  *{
	  text-decoration: none;
    list-style: none;
    font-size: 62.5%; /* rem valendo 10px */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.background};
  }

`;
 
export default GlobalStyle;