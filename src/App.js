import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { AppProvider } from "./Hooks/context";
import SubMenu from "./Components/SubMenu";
function App() {
    return (
        <AppProvider>
            <div className="stripe-app">
                <Header />
                <Sidebar />
                <SubMenu />
            </div>
        </AppProvider>
    );
}

export default App;
