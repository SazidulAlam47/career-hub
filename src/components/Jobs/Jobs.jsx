import { useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import AppliedSingleJob from "./AppliedSingleJob";

const Jobs = () => {
    const jobList = useLoaderData();

    return (
        <>
            <PageTitle title="Applied Jobs" />
            <div className="container mx-auto py-16">
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
