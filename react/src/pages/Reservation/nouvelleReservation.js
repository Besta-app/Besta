import { H1,H3, DivPage,DivHautGauche, Label } from "../../components/styles"
import { useState } from "react"
import { Input, Select, Lien } from "../../components/forms";
import styled from "styled-components";

/* ---------------------------------- STYLE --------------------------------- */

const DivGrid2Colonnes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    width: 100%;
    margin: 2rem 0;
`;

/* ----------------------------------- DOM ---------------------------------- */

function NouvelleReservation() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <DivPage isLoading={isLoading}>
            <H1>Nouvelle réservation</H1>
            <DivGrid2Colonnes>
                <DivHautGauche>
                    <Input type='texte' title="Nom" placeholder="Nom de la réservation"/>
                    <Input type='number' title="Nombre de personnes" placeholder="Max 8"/>
                    <Input type='number' title="Numéro de téléphone" placeholder="06 00 00 00 00"/>
                    <Input type='number' title="Nombre de personnes" placeholder="Max 8"/>
                    <Select title={'Type de carré'} options={[
                        { value: '1', label: 'Carré 1' },
                        { value: '2', label: 'Carré 2' },
                        { value: '3', label: 'Carré 3' },
                        { value: '4', label: 'Carré 4' },
                    ]} />
                    <Label title={'Prix : 300€'}/>
                    <Lien taille={'grand'} texte={'Passer au paiement'} lien={'/'}/>
                </DivHautGauche>
                <DivGrid2Colonnes>
                    <img src="https://picsum.photos/400/400" alt="image de la table" />
                    <DivHautGauche>
                        <H3>Catégories</H3>
                        <p>Carré 1</p>
                        <p>Carré 2</p>
                        <p>Carré 3</p>
                        <p>Carré 4</p>
                    </DivHautGauche>
                <DivHautGauche>
                    <H3>Informations</H3>
                    <p>vghnjbhgvfcvuybh jbhij nbvhvbiujk nbvh gvuybij knb hgcuv gkfjvhk bjlibvyct fj hibuvytcif</p>
                </DivHautGauche>
                </DivGrid2Colonnes>
            </DivGrid2Colonnes>
        </DivPage>
    )
}

export default NouvelleReservation