import React from 'react';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Picture 1",
            image: '',
            url: 'https://www.google.com',
        },
        {
            id: 2,
            title: "Picture 2",
            image: '',
            url: 'https://www.google.com',
        },
        {
            id: 3,
            title: "Picture 3",
            image: '',
            url: 'https://www.google.com',
        },
        {
            id: 4,
            title: "Picture 4",
            image: '',
            url: 'https://www.google.com',
        },
        {
            id: 5,
            title: "Picture 5",
            image: '',
            url: 'https://www.google.com',
        },
        {
            id: 6,
            title: "Picture 6",
            image: '',
            url: 'https://www.google.com',
        }

    ];

    return (
        <div className="portfolio-container">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
            </a>
          ))}
        </div>
      );
    };
    
    export default Portfolio;