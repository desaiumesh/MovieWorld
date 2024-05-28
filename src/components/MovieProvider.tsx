import IconArrowButton from "./Buttons/IconArrowButton"


const MovieProvider = ({ name, price }: { name: string, price: number }) => {
    return (
        <div className="movieProvider">
            <div className="movie_Provider" >
            <h2>{name}</h2>
            <div style={{display:'flex', flexDirection:'row'}}>
                <h2>$ {price}</h2>
                <IconArrowButton text="" onClick={() => { }}></IconArrowButton>
            </div>
        </div>
        </div>
    )
}

export default MovieProvider