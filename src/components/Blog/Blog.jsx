import { Helmet } from "react-helmet-async";
import PageTitle from "../PageTitle/PageTitle";

const Blog = () => {
    return (
        <div>
            <PageTitle title="Blog" />
            <Helmet>
                <title>CareerHub | Blog</title>
            </Helmet>
            <div className="container mx-auto py-44 text-center">
                <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                    Coming Soon ...
                </h4>
            </div>
        </div>
    );
};

export default Blog;
