import React  from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Container = styled(Link)`
    border-left: 3px solid ${({active, theme}) => active ? theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    text-decoration: none;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`;

const Span = styled.span`
    color: ${({active, theme}) => !active && theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({active, theme}) => active ? theme.activeMenu : "#AAA5A5"};

`




const MenuLink = ({ title, active, icon }) => {
    console.log('MenuLink Props', active);
    return (
        <Container to={title.toLowerCase()}>
            <Span active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Span>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuLink
