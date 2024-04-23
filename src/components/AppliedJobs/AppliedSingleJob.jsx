import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { removeFromLS } from "../../utilities/localstorage";

const AppliedSingleJob = ({ job, appliedJobs, setAppliedJobs }) => {
    const handleDiscard = () => {
        removeFromLS(job.id);
        const remaining = appliedJobs.filter((jobx) => jobx.id !== job.id);
        setAppliedJobs(remaining);
        console.log(remaining);
    };

    return (
        <div className="border rounded-lg px-1 md:px-6 py-6 flex flex-col md:flex-row items-center gap-4">
            <div className="max-w-48 pb-3 md:bg-[#f4f4f4] rounded-md w-32 md:w-44 md:h-44 flex items-center justify-center">
                <img
                    src={job.logo}
                    alt={job.company_name}
                    className="w-10/12"
                />
            </div>
            <div className="grow">
                <h4 className="font-bold text-md text-center md:text-left">
                    {job.job_title}
                </h4>
                <p className="text-sm text-neutral-500 pt-1 pb-2 font-semibold text-center md:text-left">
                    {job.company_name}
                </p>
                <div className="flex gap-2 justify-center md:justify-start">
                    <span className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text border border-purple-400 px-3 py-1 rounded font-semibold">
                        {job.remote_or_onsite}
                    </span>
                    <span className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text border border-purple-400 px-3 py-1 rounded font-semibold">
                        {job.job_type}
                    </span>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start lg:flex-row text-sm text-neutral-500 font-semibold pt-3 pb-4">
                    <div className="flex gap-1">
                        <IoLocationOutline className="w-5 h-5" />
                        <span>{job.contact_information.address}</span>
                    </div>
                    <div className="flex gap-1">
                        <AiOutlineDollarCircle className="w-5 h-5" />
                        <span>Salary : {job.salary}</span>
                    </div>
                </div>
            </div>
            <Link
                to={`/job/${job.id}`}
                className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded text-sm font-bold px-4"
            >
                View Details
            </Link>
            <button
                onClick={handleDiscard}
                className="btn bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded text-sm font-bold px-4"
            >
                Discard
            </button>
        </div>
    );
};

AppliedSingleJob.propTypes = {
    job: PropTypes.object.isRequired,
    appliedJobs: PropTypes.array.isRequired,
    setAppliedJobs: PropTypes.func.isRequired,
};

export default AppliedSingleJob;
