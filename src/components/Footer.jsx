import { TfiInstagram } from "react-icons/tfi";
import { FaGithub, FaFacebook } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="text-white mt-5">
            <h2>Rehacktor</h2>
            <div className="container ">
                <section className="footerC">
                    <ul>
                        <li>
                            <a href="#" className="btn text-white"><TfiInstagram /></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="btn text-white"><FaGithub /></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="btn text-white"><FaFacebook /></a>
                        </li>
                    </ul>
                </section>
            </div>
            <div>© 2023 Rehacktor</div>
        </footer>
    );
}