import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGlobalContext } from "../Hooks/context";
import sublinks from "./data";

const Navbar = () => {
    const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

    const mouseHoverHandler = e => {
        const pageName = e.target.textContent;
        const location = e.target.getBoundingClientRect();
        const center = (location.left + location.right) / 2;
        const bottom = location.bottom + 2;
        openSubMenu(pageName, { center, bottom });
    };
    const mouseMoveHandler = e => {
        if (!e.target.classList.contains("page")) {
            closeSubMenu();
        }
    };
    return (
        <div className="navbar" onMouseOver={mouseMoveHandler}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="logo">
                        <a href="/" className="text-decoration-none">
                            <p className="fs-1">Panda</p>
                        </a>
                    </div>
                    <div className="nav position-relative">
                        <ul className="list d-none d-md-flex list-unstyled m-0 p-0">
                            {sublinks.map((link, index) => (
                                <li
                                    className="page me-2 ms-2 p-2 fs-5"
                                    key={index}
                                    onMouseOver={mouseHoverHandler}
                                >
                                    {link.page}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="menu-icon btn d-md-none text-white"
                            onClick={openSideBar}
                        >
                            <HiOutlineMenuAlt3 className="fs-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
