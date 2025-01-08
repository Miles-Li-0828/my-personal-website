import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imageSrc, title, description, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 inline-block"
        >
            {/* 图片部分 */}
            <div className="w-full h-48 bg-gray-200">
                < img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div >

            {/* 标题部分 */}
            <div div className="p-4 bg-cyan-950" >
                <h3 className="text-lg font-bold text-white group-hover:underline">
                    {title}
                </h3>
            </div >

            {/* 描述部分 */}
            <div div className="p-4 bg-teal-950" >
                <p className="text-white bg-teal-950">{description}</p>
            </div >
        </a >
    );
};

ProjectCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProjectCard;
