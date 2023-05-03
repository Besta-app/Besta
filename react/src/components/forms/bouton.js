import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const StyledBouton = styled.button`
    width: 15vw;
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

function Bouton({ texte }) {
    return (
        <StyledLink to={'/'}>
            <StyledBouton type="submit">
                {texte}
            </StyledBouton>
        </StyledLink>
    )
}

export default Bouton;