import styled from "styled-components"

const DivPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

function DivPage({children, isLoading}) {
    return (
        <DivPageStyled isLoading={isLoading}>
            {children}
        </DivPageStyled>
    )
}

export default DivPage