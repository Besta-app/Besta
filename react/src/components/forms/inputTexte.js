import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';

const StyledInputTexte = styled.input`
    height: 2em;
    width: 100%;
    box-shadow: 0px 8px 8px ${colors.ombre};
    border: none;
    border-radius: 10px;
    font-size: 1.5em;
    font-family: ${fonts.texte};
    color: ${colors.noir};
    padding: 0rem;
    &:focus{
        outline: none;
    }
`;

const StyleLabel = styled.label`
    font-size: 1.5em;
    width: 100%;
    color: var(--noir);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    text-align: left;
    font-family: ${fonts.titre};
    color: ${colors.noir};
`;


function InputTexte({title, placeholder}){
    return(
        <div>
            <StyleLabel>{title}</StyleLabel>
            <StyledInputTexte type="text" placeholder={placeholder}/>
        </div>
    )
}

export default InputTexte;