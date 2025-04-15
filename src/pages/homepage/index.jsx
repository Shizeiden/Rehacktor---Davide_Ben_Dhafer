import useFetchSolution from "../../hook/useFetchSolution";
import CardGame from "../../components/CardGame";
import Sidebar from "../../components/Sidebar";
export default function HomePage() {
    const initialUrl = "https://api.rawg.io/api/games?key=7c6b34cb19e346b29c0038eb1bb18d32&dates=2024-01-01,2024-12-31&page=1";
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    // return (
    //     <>
    //         <div className="flex">

    //         <Sidebar />
    //         </div>
    //         <section className="container-fluid">
    //             <div className="row justify-content-center">
    //                 <div className="col-12 text-white text-center my-5">
    //                     <h1>Home Page</h1>
    //                 </div>
    //                 <div className="row justify-content-center mx-3">
    //                     <div className="parent">



    //                         {loading && <p>Loading...</p>}
    //                         {error && <article>{error}</article>}
    //                         {data && data.results.map((game) => (
    //                             <CardGame key={game.id} game={game} />
    //                         ))} 
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </>
    // );
    return (
    <div className="layout-grid">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenuto principale */}
        <section className="content">
            <div className="container-fluid">
                <div className="text-white text-center my-5">
                    <h1>Home Page</h1>
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
};