import styled from 'styled-components';
import { colors, fonts } from '../../../utils/styles';

const H1Styled = styled.h1`
    font-size: 3rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
    margin: 2rem 0rem;
    width: fit-content;

    &::after{
        content: '';
        display: block;
        width: 105%;
        height: 0.5rem;
        background-image: linear-gradient(to right, ${colors.violet}, ${colors.violet_clair});
        border-radius: 1rem;
    }
`;


function H1({children}){
    return(
        <H1Styled>{children}</H1Styled>
    )
}

export default H1;