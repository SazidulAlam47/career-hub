import PropTypes from "prop-types";

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="text-center pb-8">
            <h3 className="text-3xl font-extrabold pb-3">{heading}</h3>
            <p className="text-sm text-neutral-400 px-8 md:px-0">
                {subHeading}
            </p>
        </div>
    );
};
SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectionHeading;
