import React from "react";
import { Link } from './Navigation.styled';

const Navigation = () => {
    return (
        <div >
            <Link to="/" > Home </Link>
            <Link to="/movies" > Movies </Link>
        </div>)
};

export default Navigation;