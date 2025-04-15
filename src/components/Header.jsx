import { Navbar, Typography } from "@material-tailwind/react";
import Searchbar from "./Searchbar";
import { Link, useNavigate } from "react-router";
import supabase from "../supabase/supabase-client.js"
import { useContext } from "react";
import SessionContext from "../context/SessionContext";

export default function Header() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);

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
    // <Navbar
    //   variant="gradient"
    //   color="blue-gray"
    //   className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    // >
    //   <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
    //     <Typography
    //       as="a"
    //       href="/"
    //       variant="h6"
    //       className="mr-4 ml-2 cursor-pointer py-1.5"
    //     >
    //       Rehacktor
    //     </Typography>


    //     <div className="relative flex w-full gap-2 md:w-max">
    //       <Searchbar />
    //     </div>
    //     {session ? (
    //       <ul>
    //         <li>
    //           <details>
    //             <summary>Account</summary>
    //             <ul dir="rtl">
    //               <li>
    //                 <Link to="/account">Settings</Link>
    //               </li>
    //               <li>
    //                 <Link to="/profile">Profilo</Link>
    //               </li>
    //               <li>
    //                 <button onClick={signOut}>Logout</button>
    //               </li>
    //             </ul>
    //           </details>
    //         </li>
    //       </ul>
    //     ) : (

    //       <ul className="mr-4 cursor-pointer d-flex ">
    //         <li className="mx-2">
    //           <Link to="/login" className="secondary">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/register" className="secondary">Registrati</Link>
    //         </li>
    //       </ul>
    //     )}
    //   </div>
    // </Navbar>
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="w-full from-blue-gray-900 to-blue-gray-800 px-4 py-3 nav-custom"
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
            <li>
              <details className="relative">
                <summary className="cursor-pointer">Account</summary>
                <ul className="absolute bg-gray-800 p-2 rounded shadow-md right-0 mt-1">
                  <li>
                    <Link to="/account">Settings</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profilo</Link>
                  </li>
                  <li>
                    <button onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-4">
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