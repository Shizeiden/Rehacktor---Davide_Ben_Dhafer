import LazyLoadGameImage from "./LazyLoadGameImage";
import { Link } from 'react-router';
export default function CardGame({ game }) {

    const genres = game.genres.map((genre) => genre.name).join(', ');

    const { background_image: image } = game;

    return (
        <div className="card text-white bg-dark d-flex flex-column align-items-center p-4" key={game.id}>
            {/* Immagine del gioco */}
            <LazyLoadGameImage
                alt="game image"
                image={image}
            />
    
            {/* Titolo e genere */}
            <h2 className="text-center text-xl font-bold mb-2">{game.name}</h2>
            <small className="text-muted text-center">{genres}</small>
    
            {/* Div per allineamento uniforme */}
            <div className="d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
                {/* Data di rilascio */}
                <p className="text-sm text-center mt-auto">{game.released}</p>
            </div>
    
            {/* Bottone personalizzato */}
            <button className="custom-btn btn-1 my-2 d-flex align-items-center justify-content-center mt-auto">
                <Link to={`/games/${game.slug}/${game.id}`} className="text-white text-decoration-none">Dettaglio</Link>
            </button>
        </div>
    );
    
    
    
    
    
    

  
}

