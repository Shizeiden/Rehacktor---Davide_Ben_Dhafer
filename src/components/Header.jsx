import { Navbar, Typography } from "@material-tailwind/react";
import Searchbar from "./Searchbar";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client.js"
import { useContext, useState } from "react";
import SessionContext from "../context/SessionContext";

export default function Header() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // const getSession = async () => {
  //   const { data } = await supabase.auth.getSession();
  //   if (data.session) {
  //   // console.log(data);
  //   setSession(data);
  // } else {
  //   setSession(null);
  // }
  // };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.log(error);
    alert('Signed Out')
    getSession();
  }

  // useEffect(() => {
  //   getSession();
  // }, []);


  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="w-full from-blue-gray-900 to-blue-gray-800 px-4 py-2 nav-custom"
    >
      <div className="flex items-center justify-between w-full text-white">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Rehacktor
        </Typography>

        <div className="relative flex gap-2 md:w-auto flex-grow max-w-lg">
          <Searchbar />
        </div>

        {session ? (
          <ul className="flex items-center">
            <li className="relative">
              {/* Gestisci il click sul "Account" per aprire/chiudere il dropdown */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                {/* Rimuovo l'avatar */}
                <span className="mt-2">Account</span>
                {/* Freccetta che cambia direzione automaticamente */}
                <svg
                  className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {/* Mostra il dropdown quando isDropdownOpen è true */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 p-1 rounded-lg shadow-md w-40">
                  <ul className="absolute bg-gray-800 p-2 rounded shadow-md right-0 w-40 text-left">
                    <li className="text-white hover:bg-gray-600 rounded p-2 transition duration-200">
                      <Link to="/account">Settings</Link>
                    </li>
                    <li className="text-white hover:bg-gray-600 rounded p-2 transition duration-200">
                      <Link to="/profile">Profilo</Link>
                    </li>
                    <li className="text-white hover:bg-red-600 rounded p-2 transition duration-200">
                      <button onClick={signOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-4 mt-2">
            <li>
              <Link to="/login" className="secondary">Login</Link>
            </li>
            <li>
              <Link to="/register" className="secondary">Registrati</Link>
            </li>
          </ul>
        )}
      </div>
    </Navbar>
  );
}