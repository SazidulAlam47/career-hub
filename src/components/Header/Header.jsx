import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const activeRoute =
        "bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text";
    const inactiveRoute = "text-black";

    const links = (
        <>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeRoute : inactiveRoute
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? activeRoute : inactiveRoute
                }
                to="/jobs"
            >
                Applied Jobs
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    isActive ? activeRoute : inactiveRoute
                }
                to="/blog"
            >
                Blog
            </NavLink>
        </>
    );

    return (
        <div className="py-4 bg-[#f9f8ff]">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <nav
                            tabIndex={0}
                            className="flex flex-col gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </nav>
                    </div>
                    <Link to="/" className="text-2xl font-semibold">
                        CareerHub
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="flex gap-3 px-1">{links}</nav>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5">
                        Start Applying
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
