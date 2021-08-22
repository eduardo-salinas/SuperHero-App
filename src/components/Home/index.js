import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCard from '../Cards/AddCard';
import StyledHome from './styled';

const Home = () => {

    return (
        <StyledHome>
            <h1>MY TEAM</h1>
            <hr className="sep" />
            <Link to='/search'>
                <Button variant='warning'>Add to new Hero !</Button>
            </Link>
            <div className="team">
                <AddCard />
                <AddCard />
                <AddCard />
                <AddCard />
                <AddCard />
                <AddCard />
            </div>
        </StyledHome>
    )
};

export default Home;