import React from "react";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Hooks/context";

const Sidebar = () => {
    const { isOpenSideBar, closeSideBar } = useGlobalContext();
    return (
        <div
            className={`${
                isOpenSideBar ? "show-sidebar" : ""
            } sidebar position-fixed top-50 end-50 shadow p-2 rounded w-75 bg-white`}
        >
            <div className="close-btn text-start">
                <button className="btn fs-2" onClick={closeSideBar}>
                    <FaTimes className="text-danger" />
                </button>
            </div>
            {sublinks.map((link, index) => {
                return (
                    <div className="sub-menu" key={index}>
                        <h4>{link.page}</h4>
                        <ul className="list-unstyled p-0 d-flex flex-wrap">
                            {link.links.map((subLink, index) => (
                                <li key={index} className="m-2">
                                    <a
                                        href={subLink.url}
                                        className="text-decoration-none d-block"
                                    >
                                        {subLink.icon} {subLink.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
