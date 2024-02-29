import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import AppliedSingleJob from "./AppliedSingleJob";
import { HiChevronDown } from "react-icons/hi2";

const Jobs = () => {
    const jobList = useLoaderData();

    return (
        <>
            <PageTitle title="Applied Jobs" />
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
                                <button>All</button>
                            </li>
                            <li>
                                <button>Remote</button>
                            </li>
                            <li>
                                <button>Full Time</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {jobList.map((job) => (
                        <AppliedSingleJob key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Jobs;
