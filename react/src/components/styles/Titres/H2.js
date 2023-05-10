import styled from 'styled-components';
import { colors, fonts } from '../../../utils/styles';

const H2Styled = styled.h2`
    font-size: 2rem;
    font-family: ${fonts.titre};
    color: ${colors.noir};
    margin: 1.5rem 0rem;
    width: fit-content;
`;


function H2({children}){
    return(
        <H2Styled>{children}</H2Styled>
    )
}

export default H2;