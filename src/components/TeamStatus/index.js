import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import StyledStatus from './styled';

const TeamStatus = () => {
    const team = useSelector(state => state.team);
    const [status, setStatus] = useState({
        power: 0,
        height: 0,
        weight: 0
    });

    useEffect(() => {
        let p = 0, h = 0, w = 0;
        team.map(hero => {
            p = p + hero.total;
            h = h + parseInt(hero.appearance.height[1]);
            w = w + parseInt(hero.appearance.weight[1]);
        });
        setStatus({
            power: Math.round(p / team.length),
            height: Math.round(h / team.length),
            weight: Math.round(w / team.length)
        });
    }, [team]);

    return (
        <StyledStatus>
            <Card border="dark" className="status" style={{ width: '50rem' }}>
                <Card.Text>Power Team:</Card.Text>
                <Card.Text className="total-power">
                    {isNaN(status.power) ? 0 : status.power}
                </Card.Text>
                <Card.Text>Height:</Card.Text>
                <Card.Text className="height">
                    {isNaN(status.height) ? 0 : status.height}
                </Card.Text>
                <Card.Text>Weight:</Card.Text>
                <Card.Text className="height">
                    {isNaN(status.weight) ? 0 : status.weight}
                </Card.Text>
            </Card>
        </StyledStatus>
    )
};

export default TeamStatus;