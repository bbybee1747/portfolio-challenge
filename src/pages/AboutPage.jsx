import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import profileImage from '../assets/594.jpg'; 

const AboutMe = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h1 className="mt-0">About Me</h1>
          <p>
            Hello! My name is Brandon Bybee and I am training to become a web developer. I am currently a student at the University of Kansas studying computer science. 
            I have experience with HTML, CSS, and JavaScript, and I am currently learning React. I am excited to continue learning and growing as a developer.
          </p>
          <p>
            In my free time, I enjoy playing video games, reading, and spending time
            with my friends and family. I also love to travel and explore new places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;