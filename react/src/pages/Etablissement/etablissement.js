import styled from "styled-components";
import CarteEvenement from "../../components/layout/carteEvenement";
import { colors, fonts, Loader } from "../../utils/styles";

import { useEffect } from "react";
import { useState } from "react";

const DivEtablissement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isLoading ? "center" : "flex-start"};
    justify-content: ${props => props.isLoading ? "center" : "flex-start"};
    margin: 0 auto;
    padding: 0 2rem;
    min-height: 85vh;
`;

const DivCartes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    overflow-x: scroll;

    justify-content: flex-start;
    srcoll-snap-type: x mandatory;
    height: 100%;
    width: calc(100vw - 4rem);
`;

const H1Etablissement = styled.h1`
    font-size: 3rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
`;

function Etablissement({ idEtablissement }) {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8000/etablissement"+idEtablissement)
            .then((response) => response.json())
            .then(({ data }) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <DivEtablissement isLoading={isLoading}>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <H1Etablissement>nom de l'établissement</H1Etablissement>
                        <DivCartes>
                            {/* {
                                data.evenements.map((evenement) => {
                                    return (
                                        <CarteEvenement
                                            key={evenement.id}
                                            id={evenement.id}
                                            titre={evenement.titre}
                                            date={evenement.date}
                                            description={evenement.description}
                                            image={evenement.image}
                                            lien={evenement.lien}
                                        />
                                    )
                                })
                            } */}
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                            <CarteEvenement titreEvenement='Fiesta boom bomm' dateEvenement='01/01/01' descriptionEvenement='test' imageEvenement='https://picsum.photos/200/300' lienEvenement='https://www.google.com/' />
                        </DivCartes>
                    </div>
                )

            }
        </DivEtablissement>
    )
}

export default Etablissement;