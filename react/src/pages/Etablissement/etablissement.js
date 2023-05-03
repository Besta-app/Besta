import styled from "styled-components";

import CarteEvenement from "../../components/layout/carteEvenement";
import CarteCarre from "../../components/layout/carteCarre";

import { colors, fonts, Loader } from "../../utils/styles";

import { useEffect } from "react";
import { useState } from "react";

const DivEtablissement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isLoading ? "center" : "flex-start"};
    justify-content: ${props => props.isLoading ? "center" : "flex-start"};
    margin: 0 auto;
    padding: 0 4rem;
    min-height: 85vh;
`;

const DivCartes = styled.div`
    display: flex;    
    overflow-x: scroll;

    justify-content: flex-start;
    height: 100%;
    width: calc(100vw - 6rem);

    &::-webkit-scrollbar {
        height: 0.5rem;
        background-color:transparent;
        width: 50%;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${colors.violet};
        border-radius: 1rem;
    }
`;

const H1Etablissement = styled.h1`
    font-size: 3rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
`;

const H2Etablissement = styled.h2`
    font-size: 2rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
`;

const H3Etalissement = styled.h3`
    font-size: 1.5rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
    position: relative;
    width: fit-content;
            
    &::after {
        position: absolute;
        top: 100%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 0.5rem;
        background-color: ${colors.violet};
        margin: 0.25rem 0;
        border-radius: 1rem;
    }
`;

const Div3Colonnes = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

function Etablissement({ idEtablissement }) {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:8000/etablissement" + idEtablissement)
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
                        <H2Etablissement>Les événements :</H2Etablissement>
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
                        <H2Etablissement>Nos tarifs</H2Etablissement>
                        <H3Etalissement>Nos boissons</H3Etalissement>
                        <Div3Colonnes>
                            <p>Boisson 1</p>
                            <p>Boisson 2</p>
                            <p>Boisson 3</p>
                            <p>Boisson 4</p>
                            <p>Boisson 5</p>
                            <p>Boisson 6</p>
                            <p>Boisson 7</p>
                            <p>Boisson 8</p>
                            <p>Boisson 9</p>
                            <p>Boisson 10</p>
                            <p>Boisson 11</p>
                            <p>Boisson 12</p>
                            <p>Boisson 13</p>
                        </Div3Colonnes>
                        <H3Etalissement>Nos bouteilles</H3Etalissement>
                        <Div3Colonnes>
                            <p>Bouteille 1</p>
                            <p>Bouteille 2</p>
                            <p>Bouteille 3</p>
                            <p>Bouteille 4</p>
                            <p>Bouteille 5</p>
                        </Div3Colonnes>
                        <H3Etalissement>Nos carrés</H3Etalissement>
                        <Div3Colonnes>
                            <CarteCarre texte={'Carré 1'} />
                            <CarteCarre texte={'Carré 2'} />
                            <CarteCarre texte={'Carré 3'} />
                        </Div3Colonnes>
                    </div>
                )

            }
        </DivEtablissement>
    )
}

export default Etablissement;