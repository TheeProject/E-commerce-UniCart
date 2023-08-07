import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  color: 'orange',
  margin: '20px 0',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: 1.5,
  marginBottom: '10px',
};

const bulletListStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const listItemStyle = {
  fontSize: '16px',
  lineHeight: 1.5,
};

function AboutPage() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to our website! We are a passionate team of developers who love
        creating amazing web applications using React.
      </p>
      <p style={paragraphStyle}>
        Our mission is to build user-friendly and high-performance web
        experiences that cater to the needs of our users.
      </p>
      <h1 style={titleStyle}>Our Vision</h1>
      <p style={paragraphStyle}>
        We envision a world where technology enriches people's lives by solving
        real-world problems and providing seamless experiences.
      </p>
      <h1 style={titleStyle}>Our Values</h1>
      <ul style={bulletListStyle}>
        <li style={listItemStyle}>Innovation</li>
        <li style={listItemStyle}>Customer Satisfaction</li>
        <li style={listItemStyle}>Teamwork</li>
        <li style={listItemStyle}>Quality</li>
      </ul>
      <h1 style={titleStyle}>Contact Us</h1>
      <p style={paragraphStyle}>
        If you have any questions or feedback, feel free to reach out to us at
        info@unicart.com
      </p>
    </div>
  );
}

export default AboutPage;






