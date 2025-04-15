import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CardGame from "../../components/CardGame";
import useFetchSolution from "../../hook/useFetchSolution";
import Sidebar from "../../components/Sidebar";
export default function SearchPage() {
    let [searchParams] = useSearchParams();
    const game = searchParams.get("query");

    const initialUrl = `https://api.rawg.io/api/games?key=7c6b34cb19e346b29c0038eb1bb18d32&search=${game}`;

    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl);
    }, [initialUrl, updateUrl]);

    // return (
    //     <div>
    //         <h1 className="text-white my-5">Risultati per: {game}</h1>
    //         {loading && <p>Loading...</p>}
    //         {error && <h1>{error}</h1>}
    //         <div className="parent">
    //             {data && data.results.map((game) => <CardGame key={game.id} game={game} />)}
    //         </div>
    //     </div>
    // );

    return (
        <div className="layout-grid">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenuto principale */}
            <section className="content">
                <div className="container-fluid">
                    <div className="text-white text-center my-5">
                        <h1>Risultati per: {game}</h1>
                    </div>
                    <div className="grid-container">
                    {loading && <p>Loading...</p>}
                    {error && <article>{error}</article>}
                        {data && data.results.map((game) => (
                            <CardGame key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}