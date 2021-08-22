import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addHeroTeam } from "../../redux/actions";
import swal from 'sweetalert';

const SearchCard = ({ id, name, image, hero }) => {
    const dispatch = useDispatch();
    const team = useSelector(state => state.team);

    const handleClick = () => {
        if (team.length >= 6) {
            swal({
                title: "I'm sorry",
                text: "You already have six heroes on your team!",
                icon: "warning",
                dangerMode: true,
            })
        } else {
            swal({
                text: "Hero added to team",
                icon: "success",
            })
            dispatch(addHeroTeam(hero))
        }
    };

    return (
        <Card border="dark" className="hero" key={id} style={{ width: '18rem' }}>
            <Card>
                <Card.Img variant="top" src={image} alt="notfound" />
                <Card.ImgOverlay className="add-button">
                    <Button variant="success" onClick={handleClick} style={{ width: '3rem' }}>➕</Button>
                </Card.ImgOverlay>
            </Card>
            <NavLink to={`/hero/${id}`}>
                <Card.Title>
                    {name}
                </Card.Title>
            </NavLink>
        </Card>
    )
};

export default SearchCard;