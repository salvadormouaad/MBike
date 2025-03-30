import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {selectFetchStatus} from '../selectors/authSelectors';
import Loader from "../components/Loader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUser} from "../features/authSlice.jsx";
const Layout = () => {
    const dispatch = useDispatch();
    const fetchStatus = useSelector(selectFetchStatus);

/*    // Fetch user on app load
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);*/

    if (fetchStatus === 'loading') {
        return <Loader />;
    }
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
