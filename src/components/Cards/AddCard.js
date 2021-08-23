import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledAdd } from "./styled";

const AddCard = () => {


    return (
        <StyledAdd>
            <Card border="dark" className="add-card" style={{ width: '18rem' }}>
                <Link to="search">
                    <Button variant="success" style={{ width: '3rem' }}>
                        ➕
                    </Button>
                </Link>
            </Card>
        </StyledAdd>
    )
};

export default AddCard;