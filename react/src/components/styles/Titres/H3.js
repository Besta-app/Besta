import styled from 'styled-components';
import { colors, fonts } from '../../../utils/styles';

const H3Styled = styled.h3`
    font-size: 1.5rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
    margin: 1rem 0rem;
    width: fit-content;

    &::after{
        content: '';
        display: block;
        width: 110%;
        height: 0.5rem;
        background-image: linear-gradient(to right, ${colors.violet}, ${colors.violet_clair});
        border-radius: 3rem;
    }
`;


function H3({children}){
    return(
        <H3Styled>{children}</H3Styled>
    )
}

export default H3;