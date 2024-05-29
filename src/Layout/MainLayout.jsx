import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;