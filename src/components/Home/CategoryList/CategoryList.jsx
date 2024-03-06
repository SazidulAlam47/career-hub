import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import SingleCategory from "./SingleCategory";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch("/data/categories.json")
            .then((res) => res.json())
            .then((data) => setCategoryList(data));
    }, []);

    return (
        <div className="container px-3 md:px-3 mx-auto py-16">
            <SectionHeading
                heading="Job Category List"
                subHeading="Explore thousands of job opportunities with all the information you need. Its your future"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-0">
                {categoryList.map((categoryListItem) => (
                    <SingleCategory
                        key={categoryListItem.id}
                        categoryListItem={categoryListItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
