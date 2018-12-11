import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/main.css'

const Links = () => {
	return(
		<div className="mainPage">
	    <NavLink className="link" activeStyle={{ color: "red", }} to="/movies">Movies</NavLink>
	    <NavLink className="link" activeStyle={{ color: "red", }} exact to="/">TV Shows</NavLink>
		</div>
	);
}

export default Links;