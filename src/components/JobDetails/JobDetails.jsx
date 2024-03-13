import PageTitle from "../PageTitle/PageTitle";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToLS } from "../../utilities/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const { jobId } = useParams();
    const jobIdInt = parseInt(jobId);
    const jobList = useLoaderData();
    const selectedJob = jobList.find((job) => job.id == jobIdInt);

    const applied = () => {
        const added = addToLS(jobIdInt);
        added
            ? toast("Successfully applied for " + selectedJob.job_title)
            : toast("You have already applied for this job.");
    };

    return (
        <>
            <PageTitle title="Job Details" />
            <Helmet>
                <title>CareerHub | {selectedJob.job_title}</title>
            </Helmet>
            <div className="container px-4 mx-auto py-16 flex flex-col lg:flex-row gap-5 ">
                <div className="flex flex-col gap-3">
                    <p className="text-sm text-neutral-500">
                        <span className="font-bold text-neutral-900">
                            Job Description:
                        </span>{" "}
                        {selectedJob.job_description}
                    </p>
                    <p className="text-sm text-neutral-500">
                        <span className="font-bold text-neutral-900">
                            Job Responsibility:
                        </span>{" "}
                        {selectedJob.job_responsibility}
                    </p>
                    <p className="text-sm font-bold text-neutral-900">
                        Educational Requirements:
                    </p>
                    <p className="text-sm text-neutral-500">
                        {selectedJob.educational_requirements}
                    </p>
                    <p className="text-sm font-bold text-neutral-900">
                        Experiences:
                    </p>
                    <p className="text-sm text-neutral-500">
                        {selectedJob.experiences}
                    </p>
                </div>
                <div className="w-full lg:w-8/12">
                    <div className="bg-[#f4f1ff] p-5 rounded-md">
                        <h2 className="text-md font-extrabold pb-2 mb-3 border-b-2">
                            Job Details
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 ">
                                <AiOutlineDollarCircle className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500 ">
                                    <span className="font-bold text-neutral-900">
                                        Salary :
                                    </span>{" "}
                                    {selectedJob.salary}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <IoCalendarOutline className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Job Title :
                                    </span>{" "}
                                    {selectedJob.job_title}
                                </p>
                            </div>
                        </div>
                        <h2 className="text-md font-extrabold pb-2 mb-3 border-b-2 pt-3">
                            Contact Information
                        </h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1">
                                <HiOutlinePhone className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Phone :
                                    </span>{" "}
                                    {selectedJob.contact_information.phone}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <HiOutlineEnvelope className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Email :
                                    </span>{" "}
                                    {selectedJob.contact_information.email}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <SlLocationPin className="w-5 h-5 text-indigo-400" />
                                <p className="text-sm text-neutral-500">
                                    <span className="font-bold text-neutral-900">
                                        Address :
                                    </span>{" "}
                                    {selectedJob.contact_information.address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={applied}
                        className="btn btn-block bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-5 mt-3"
                    >
                        Apply Now
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default JobDetails;
