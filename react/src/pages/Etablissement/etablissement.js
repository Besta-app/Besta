import styled from "styled-components";

import CarteEvenement from "../../components/layout/carteEvenement";
import CarteCarre from "../../components/layout/carteCarre";

import { colors, fonts, Loader } from "../../utils/styles";
import { H1, H2, H3 } from "../../components/styles";

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
                        <H1>nom de l'établissement</H1>
                        <H2>Les événements :</H2>
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
                        <H2>Nos tarifs</H2>
                        <H3>Nos boissons</H3>
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
                        <H3>Nos bouteilles</H3>
                        <Div3Colonnes>
                            <p>Bouteille 1</p>
                            <p>Bouteille 2</p>
                            <p>Bouteille 3</p>
                            <p>Bouteille 4</p>
                            <p>Bouteille 5</p>
                        </Div3Colonnes>
                        <H3>Nos carrés</H3>
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