import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={deployedLink}>Deployed Application</a>
            <a href={githubLink}>GitHub Repository</a>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};

export default Project;