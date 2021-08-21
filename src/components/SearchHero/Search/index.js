import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from "react-bootstrap";
import { getHeroByName } from "../../../redux/actions";

const Search = () => {
    const [hero, setHero] = useState("");
    const dispatch = useDispatch();    

    const handleChange = (e) => {
        setHero(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getHeroByName(hero));
        setHero("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex">
                <FormControl
                    placeholder="Search Hero"
                    type="search"
                    id="hero"
                    autoComplete="off"
                    value={hero}
                    onChange={handleChange}
                />
                <Button variant="warning" type="submit"> Go! </Button>
            </form>
        </div>
    )
};

export default Search;