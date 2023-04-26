import styled from 'styled-components';
import { colors} from '../../utils/styles';
import '../../utils/styles/fonts.css'
import logoV1 from '../../assets/images/logoV1.png';


const HeaderContainer = styled.header`
    background-color: ${colors.noir};
    width: 100%;
    padding: 0%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
`;

const NomLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const ImgLogo = styled.img`
    width: 2.5em;
    height: 2.5em;
    padding-left: 2em;
`;

const Span = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.25em;
    color: ${colors.blanc};
    padding-left: 0.5em;
`;

export function Header (){
    return(
        <HeaderContainer>
            <NomLogo>
                <ImgLogo src={logoV1} alt="logo besta"/>
                <Span>Besta</Span>
            </NomLogo>
        </HeaderContainer>
    )
} 

export default Header;
/*
header {
    background-color: var(--noir);
    width: 100%;
    padding: 0%;
    display: grid;
    grid-template-columns: 20% 60% 20%;

    #nom_logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img {
            width: 2.5em;
            height: 2.5em;
            padding-left: 2em;

        }

        span {
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            font-size: 1.25em;
            color: var(--blanc);
            padding-left: 0.5em;
        }
    }

    menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0%;
        padding: 0%;

        a {
            position: relative;
            text-decoration: none;
            color: var(--blanc);
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            font-size: 1.25em;
            padding: 0.5em;
            margin: 0.5em;
            border-radius: 10px;

            &::after {
                content: "";
                display: block;
                width: 0;
                height: 2px;
                background-color: var(--violet);
                transition: width 0.3s;
            }

            &:hover::after {
                width: 100%;
            }
        }
    }*/