import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHeroTeam } from "../../redux/actions";
import good from '../../assets/good.jpg';
import bad from '../../assets/bad.jpg';
import swal from 'sweetalert';
import { StyledSearch } from "./styled";

const SearchCard = ({ id, name, image, hero }) => {
    const dispatch = useDispatch();
    const team = useSelector(state => state.team);
    const alignment = useSelector(state => state.alignment);

    const handleClick = () => {
        if (team.length >= 6) {
            swal({
                title: "I'm sorry",
                text: "You already have six heroes on your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else if (hero.biography.alignment === "good" && alignment.good >= 3) {
            swal({
                title: "I'm sorry",
                text: "You already have three heroes good your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else if (hero.biography.alignment === "bad" && alignment.bad >= 3) {
            swal({
                title: "I'm sorry",
                text: "You already have three heroes bad on your team!",
                icon: "warning",
                dangerMode: true,
            });
        } else if (team.find(e=>e.id === hero.id)) {
            swal({
                title: "I'm sorry",
                text: "This hero is already on your team",
                icon: "warning",
                dangerMode: true,
            });
        } else {
            swal({
                text: "Hero added to team",
                icon: "success",
            });
            dispatch(addHeroTeam(hero))
        }
    };

    return (
        <StyledSearch>
            <Card border="dark" className="hero" key={id} style={{ width: '18rem' }}>
                <Card>
                    <Card.Img variant="top" src={image} alt="notfound" />
                    <Card.ImgOverlay className="alg">
                        <div >
                            {hero.biography.alignment === "good" ? 
                            <Card.Text className="good"><img src={good} alt=""/></Card.Text> : 
                            <Card.Text className="bad"><img src={bad} alt=""/></Card.Text>}
                        </div>
                        <div className="add-button">
                            <Button variant="success" onClick={handleClick} style={{ width: '3rem' }}>➕</Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <NavLink to={`/hero/${id}`}>
                    <Card.Title>
                        {name}
                    </Card.Title>
                </NavLink>
            </Card>
        </StyledSearch >
    )
};

export default SearchCard;