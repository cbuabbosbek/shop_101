import { Link } from "react-router"

function Navbar() {
    return (
        <>
            <nav>
                <div id="logo">Abbos</div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar