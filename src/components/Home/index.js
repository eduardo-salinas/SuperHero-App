import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCard from '../Cards/AddCard';
import TeamCard from '../Cards/TeamCard';
import TeamStatus from '../TeamStatus';
import StyledHome from './styled';

const Home = () => {
    const store = useSelector(state => state);

    return (
        <StyledHome>
            <h1>MY TEAM</h1>
            <TeamStatus />
            <Link to='/search'>
                <Button variant='warning'>Add to new Hero !</Button>
            </Link>
            <div className="team">
                {store.team[0] ? <TeamCard hero={store.team[0]} /> : <AddCard />}
                {store.team[1] ? <TeamCard hero={store.team[1]} /> : <AddCard />}
                {store.team[2] ? <TeamCard hero={store.team[2]} /> : <AddCard />}
                {store.team[3] ? <TeamCard hero={store.team[3]} /> : <AddCard />}
                {store.team[4] ? <TeamCard hero={store.team[4]} /> : <AddCard />}
                {store.team[5] ? <TeamCard hero={store.team[5]} /> : <AddCard />}
            </div>
        </StyledHome>
    )
};

export default Home;