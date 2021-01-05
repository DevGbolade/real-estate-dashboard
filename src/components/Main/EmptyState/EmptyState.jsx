import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
`;

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60%;
border-radius: 10px;
border: 1px solid #f0ebeb;
height: 400px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

/* box-shadow:  */
`;
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h3`
 text-align: center;
 font-size: 1rem;
 font-weight: 300;
`;

const Rounded = styled.div`
    margin-top: 1rem;
    border-radius: 100%;
    height: 5rem;
    width: 5rem;
    border: 1px solid #f0ebeb;

`;


const EmptyState = () => {
    return (
        <Container>
            <Card>
                <TextWrap>
                    <Text>Empty State</Text>
                    <Rounded></Rounded>

                </TextWrap>
            </Card>
            
        </Container>
    )
}

export default EmptyState
