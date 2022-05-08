import React, { useContext, useState } from "react";
import sublinks from "../Components/data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isOpenSideBar, setOpenSideBar] = useState(false);
    const [isOpenSubMenu, setOpenSubMenu] = useState(false);
    const [page, setPage] = useState({ page: "", links: [] });
    const [location, setLocation] = useState({});
    const openSideBar = () => setOpenSideBar(true);
    const closeSideBar = () => setOpenSideBar(false);
    const openSubMenu = (page, location) => {
        const currentPage = sublinks.find(link => link.page === page);
        setOpenSubMenu(true);
        setPage(currentPage);
        setLocation(location);
    };
    const closeSubMenu = () => {
        setOpenSubMenu(false);
        setPage({ page: "", links: [] });
        setLocation({});
    };
    return (
        <AppContext.Provider
            value={{
                isOpenSideBar,
                openSideBar,
                closeSideBar,
                openSubMenu,
                page,
                location,
                isOpenSubMenu,
                closeSubMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
