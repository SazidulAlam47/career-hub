import { Helmet } from "react-helmet-async";
import CategoryList from "./CategoryList/CategoryList";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CareerHub</title>
            </Helmet>
            <Hero />
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;
