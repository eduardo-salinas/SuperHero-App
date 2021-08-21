import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";

const SearchCard = ({ id, name, image }) => {

    return (
        <Card border="dark" className="hero" key={id} style={{ width: '18rem' }}>
            <Card>
                <Card.Img variant="top" src={image} alt="notfound" />
                <Card.ImgOverlay className="add-button">
                    <Button variant="success" style={{ width: '3rem' }}>➕</Button>
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