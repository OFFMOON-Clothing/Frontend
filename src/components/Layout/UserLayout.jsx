import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom"; // 

const UserLayout = () => {
    return (
        <>
            {/* Header */}
            <Header />
            
            {/* Main Content */}
            <main>
                <Outlet /> 
            </main>
            
            {/* Footer */}
            <Footer />
        </>
    );
};

export default UserLayout;
