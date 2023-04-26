import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles';
import './fonts.css';

const StyledGlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Archivo Black', sans-serif;
        background-color: ${colors.blanc};
    }
`

function GlobalStyles() {
    return <StyledGlobalStyles />
}

export default GlobalStyles;
