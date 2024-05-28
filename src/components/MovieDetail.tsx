import { Movie } from '../interfaces/Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface MovieDetailProps {
    movie: Movie
}


const MovieDetail = ({movie} : MovieDetailProps) => {
    return (
        <div className="movieDetail">
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={movie.poster} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie.title} </div>
                        <div className="movie__rating">
                            {movie ? movie.rating : ""}  <FontAwesomeIcon icon={faStar} style={{color:'yellow'}} />
                            <span className="movie__voteCount">{"(" + movie.votes + ") votes"}</span>
                        </div>
                        <div className="movie__runtime">{movie.runtime}</div>
                        <div className="movie__releaseDate">{"Release date: " + movie.released}</div>
                        <div className="movie__genres">
                            {
                                movie.genre.split(',').map((genre: string, index: number) => (
                                    <><span className="movie__genre" id={index.toString()}>{genre}</span></>
                                ))
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Plot</div>
                        <div>{movie.plot}</div>
                    </div>
                    <div className="movie__releaseDate">{"Casts : " + movie.actors}</div>
                    <div className="movie__releaseDate">{"Director : " + movie.director}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail