import styled from "styled-components";
import { colors, fonts } from '../../../utils/styles';


const LabelStyled = styled.label`
    font-size: 1.75em;
    width: 100%;
    color: var(--noir);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-top: 0.5em;
    text-align: left;
    font-family: ${fonts.texte};
    font-weight: bold;
    color: ${colors.noir};
`;

function Label({title}){
    return(
        <LabelStyled>{title}</LabelStyled>
    )
}

export default Label;