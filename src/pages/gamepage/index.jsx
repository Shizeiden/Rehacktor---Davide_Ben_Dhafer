
import { useEffect } from "react";
import useFetchSolution from "../../hook/useFetchSolution";
import { useParams } from "react-router";
import ToggleFavorite from "../../components/ToggleFavorite";
import Chatbox from "../../components/Chatbox";

export default function GamePage() {
    const { id } = useParams();
    const initialUrl = `https://api.rawg.io/api/games/${id}?key=7c6b34cb19e346b29c0038eb1bb18d32`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl);
        // console.log(data);
    }, []);


    return (
        <>
            {error && <h1>{error}</h1>}

            <div className="text-center text-white mb-4">
                <p className="text-muted small">{data && data?.released}</p>
                <h1 className="fw-bold">{data && data?.name}</h1>
                <p className="text-warning">⭐ Rating: {data && data?.rating}</p>
                {data?.id && <div className="d-inline-block mt-2"><ToggleFavorite data={data} /></div>}
            </div>

            <div className="d-flex flex-column flex-md-row bg-dark text-white min-vh-100 p-4 gap-4">

                <div className="w-100 w-md-66 pe-md-4 d-flex flex-column gap-3">
                    <div>
                        <h5>About:</h5>
                        <p className="text-light">{data && data?.description_raw}</p>
                    </div>
                </div>

                <div className="w-100 w-md-33 d-flex flex-column gap-3">
                    <div>
                        <img
                            src={data && data?.background_image}
                            alt={data?.name}
                            className="rounded-4 w-100 shadow"
                        />
                    </div>
                    <div className="p-3 rounded-4 chatbox-container"
                    >
                        <Chatbox data={data && data} />
                    </div>
                </div>
            </div>
        </>
    );




}

