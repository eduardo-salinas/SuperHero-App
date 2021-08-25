import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Spinner, Button } from 'react-bootstrap';
import { addHeroTeam, getHeroById } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDetail } from './styled';
import good from '../../assets/good.jpg';
import bad from '../../assets/bad.jpg';
import swal from 'sweetalert';

const HeroDetail = ({ match }) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    useEffect(() => {
        dispatch(getHeroById(match.params.id))
    }, [dispatch, match.params.id]);

    const handleClick = () => {
        if (store.team.length >= 6) {
            swal({
                title: "I'm sorry",
                text: "You already have six heroes on your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else if (store.heroDetail.biography.alignment === "good" && store.alignment.good >= 3) {
            swal({
                title: "I'm sorry",
                text: "You already have three heroes good your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else if (store.heroDetail.biography.alignment === "bad" && store.alignment.bad >= 3) {
            swal({
                title: "I'm sorry",
                text: "You already have three heroes bad on your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else {
            swal({
                text: "Hero added to team",
                icon: "success",
            });
            dispatch(addHeroTeam(store.heroDetail))
        }
    };
    const title = store.heroDetail.biography && (store.heroDetail.biography.alignment === "good" ? "title-good" : "title-bad");

    return (
        <div>
            {store.loading ?
                <div className="spinner">
                    <Spinner animation="border" variant="warning" />
                </div>
                :

                store.heroDetail.name && (
                    <StyledDetail>
                        <Card border="dark" >
                            <Card.Img className="hero"
                                src={store.heroDetail.image.url}
                                alt="not found"
                            />
                        </Card>
                        <Card className="detail" border="dark">
                            <Card.Body>
                                <Card.Text className={title}>{store.heroDetail.name}</Card.Text>
                                <br />
                                <Card.Text className="power">⭐<b>Power Stats:</b></Card.Text>
                                <Card.Text>
                                    🧠 Intelligence: {store.heroDetail.powerstats.intelligence} <br />
                                    💪 Strength : {store.heroDetail.powerstats.strength} <br />
                                    ⚡ Speed: {store.heroDetail.powerstats.speed} <br />
                                    💎 Durability: {store.heroDetail.powerstats.durability} <br />
                                    💥 Power: {store.heroDetail.powerstats.power} <br />
                                    🥊 Combat: {store.heroDetail.powerstats.combat} <br />
                                </Card.Text>
                                <Card.Text>🧔 Occupation: {store.heroDetail.work.occupation}</Card.Text>
                                <br />
                                <div className="end">
                                    <div>
                                        {store.heroDetail.biography.alignment === "good" ?
                                            <Card.Text className="good-detail">Good<img src={good} alt="" /></Card.Text> :
                                            <Card.Text className="bad-detail">Bad<br /><img src={bad} alt="" /></Card.Text>}
                                    </div>
                                    <div className="add-detail">
                                        <Button variant="warning" onClick={handleClick} style={{ width: '5rem' }}>Add Hero to team ➕</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </StyledDetail>
                )}
        </div>
    )
};

export default HeroDetail;