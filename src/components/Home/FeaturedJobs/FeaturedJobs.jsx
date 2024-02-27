import SectionHeading from "../SectionHeading";
import SingleJob from "./SingleJob";
import { useEffect, useState } from "react";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/data/jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div className="container mx-auto py-16 px-6 md:px-0">
            <SectionHeading
                heading="Featured Jobs"
                subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.slice(0, 4).map((job) => (
                    <SingleJob key={job.id} job={job} />
                ))}
            </div>
            <div className="text-center pt-4">
                <button className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5">
                    See All Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
