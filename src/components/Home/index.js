import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Link to='/search'>
            <Button variant='warning'>Add to new Hero !</Button>
        </Link>
    )
};

export default Home;