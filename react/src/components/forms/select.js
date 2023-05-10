import styled from 'styled-components';
import { colors, fonts } from '../../utils/styles';
import { DivHautGauche } from '../styles';
import { Label } from '../styles';

const SelectStyled = styled.select`
    height: 2em;
    width: 100%;
    box-shadow: 0px 8px 8px ${colors.ombre};
    border: none;
    border-radius: 10px;
    font-size: 1.5em;
    font-family: ${fonts.texte};
    color: ${colors.noir};
    padding: 0rem 1rem;
    margin-bottom: 0.5em;
    transition: box-shadow 0.3s ease-in-out;
    &:focus{
        outline: none;
        box-shadow: 0px 8px 8px ${colors.noir};
    }

    ::-webkit-input-placeholder {
        color: ${colors.violet};
        font-family: ${fonts.texte};
    }
`;

function Select({title, options}){
    return(
        <DivHautGauche>
            <Label title={title}/>
            <SelectStyled>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </SelectStyled>
        </DivHautGauche>
    )
}

export default Select;