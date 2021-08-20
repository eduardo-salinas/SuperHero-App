import React from 'react';
import Login from '../Login';
import { StyledLandingPage } from './styled';

const LandingPage = () => {
    return (
        <StyledLandingPage >
            <p>Welcome! </p>
            <div>
            <Login />
            </div>
        </StyledLandingPage>
    );
};

export default LandingPage;