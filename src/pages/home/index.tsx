import { useEffect, useState } from 'react';
import '../../App.css';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../interfaces/Movie';
import apiService from '../../services/apiService';

const Home = () => {
    const [allmovies, setAllMovies] = useState<Movie[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getMovies = async () => {
        
        const data = await apiService.get<any>('/movies/cheapest');
        console.log(data);
        setAllMovies(data);
        setMovies(data);
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

    return (
        <div className='app'>
            <h1>Movie World</h1>
            <div className='search'>
                <input placeholder='Search for Movie'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }}/>
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