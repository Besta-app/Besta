import styled from "styled-components";
import { colors, fonts } from "../../utils/styles";
import Bouton from "../forms/bouton";

export const StyledCarte = styled.div`
    box-shadow: 0px 8px 8px ${colors.ombre};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 300px;
    height: 480px;
    padding-bottom: 1rem;
`;

const DivImage = styled.div`
    height: 200px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background-image: url(${props => props.imageEvenement});
    background-size: cover;
    background-position: center;                    
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);

`;

const DivContenu = styled.div`
    padding: 0 1rem;
`;

export const H2Carte = styled.h2`
    font-family: ${fonts.titre};
    font-size: 1.5rem;
    color: ${colors.noir};
    margin: 0;
    padding: 1rem ;
    text-align: center;
`;

const PCarteEvenement = styled.p`
    height: 100px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

function CarteEvenement({ titreEvenement, dateEvenement, descriptionEvenement, imageEvenement, lienEvenement }) {
    return (
        <StyledCarte>
            <DivImage imageEvenement={imageEvenement} />
            <DivContenu>
                <H2Carte>{titreEvenement}</H2Carte>
                <p>Date : {dateEvenement}</p>
                <PCarteEvenement>Description : {descriptionEvenement}</PCarteEvenement>
                <Bouton texte={'En savoir plus'} lien={lienEvenement} />
            </DivContenu>
        </StyledCarte>
    )
}

export default CarteEvenement;