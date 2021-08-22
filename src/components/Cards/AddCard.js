import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from "react-bootstrap";

const AddCard = () => {


    return (
        <Card border="dark" className="add-card" style={{ width: '18rem' }}>            
                <Button variant="success" style={{ width: '3rem' }}>➕</Button>            
        </Card>
    )
};

export default AddCard;