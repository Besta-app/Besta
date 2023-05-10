import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const StyledLien = styled.button`
    width: ${props => props.taille};
    height: 5vh;
    cursor: pointer;
    background-image: linear-gradient(to right, ${colors.gris}, ${colors.noir});
    color: ${colors.blanc};
    border: none;
    border-radius: 10px;
    font-family: ${fonts.titre};
    font-size: 100%;
    &:focus{
        outline: none;
    }
    &hover{
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;  
`;

function Lien({ texte, lien, taille }) {
    switch (taille) {
        case 'petit':
            taille = '15vw';
            break;
        case 'moyen':
            taille = '20vw';
            break;
        case 'grand':
            taille = '25vw';
            break;
        default:
            taille = '15vw';
            break;
    }

console.log(taille);

    return (
        <StyledLink to={lien}>
            <StyledLien taille={taille} type="submit">
                {texte}
            </StyledLien>
        </StyledLink>
    )
}

export default Lien;