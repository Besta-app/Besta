import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';
import { Link } from 'react-router-dom';

const StyledBouton = styled.button`
    cursor: pointer;
    background-image: linear-gradient(to right, ${colors.gris}, ${colors.noir});
    color: ${colors.blanc};
    box-shadow: 0px 8px 8px ${colors.ombre};
    border: none;
    border-radius: 10px;
    font-family: ${fonts.titre};
    font-size: 1.1rem;
    padding: 0.5rem 3rem;
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