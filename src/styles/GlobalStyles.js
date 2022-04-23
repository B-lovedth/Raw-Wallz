import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
    :root{
        --purple-primary: hsl(243, 69%, 59%);
        --accent-pink: hsl(345,88,63);
        --neutral-light: hsl(222,100,97);
        --lavender-secondary: hsl(237,21,52);
        --dark-primary: hsl(237,56,20);
        --border-colour: hsl(260,68,83)
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    body{
        background-color: var(---neutral-light);
    }
`

export default GlobalStyle