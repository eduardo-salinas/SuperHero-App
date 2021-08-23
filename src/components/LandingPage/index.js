import React from 'react';
import Login from '../LogIn';
import comic from '../../assets/comic.png'
import start from '../../assets/start.png'
import { StyledLandingPage } from './styled';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const user = useSelector(state => state.user);
    return (
        <StyledLandingPage >
            <Card className="title">
                <Card.Img src={comic} alt='' />
                <Card.ImgOverlay>
                    <Card.Text>Welcome to<br /> Super Hero App ! ! </Card.Text>
                </Card.ImgOverlay>
            </Card>
            {(window.localStorage.superHero || user.loged === "on") ?
                <Card className="start">
                    <Link to="/home">
                        <Card.Img src={start} alt='' />
                        <Card.ImgOverlay>
                            <Card.Text>START !</Card.Text>
                        </Card.ImgOverlay>
                    </Link>
                </Card> :
                <Login />
            }
        </StyledLandingPage>
    );
};

export default LandingPage;