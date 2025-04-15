import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout() {

    return (
        <div className="container-fluid">


            {/* <div className="container-fluid">
                <Searchbar />
            </div> */}

            <Header />


            <div className="container-fluid">
                <Outlet />
            </div>

            < div className="container-fluid">
                <Footer />
            </div>

        </div>
    );
};