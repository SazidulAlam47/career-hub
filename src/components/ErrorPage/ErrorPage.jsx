import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto py-40 text-center">
                <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                    Page Not Found
                </h4>
                <p className="text-neutral-500 pt-2 pb-4">
                    The page you were looking for may have been moved or no
                    longer exists.
                </p>
                <Link
                    to="/"
                    className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-3 md:px-5 z-50"
                >
                    Return to Home
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;
