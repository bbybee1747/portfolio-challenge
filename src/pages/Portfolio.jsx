import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioImage from '../assets/lauren-mancke-aOC7TSLb1o8-unsplash.jpg';
import employeeTrackerImage from '../assets/windows-kRWY72TKB0Y-unsplash.jpg';
import weatherDashboardImage from '../assets/noaa-WHLI73X8tE0-unsplash.jpg';
import vehicleBuilderImage from '../assets/averie-woodard-j4nBSqFf08U-unsplash.jpg';
import readmeGeneratorImage from '../assets/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import studyGuideImage from '../assets/aaron-burden-LNwn_A9RGHo-unsplash.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Application",
            image: portfolioImage,
            url: 'https://github.com/bbybee1747/portfolio-challenge.git',
            githubImage: 'bi-github',
        },
        {
            id: 2,
            title: "Employee Tracker Application",
            image: employeeTrackerImage,
            url: 'https://github.com/bbybee1747/employee_tracker_challenge.git',
            githubImage: 'bi-github',
        },
        {
            id: 3,
            title: "Weather Dashboard Application",
            image: weatherDashboardImage,
            url: 'https://github.com/bbybee1747/weather_api_challenge.git',
            githubImage: 'bi-github',
        },
        {
            id: 4,
            title: "Vehicle Builder Terminal Application",
            image: vehicleBuilderImage,
            url: 'https://github.com/bbybee1747/Vehicle-Builder.git',
            githubImage: 'bi-github',
        },
        {
            id: 5,
            title: "ReadMe Generator Terminal Application",
            image: readmeGeneratorImage,
            url: 'https://github.com/bbybee1747/ReadMe_Creation_Node_Challenge.git',
            githubImage: 'bi-github',
        },
        {
            id: 6,
            title: "PreWork Study-Guide Website",
            image: studyGuideImage,
            url: 'https://github.com/bbybee1747/Pre-Work-Study-Guide.git',
            githubImage: 'bi-github',
        }
    ];

    return (
        <div className="d-flex flex-column flex-grow-1 portfolio" >
            <div className="d-flex mt-5 mb-5 flex-column align-items-center">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {projects.map((project, index) => (
                        <div key={project.id} className="col">
                            <div
                                className="position-relative d-block"
                                style={{
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="img-fluid border-0"
                                    style={{
                                        width: index % 2 === 0 ? '400px' : '450px', 
                                        height: 'auto',
                                        transition: 'transform 0.2s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.nextElementSibling.style.opacity = '1';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.nextElementSibling.style.opacity = '0';
                                    }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 end-0 bottom-0 bg-white bg-opacity-75 d-flex flex-column align-items-center justify-content-center p-2"
                                    style={{
                                        transition: 'opacity 0.3s',
                                        opacity: '0',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <h5 className="mb-2">{project.title}</h5>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-decoration-none ${project.githubImage}`}
                                        style={{
                                            fontSize: '2rem',
                                            color: '#000',
                                        }}
                                    >
                                        <i className={`bi ${project.githubImage}`}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;