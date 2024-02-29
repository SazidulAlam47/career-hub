import { Link } from "react-router-dom";

const Footer = () => {
    const siteName = "CareerHub";
    const siteDescription =
        "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.";

    return (
        <footer className="bg-neutral-800 text-neutral-400 py-10">
            <div className="container mx-auto px-6 md:px-0 text-center pb-8 lg:hidden">
                <Link className="text-xl font-bold text-white">{siteName}</Link>
                <p className="px-3 pt-2">{siteDescription}</p>
            </div>
            <div className="footer grid-cols-2 lg:grid-cols-5 container mx-auto pb-10 px-6 md:px-0">
                <aside className="hidden lg:block">
                    <Link className="text-xl font-bold text-white">
                        {siteName}
                    </Link>
                    <p className="w-60">{siteDescription}</p>
                </aside>
                <nav>
                    <h6 className="font-bold text-md text-white">Company</h6>
                    <Link className="hover:text-neutral-200">About Us</Link>
                    <Link className="hover:text-neutral-200">Work</Link>
                    <Link className="hover:text-neutral-200">Latest News</Link>
                    <Link className="hover:text-neutral-200">Careers</Link>
                </nav>
                <nav>
                    <h6 className="font-bold text-md text-white">Product</h6>
                    <Link className="hover:text-neutral-200">Prototype</Link>
                    <Link className="hover:text-neutral-200">
                        Plans & Pricing
                    </Link>
                    <Link className="hover:text-neutral-200">Customers</Link>
                    <Link className="hover:text-neutral-200">Integrations</Link>
                </nav>
                <nav>
                    <h6 className="font-bold text-md text-white">Support</h6>
                    <Link className="hover:text-neutral-200">Help Desk</Link>
                    <Link className="hover:text-neutral-200">Sales</Link>
                    <Link className="hover:text-neutral-200">
                        Become a Partner
                    </Link>
                    <Link className="hover:text-neutral-200">Developers</Link>
                </nav>
                <nav>
                    <h6 className="font-bold text-md text-white">Contact</h6>
                    <p className="hover:text-neutral-200">524 Broadway , NYC</p>
                    <a
                        href="tel:+17779785570"
                        className="hover:text-neutral-200"
                    >
                        +1 777 - 978 - 5570
                    </a>
                </nav>
            </div>
            <div className="container mx-auto px-6 md:px-0">
                <div className="flex flex-col md:flex-row justify-between border-t pt-5 pb-10 text-xs border-neutral-700 text-neutral-400">
                    <p className="pb-1 md:pb-0">
                        @2024 CareerHub. All Rights Reserved
                    </p>
                    <p>
                        Powered by <span className="font-bold">CareerHub</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
