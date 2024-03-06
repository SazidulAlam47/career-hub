import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const SingleJob = ({ job }) => {
    return (
        <div className="border rounded-lg px-1 md:px-6 py-6">
            <div className="max-w-48 pb-3 mx-auto md:mx-0">
                <img
                    src={job.logo}
                    alt={job.company_name}
                    className="mx-auto md:mx-0"
                />
            </div>
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
            <div className="flex flex-col gap-2 lg:gap-5 lg:flex-row items-center md:items-start text-sm text-neutral-500 font-semibold pt-3 pb-4">
                <div className="flex gap-1">
                    <IoLocationOutline className="w-5 h-5" />
                    <span>{job.contact_information.address}</span>
                </div>
                <div className="flex gap-1">
                    <AiOutlineDollarCircle className="w-5 h-5" />
                    <span>Salary : {job.salary}</span>
                </div>
            </div>
            <div className="text-center md:text-left">
                <Link
                    to={`/job/${job.id}`}
                    className="btn btn-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded text-sm font-bold px-4"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

SingleJob.propTypes = {
    job: PropTypes.object.isRequired,
};

export default SingleJob;
