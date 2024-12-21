import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioImage from '../assets/lauren-mancke-aOC7TSLb1o8-unsplash.jpg';
import employeeTrackerImage from '../assets/windows-kRWY72TKB0Y-unsplash.jpg';
import weatherDashboardImage from '../assets/noaa-WHLI73X8tE0-unsplash.jpg';
import vehicleBuilderImage from '../assets/averie-woodard-j4nBSqFf08U-unsplash.jpg';
import readmeGeneratorImage from '../assets/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
import studyGuideImage from '../assets/aaron-burden-LNwn_A9RGHo-unsplash.jpg';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio Application",
            image: portfolioImage,
            url: 'https://github.com/bbybee1747/portfolio-challenge.git',
        },
        {
            id: 2,
            title: "Employee Tracker Application",
            image: employeeTrackerImage,
            url: 'https://github.com/bbybee1747/employee_tracker_challenge.git',
        },
        {
            id: 3,
            title: "Weather Dashboard Application",
            image: weatherDashboardImage,
            url: 'https://github.com/bbybee1747/weather_api_challenge.git',
        },
        {
            id: 4,
            title: "Vehicle Builder Terminal Application",
            image: vehicleBuilderImage,
            url: 'https://github.com/bbybee1747/Vehicle-Builder.git',
        },
        {
            id: 5,
            title: "ReadMe Generator Terminal Application",
            image: readmeGeneratorImage,
            url: 'https://github.com/bbybee1747/ReadMe_Creation_Node_Challenge.git',
        },
        {
            id: 6,
            title: "PreWork Study-Guide Website",
            image: studyGuideImage,
            url: 'https://github.com/bbybee1747/Pre-Work-Study-Guide.git',
        }
    ];

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projects.map((project) => (
                    <div key={project.id} className="col">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none d-block position-relative"
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="img-fluid border-0"
                                style={{
                                    width: '350px',
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
                                className="position-absolute top-50 start-50 translate-middle bg-white bg-opacity-75 p-2 rounded text-center"
                                style={{
                                    transition: 'opacity 0.3s',
                                    fontSize: '1.25rem',
                                    pointerEvents: 'none',
                                    opacity: '0',
                                }}
                            >
                                {project.title}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;