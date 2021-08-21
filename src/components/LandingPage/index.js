import React from 'react';
import Login from '../LogIn';
import comic from '../../assets/comic.png'
import { StyledLandingPage } from './styled';
import { Card } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <StyledLandingPage >
            <Card className="title">
                <Card.Img src={comic} alt='' />
            <Card.ImgOverlay>
                <Card.Text>Welcome to Super Hero App ! ! </Card.Text>
            </Card.ImgOverlay>
            </Card>
            <div>
                <Login />
            </div>
        </StyledLandingPage>
    );
};

export default LandingPage;