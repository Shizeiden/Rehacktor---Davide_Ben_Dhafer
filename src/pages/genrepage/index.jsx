import useFetchSolution from "../../hook/useFetchSolution";
import { useParams } from "react-router";
import CardGame from "../../components/CardGame";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";


export default function GenrePage() {
    const { genre } = useParams();
    const initialUrl = `https://api.rawg.io/api/games?key=7c6b34cb19e346b29c0038eb1bb18d32&genres=${genre}&page=1`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl);
    } , [initialUrl, updateUrl, genre]);
    // return (
    //     <>
    //         <h2 className="text-white my-5">Genere selezionato: {genre}</h2>
    //         <div className="parent">
    //         {error && <article>{error}</article>}
    //         {data && data.results.map((game) => <CardGame key={game.id} game={game} />)}
    //         </div>
    //     </>
    // );

    return (
        <>

            <div className="layout-grid">
                {/* Sidebar */}
                <Sidebar />

                {/* Contenuto principale */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="text-white text-center my-5">
                            <h1>Genere selezionato: {genre}</h1>
                        </div>
                        <div className="grid-container">
                            {error && <article>{error}</article>}
                            {data && data.results.map((game) => (
                                <CardGame key={game.id} game={game} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            
        </>
    );
}
