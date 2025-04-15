import { useState } from "react";
import { useNavigate } from "react-router";

export default function Searchbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [ariaInvalid, setAriaInvalid] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (typeof search === 'string' && search.trim().length !== 0) {
            navigate(`/search?query=${search}`);
            setSearch("");
        } else {
            setAriaInvalid(true);
        }
    };

    // return (
    //     <form onSubmit={handleSearch}>
    //         <fieldset role="group">
    //             <input
    //                 type="text"
    //                 name="search"
    //                 placeholder={ariaInvalid ? "Devi cercare qualcosa" : "Search a game"}
    //                 onChange={(e) => setSearch(e.target.value)}
    //                 value={search}
    //                 aria-invalid={ariaInvalid}
    //                 className="form-control rounded-pill bg-secondary"
    //             />
    //             <input className="mx-3" type="submit" value="Go" />
    //         </fieldset>
    //     </form>
    // );
    return (
        <form onSubmit={handleSearch} className="w-full">
            <fieldset role="group" className="flex items-center">
                <input
                    type="text"
                    name="search"
                    placeholder={ariaInvalid ? "Devi cercare qualcosa" : "Search a game"}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    aria-invalid={ariaInvalid}
                    className="rounded-full bg-gray-200 p-2 text-black w-full"
                />
                <input
                    className="btn-1 rounded-full ms-3 text-white py-2 p-4"
                    type="submit"
                    value="Go"
                />
            </fieldset>
        </form>
    );
    
}