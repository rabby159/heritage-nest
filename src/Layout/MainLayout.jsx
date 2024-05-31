import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const MainLayout = () => {
    const location = useLocation();
    const noFooterLogin = location.pathname.includes('signIn');

    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooterLogin || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;