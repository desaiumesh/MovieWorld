import React from 'react';
import { Movie } from '../interfaces/Movie';
import {Link} from 'react-router-dom';

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    
    const handleError =(e : React.SyntheticEvent<HTMLImageElement, Event>)=>{
        e.currentTarget.src = 'https://via.placeholder.com/400';
    }

    return (
        <Link to={`/compare/${movie.title}`} state={movie} className='movie'>
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                <img src={movie.poster !== 'N/A' ? movie.poster : 'https://via.placeholder.com/400'} onError={handleError}></img>
            </div>
            <div>
                <div className='rating-price-row'>
                    <h5>* {movie.rating}</h5>
                    <h4>Price : $ {movie.price}</h4>
                </div>
                <h3>{movie.title}</h3>
                <h5>{movie.provider}</h5>
            </div>
        </Link>
    )
}

export default MovieCard;