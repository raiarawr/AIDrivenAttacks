import React from 'react';
import profilePic from '../assets/shane.jpg';

export default function AboutMe() {
  return (
    <div className="w-full max-w-4xl text-center px-4 py-8 mx-auto" id='aboutme'>
            <div id="circuit-animation" className="absolute top-0 left-0 w-full h-full" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-4">
        <span className="typing-container inline-block">About Shane</span>
      </h1>

    <div className="flex flex-col-2 md:flex-row items-stretch gap-8 text-left aboutContent">
          <img
            src={profilePic}
            alt="Shane"
            className="profile"
          />



          <div className="flex-2">
            <p className="text-lg">
              <span className="about">Shane </span> is a 21-year-old 3rd-year Bachelor of Science in Information Technology (BSIT) student at Gingoog City Colleges Inc. With a background that blends technology and creativity, she focuses on projects involving design, digital art, and systems development.
            </p>

            <p className="text-lg mt-4">
              AI-driven attacks piqued her interest due to their growing relevance in the tech industry, especially in fields where innovation and design intersect. As someone preparing to enter a career that involves both system development and digital content, she recognizes how AI threats can impact not just large organizations but also individual creators and professionals.
            </p>

            <p className="text-lg mt-4">
              This website was developed as a platform to raise awareness about the risks and real-world impact of AI-driven threats. It aims to present key information in a clear and accessible way, especially for students, creatives, and individuals who rely heavily on digital tools.
            </p>

            <p className="text-lg mt-4">
              As a student in the tech field, Shane believes that understanding the implications of AI misuse is essential. Starting early with awareness can help prepare future professionals to face and respond to these challenges more effectively.
            </p>
          </div>
      </div>
    </div>
  );
}
