/* Import pour le style */
import styled from 'styled-components';
import { colors, font} from '../../utils/styles';

/* Import pour le logo */
import logoV1 from '../../assets/images/logoV1.png';

/* Import pour les liens */
import { Link } from 'react-router-dom';

/**
 * HeaderContainer est les container général du header
 */
const HeaderContainer = styled.header`
    background-color: ${colors.noir};
    padding: 0%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding 0rem 2rem;
`;

/**
 * NomLogo la div englobant le logo et héritant de Link
 */
const NomLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    `;
    
const ImgLogo = styled.img`
    width: 2.5em;
    height: 2.5em;
`;

const Span = styled.span`
    font-family: ${font.titre}
    font-weight: bold;
    font-size: 1.25em;
    color: ${colors.blanc};
    padding-left: 0.5em;
    text-align:center;
    `;

const Menu = styled.menu`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0%;
    padding: 0%;
`

const Lien = styled(Link)`
    text-decoration: none;
    color: ${colors.blanc};
    font-family: ${font.titre}
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
        background-color: ${colors.violet};
        transition: width 0.3s;
    }

    &:hover::after {
        width: 100%;
    }
`

export function Header (){
    return(
        <HeaderContainer>
            <NomLogo to={'/'}>
                <ImgLogo src={logoV1} alt="logo besta"/>
                <Span>Besta</Span>
            </NomLogo>
            <Menu>
                <Lien to={'/map'}>Carte</Lien>
                <Lien to={'/evenements'}>Evenements</Lien>
                <Lien to={'/profil'}>Profil</Lien>
            </Menu>
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