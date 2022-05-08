import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Hooks/context";

const SubMenu = () => {
    const {
        isOpenSubMenu,
        location,
        page: { page, links },
    } = useGlobalContext();
    const subMenu = useRef(null);
    useEffect(() => {
        subMenu.current.style.left = `${location.center}px`;
        subMenu.current.style.top = `${location.bottom}px`;
    }, [page, location, links]);
    return (
        <div
            className={`${
                isOpenSubMenu ? "show-submenu " : ""
            }submenu position-absolute  bg-white rounded shadow`}
            ref={subMenu}
        >
            <div className="content">
                <h4>{page}</h4>
                <ul className="p-0 m-0 d-flex list-unstyled flex-wrap">
                    {links
                        ? links.map((link, index) => {
                              return (
                                  <li key={index}>
                                      <a
                                          className="text-decoration-none d-block m-1 p-2"
                                          href={link.url}
                                      >
                                          <span className="ms-1">
                                              {link.icon}
                                          </span>
                                          {link.label}
                                      </a>
                                  </li>
                              );
                          })
                        : null}
                </ul>
            </div>
        </div>
    );
};

export default SubMenu;
