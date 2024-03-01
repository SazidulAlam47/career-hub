import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import AppliedSingleJob from "./AppliedSingleJob";
import { HiChevronDown } from "react-icons/hi2";
import { getStoredJobs } from "../../utilities/localstorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const jobList = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [jobFilter, setJobFilter] = useState("All");

    useEffect(() => {
        if (jobFilter === "All") setDisplayJobs(appliedJobs);
        else if (jobFilter === "Remote")
            setDisplayJobs(
                appliedJobs.filter((job) => job.remote_or_onsite === "Remote")
            );
        else if (jobFilter === "Onsite")
            setDisplayJobs(
                appliedJobs.filter((job) => job.remote_or_onsite === "Onsite")
            );
    }, [jobFilter, appliedJobs]);

    useEffect(() => {
        const appliedJobsId = getStoredJobs();
        if (appliedJobsId.length > 0) {
            const appliedJobsList = [];
            appliedJobsId.map((jobId) => {
                const job = jobList.find((job) => job.id === jobId);
                appliedJobsList.push(job);
            });
            setAppliedJobs(appliedJobsList);
            setDisplayJobs(appliedJobsList);
        }
    }, [jobList]);

    const navigate = useNavigate();
    const handleScroll = (elementId) => {
        navigate("/");
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    duration: 500,
                    offset: 15,
                });
            } else {
                console.error(`Element with id ${elementId} not found`);
            }
        }, 150);
    };

    return (
        <>
            <PageTitle title="Applied Jobs" />

            {appliedJobs.length ? (
                <div className="container mx-auto py-16">
                    <div className="mb-5 text-right">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">
                                Filter By <HiChevronDown />
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <button onClick={() => setJobFilter("All")}>
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setJobFilter("Remote")}
                                    >
                                        Remote
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setJobFilter("Onsite")}
                                    >
                                        Onsite
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {displayJobs.length ? (
                        <div className="flex flex-col gap-4">
                            {displayJobs.map((job) => (
                                <AppliedSingleJob
                                    key={job.id}
                                    job={job}
                                    setAppliedJobs={setAppliedJobs}
                                    appliedJobs={appliedJobs}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                                You didn&apos;t applied for any {jobFilter} Jobs
                            </h4>
                        </div>
                    )}
                </div>
            ) : (
                <div className="container mx-auto py-40 text-center">
                    <h4 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                        You didn&apos;t applied for any Jobs
                    </h4>
                    <p className="text-neutral-500 py-2">
                        Apply for jobs to see them listed here.
                    </p>
                    <button
                        onClick={() => handleScroll("jobs")}
                        className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-3 md:px-5 z-50"
                    >
                        Apply Now
                    </button>
                </div>
            )}
        </>
    );
};

export default AppliedJobs;
