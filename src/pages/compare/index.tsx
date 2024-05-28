import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Movie } from '../../interfaces/Movie';
import apiService from '../../services/apiService';
import MovieDetail from '../../components/MovieDetail';
import MovieProvider from '../../components/MovieProvider';
import Loading from '../../components/Loading';

const Compare = () => {

    const { title } = useParams<{ title: string }>();
    const movie = useLocation().state as Movie;
    const [allmovies, setAllMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getMoviesFromProviders();
    }, [title]);

    const getMoviesFromProviders = async () => {

        try {
            setLoading(true);
            const data = await apiService.get<any>(`/movie/${title}`);
            const newMoviesArray = [movie];

            data.length > 0 ? setAllMovies(data) : setAllMovies(newMoviesArray);
            setLoading(false);

        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {
                allmovies?.length > 0 ?
                    (
                        <div>
                            <MovieDetail movie={allmovies[0]}></MovieDetail>
                            <div className='movieProvider_container'>
                                {
                                    allmovies.map((movie, index) => (
                                        <MovieProvider name={movie.provider} price={movie.price} key={index} />
                                    ))
                                }
                            </div>
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