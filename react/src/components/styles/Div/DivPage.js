import styled from "styled-components"

const DivPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isLoading ? "center" : "flex-start"};
    justify-content: ${props => props.isLoading ? "center" : "flex-start"};
    margin: 0 auto;
    padding: 0 4rem;
    min-height: 85vh;
`;

function DivPage({children, isLoading}) {
    return (
        <DivPageStyled isLoading={isLoading}>
            {children}
        </DivPageStyled>
    )
}

export default DivPage
