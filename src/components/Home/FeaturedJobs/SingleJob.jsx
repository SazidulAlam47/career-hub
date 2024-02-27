import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const SingleJob = ({ job }) => {
    return (
        <div className="border rounded-lg p-6">
            <div className="max-w-48 pb-3">
                <img src={job.logo} alt="Google" />
            </div>
            <h4 className="font-bold text-md">{job.job_title}</h4>
            <p className="text-sm text-neutral-500 pt-1 pb-2 font-semibold">
                {job.company_name}
            </p>
            <div className="flex gap-2">
                <span className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text border border-purple-400 px-3 py-1 rounded font-semibold">
                    {job.remote_or_onsite}
                </span>
                <span className="text-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text border border-purple-400 px-3 py-1 rounded font-semibold">
                    {job.job_type}
                </span>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row text-sm text-neutral-500 font-semibold pt-3 pb-4">
                <div className="flex gap-1">
                    <IoLocationOutline className="w-5 h-5" />
                    <span>{job.contact_information.address}</span>
                </div>
                <div className="flex gap-1">
                    <AiOutlineDollarCircle className="w-5 h-5" />
                    <span>Salary : {job.salary}</span>
                </div>
            </div>
            <Link className="btn btn-sm bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded text-sm font-bold px-4">
                View Details
            </Link>
        </div>
    );
};

SingleJob.propTypes = {
    job: PropTypes.object.isRequired,
};

export default SingleJob;
