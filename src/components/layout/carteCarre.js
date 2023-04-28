import styled from "styled-components"
import { StyledCarte, H2Carte } from "./carteEvenement"
import Bouton from "../forms/bouton"

const StyledCarteCarre = styled(StyledCarte)`
    width: 200px;
    height: 200px;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.5rem;
`;

const BoutonCarre = styled(Bouton)`
    width: 150px;
    padding: 0.5rem 0.75rem;
`;

function carteCarre(){
    return(
        <StyledCarteCarre>
            <H2Carte>Carte Carre</H2Carte>
            <BoutonCarre texte={'Voir les détails'} />
            <BoutonCarre texte={'Modifier'} />
            <BoutonCarre texte={'Supprimer'} />
        </StyledCarteCarre>
    )
}

export default carteCarre   