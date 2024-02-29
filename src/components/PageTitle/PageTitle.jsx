import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
    return (
        <>
            <img
                src="/images/bg2.png"
                alt=" "
                className="w-36 md:w-60 absolute top-0 right-0 z-10"
            />
            <div className="bg-[#f9f8ff] relative">
                <h2 className="text-2xl font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {title}
                </h2>
                <img src="/images/bg1.png" alt=" " className="w-36 md:w-60" />
            </div>
        </>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;
