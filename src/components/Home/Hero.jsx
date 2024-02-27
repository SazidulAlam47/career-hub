import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-[#f9f8ff] ">
            <div className="container mx-auto hero min-h-80">
                <div className="hero-content flex-col lg:flex-row-reverse py-10 lg:p-0">
                    <div className="w-3/4 lg:w-1/2 flex justify-end ">
                        <img src="images/user.png" className="w-full" />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                            One Step Closer To Your&nbsp;
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                                Dream Job
                            </span>
                        </h1>
                        <p className="py-6 lg:w-3/4">
                            Explore thousands of job opportunities with all the
                            information you need. Its your future. Come find it.
                            Manage all your job application from start to
                            finish.
                        </p>
                        <Link className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
