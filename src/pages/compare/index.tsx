import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Movie } from '../../interfaces/Movie';
import apiService from '../../services/apiService';
import MovieDetail from '../../components/MovieDetail';
import MovieProvider from '../../components/MovieProvider';

const Compare = () => {

    const { title } = useParams<{ title: string }>();
    const movie = useLocation().state as Movie;
    const [allmovies, setAllMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMoviesFromProviders();
    }, [title]);

    const getMoviesFromProviders = async () => {

        const data = await apiService.get<any>(`/movie/${title}`);
        const newMoviesArray = [movie];

        data.length > 0 ? setAllMovies(data) : setAllMovies(newMoviesArray);
    };

    if (!allmovies) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {
                allmovies?.length > 0 ?
                    (
                        <div>
                            <MovieDetail movie={allmovies[0]}></MovieDetail>
                            {
                                allmovies.map((movie, index) => (
                                    <MovieProvider name={movie.provider} price={movie.price} key={index} />
                                ))
                            }
                        </div>

                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default Compare;