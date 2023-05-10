import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';
import { DivHautGauche } from '../styles';
import { Label } from '../styles';

const InputStyled = styled.input`
    height: 2rem;
    width: 100%;
    box-shadow: 0px 8px 8px ${colors.ombre};
    border: none;
    border-radius: 10px;
    font-size: 1.25em;
    font-family: ${fonts.texte};
    color: ${colors.noir};
    padding: 0rem 1rem;
    margin-bottom: 0.25em;
    transition: box-shadow 0.3s ease-in-out;
    &:focus{
        outline: none;
        box-shadow: 0px 8px 8px ${colors.noir};
    }

    ::-webkit-input-placeholder {
        color: ${colors.violet};
        font-family: ${fonts.texte};
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

function Input({type,title, placeholder}){
    return(
        <DivHautGauche>
            <Label title={title}/>
            <InputStyled type={type} placeholder={placeholder}/>
        </DivHautGauche>
    )
}

export default Input;