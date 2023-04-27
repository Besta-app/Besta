import styled from "styled-components";
import { StyledCarte, H2Carte } from "./carteEvenement";
import { Link } from "react-router-dom";

const StyledCarteAction = styled(StyledCarte)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StyledImage = styled.img`
    width: 100px;
    margin: 1rem;
`;

function CarteAction({titreAction,imgAction, lienAction}){
    return(
        <StyledCarteAction>
            <H2Carte>{titreAction}</H2Carte>
            <Link to={lienAction}>
                <StyledImage src={imgAction} alt={titreAction} />
            </Link>
        </StyledCarteAction>
    )
}

export default CarteAction