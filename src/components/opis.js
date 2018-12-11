import React from 'react';
import { Link } from 'react-router-dom';

const Opis = ({ film, type }) => {
    return(
        <div>
            <Link to={type === "film" ? `/movie/${film.id}` : `/tvShow/${film.id}`} >
                <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} alt={film.name} />
                <p>{type === "film" ? film.title : film.name }</p>
            </Link>
        </div>
    );
}

export default Opis;