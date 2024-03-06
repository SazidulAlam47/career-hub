import SectionHeading from "../SectionHeading";
import SingleJob from "./SingleJob";
import { useEffect, useState } from "react";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showJob, setShowJob] = useState(4);

    useEffect(() => {
        fetch("/data/jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    // this is not the perfect way to handle show all data
    useEffect(() => {
        if (showAll) setShowJob(jobs.length);
        else setShowJob(4);
    }, [showAll, jobs.length]);

    return (
        <div id="jobs" className="container px-2 mx-auto py-16 ">
            <SectionHeading
                heading="Featured Jobs"
                subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.slice(0, showJob).map((job) => (
                    <SingleJob key={job.id} job={job} />
                ))}
            </div>
            <div className="text-center pt-4">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5"
                >
                    {showAll ? "Show Less" : "See All Jobs"}
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
