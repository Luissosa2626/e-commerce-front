import styled from "styled-components"

const StyledTabs = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const StyledTab = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
    ${props => props.active ? `
    color: black;
    border-bottom: 2px solid black
    ` : `
    color: #999;
    `}
`;
export default function Tabs({tabs, active, onChange}) {
    return (
        <StyledTabs>
            {tabs.map(tabName => (
                <StyledTab 
                    onClick={() => {onChange(tabName)}}
                    active={tabName === active}>
                        {tabName}
                    </StyledTab>
            ))}
        </StyledTabs>
    )
}

/*
Cuando paso parametros a una funcion, puedo modificarla dentro de la funcion que he creado (principal)
entonces cuando la paso a otro componente solo debo especificar que debe hacer en base
a lo que declare en la funcion principal. Ej: Tabs.js con account.js. Me fijo en active y onChange
*/
// Hacer tabs 