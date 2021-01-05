import React from 'react';
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn';
import DepositContainer from './Deposits';
import EmptyState from './EmptyState/EmptyState';
import { Switch, Route } from 'react-router-dom'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;

    @media screen and (max-width: 768px){
      width:100%;
    margin-left: 0;

    }
`

const Main = () => {
    return (
        <Container>
            <Nav/>
            <NewDepositBtn/>
            <Switch>
                <Route path="/" exact component={DepositContainer}/>
                <Route path="/deposits" exact component={DepositContainer}/>
                <Route path="/offers" exact component={EmptyState}/>
                <Route path="/payments" exact component={EmptyState}/>
                <Route path="/settings" exact component={EmptyState}/>
            </Switch>
        </Container>
    )
}

export default Main
