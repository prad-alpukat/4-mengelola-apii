import { NavLink } from "react-router-dom";
import Products from "./Products";

// rfc -> shortcut untuk create react functional component

// berisi product hp 
export default function SectionHero() {

    return (
        <section className="container">
            <NavLink to="/add-product" className="mb-10 btn btn-primary">
                Tambah
            </NavLink>
            <Products />
        </section>
    )
}
