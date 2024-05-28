import { useEffect, useState } from 'react';
import '../../App.css';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../interfaces/Movie';
import apiService from '../../services/apiService';
import Loading from '../../components/Loading';

const Home = () => {
    const [allmovies, setAllMovies] = useState<Movie[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getMovies = async () => {

        try {
            setLoading(true);
            const data = await apiService.get<any>('/movies/cheapest');
            console.log(data);
            setAllMovies(data);
            setMovies(data);
            setLoading(false);

        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();

    }, []);

    useEffect(() => {
        if (searchQuery === '') {
            setMovies(allmovies);
        } else {
            const filteredMovies = allmovies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setMovies(filteredMovies);
        }
    }, [searchQuery, allmovies]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='app'>
            <h1>Movie World</h1>
            <div className='search'>
                <input placeholder='Search for Movie'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }} />
            </div>
            {
                movies?.length > 0 ?
                    (
                        <div className='container'>
                            {
                                movies.map((movie, index) => (
                                    <MovieCard movie={movie} key={index} />
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

export default Home;