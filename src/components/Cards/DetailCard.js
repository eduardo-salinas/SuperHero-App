import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Spinner } from 'react-bootstrap';
import { getHeroById } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const HeroDetail = ({ match }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getHeroById(match.params.id))
    }, [dispatch, match.params.id]);

    return (
        <div>
            {store.loading ?
                <div className="spinner">
                    <Spinner animation="border" variant="warning" />
                </div>
                :
                (
                    <div className="detail">
                        <img
                            src={store.heroDetail.image.url}
                            alt="not found"
                        />
                        <Card border="danger" style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title>{store.heroDetail.name}</Card.Title>
                                <br />
                                <Card.Text>⭐<b>Power Stats:</b></Card.Text>
                                <Card.Text>
                                    🧠 Intelligence: {store.heroDetail.powerstats.intelligence} <br />
                                    💪 Strength : {store.heroDetail.powerstats.strength} <br />
                                    ⚡ Speed: {store.heroDetail.powerstats.speed} <br />
                                    💎 Durability: {store.heroDetail.powerstats.durability} <br />
                                    💥 Power: {store.heroDetail.powerstats.power} <br />
                                    🥊 Combat: {store.heroDetail.powerstats.combat} <br />
                                </Card.Text>
                                <br />
                                <Card.Text>⚗ Occupation: {store.heroDetail.work.occupation}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
        </div>
    )
};

export default HeroDetail;