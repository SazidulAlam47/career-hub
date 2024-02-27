import PropTypes from "prop-types";

const SingleCategory = ({ categoryListItem }) => {
    return (
        <div className="bg-[#f9f9ff] p-6 rounded-lg">
            <div className="bg-[#efecff] w-16 h-16 rounded-lg flex justify-center items-center mb-4">
                <img src={categoryListItem.logo} alt="accounts" />
            </div>
            <h3 className="font-bold text-md">
                {categoryListItem.category_name}
            </h3>
            <p className="text-sm text-neutral-400">
                {categoryListItem.availability}
            </p>
        </div>
    );
};

SingleCategory.propTypes = {
    categoryListItem: PropTypes.object.isRequired,
};

export default SingleCategory;
