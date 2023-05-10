import styled from "styled-components"
import { StyledCarte, H2Carte } from "./carteEvenement"
import Lien from "../forms/lien"

const StyledCarteCarre = styled(StyledCarte)`
    width: 200px;
    height: 200px;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.5rem;
`;

const LienCarre = styled(Lien)`
    width: 150px;
    padding: 0.5rem 0.75rem;
`;

function carteCarre({texte}){
    return(
        <StyledCarteCarre>
            <H2Carte>{texte}</H2Carte>
            <LienCarre texte={'Voir les détails'} />
            <LienCarre texte={'Modifier'} />
            <LienCarre texte={'Supprimer'} />
        </StyledCarteCarre>
    )
}

export default carteCarre   