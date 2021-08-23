import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import good from '../../assets/good.jpg';
import bad from '../../assets/bad.jpg';
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromTeam } from "../../redux/actions";
import swal from 'sweetalert';
import { StyledTeam } from "./styled";

const TeamCard = ({ hero }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeFromTeam(hero))
        swal({
            text: "Hero remove from team",
            icon: "success",
        });
    };

    return (
        <StyledTeam>
            <Card border="dark" className="hero" key={hero.id} style={{ width: '18rem' }}>
                <NavLink to={`/hero/${hero.id}`}>
                    <Card.Title className="title">
                        {hero.name}
                    </Card.Title>
                </NavLink>
                <Card>
                    <Card.Img variant="top" src={hero.image.url} alt="notfound" />
                    <Card.ImgOverlay className="alg">
                        <div >
                            {hero.biography.alignment === "good" ?
                                <Card.Text className="good"><img src={good} alt="" /></Card.Text> :
                                <Card.Text className="bad"><img src={bad} alt="" /></Card.Text>}
                        </div>
                        <div className="remove-button">
                            <Button variant="danger" onClick={handleClick} style={{ width: '3rem' }}>X</Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <div className="stats">
                    <Card.Text>
                        🧠 Intelligence: {hero.powerstats.intelligence} <br />
                        💪 Strength : {hero.powerstats.strength} <br />
                        ⚡ Speed: {hero.powerstats.speed} <br />
                        💎 Durability: {hero.powerstats.durability} <br />
                        💥 Power: {hero.powerstats.power} <br />
                        🥊 Combat: {hero.powerstats.combat} <br />
                    </Card.Text>
                    <Card.Text className="total">
                        {hero.total}
                    </Card.Text>
                </div>
            </Card>
        </StyledTeam>
    )
};

export default TeamCard;