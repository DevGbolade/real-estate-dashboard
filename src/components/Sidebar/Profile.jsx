import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/rozay.jpeg';


const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProfileImg = styled.img`
    height: 5rem;
    border-radius: 100%;
`;

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    margin-top: 1rem;
    color: ${({ theme }) => theme.textColor};
`



const Profile = ({name}) => {
;


    return (
        <Container>
            <ProfileImg src={Image}/>
            <ProfileName>{name}</ProfileName>
        </Container>
    )
}

export default Profile
