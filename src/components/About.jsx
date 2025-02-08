/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import "./About.css";
const About = () => {
  const handleScrollToContact = () => {
    // Use native JavaScript to scroll to the 'contact' section
    const contactSection = document.getElementById("portfolio");
    contactSection?.scrollIntoView({ behavior: "smooth" });}

  return (<>
    {/* <StarfieldBackground/> */}
    <section className="about" id="About">
      <div className="about-container">
        <h2 className=" about-title">About <span className="gradient-text">Me</span></h2>
        <p className="about-description">
          Hey there! I'm <span className="highlight">Abhay Singh</span>, a passionate 
          <span className="highlight"> Software Engineer</span> who thrives on solving complex problems 
          through clean, efficient, and scalable code. Currently pursuing my B.Tech in 
          <span className="highlight"> Computer Science</span> at Manipal University Jaipur, I have 
          honed my skills in full-stack development, data analytics, and system design.
        </p>
        <p className="about-description">
          I have led impactful projects, including heading the 
          <span className="highlight"> Deloitte Capstone Program</span>, where I managed a diverse team to deliver real-world business solutions. 
          My experience at AISEC as an Event Head sharpened my leadership, collaboration, and organizational abilities.
        </p>
        <p className="about-description">
          With hands-on expertise in <span className="highlight"> React, Node.js, Flask, Django, 
          Spring Boot, and cloud platforms like AWS</span>, I have built scalable applications such as a 
          <span className="highlight"> Music Streaming Website, Sales Analysis Dashboard, and a Student Budget Tracker</span>. 
          My passion lies in crafting seamless user experiences and data-driven applications.
        </p>
        <div className="about-buttons">
          <button className="btn-gradient view-btn"  onClick={handleScrollToContact} >View My Work</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
