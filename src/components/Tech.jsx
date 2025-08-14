import React from "react";
import { SectionWrapper } from "../hoc";

const floatStyle = {
  width: "800px",
  maxWidth: "100%",
  height: "auto",
  animation: "float 3.5s ease-in-out infinite"
};

const iconStyle = {
  width: "110px",
  height: "110px",
  margin: "0 32px",
  transition: "transform 0.2s",
  animation: "pulse 1.8s infinite"
};

const leetcodeColor =
  "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
const hackerrankColor =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png";

const Tech = () => (
  <section>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-24px); }
        100% { transform: translateY(0px); }
      }
      @keyframes pulse {
        0% { transform: scale(1); filter: brightness(1); }
        50% { transform: scale(1.18); filter: brightness(1.2); }
        100% { transform: scale(1); filter: brightness(1); }
      }
      .coding-handle-icon:hover {
        transform: scale(1.15);
      }
    `}</style>
    <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-7 gap-4 max-w-4xl">
        <img src="https://skillicons.dev/icons?i=python&theme=light&size=96" alt="Python" />
        <img src="https://skillicons.dev/icons?i=js&theme=light&size=96" alt="JavaScript" />
        <img src="https://skillicons.dev/icons?i=c&theme=light&size=96" alt="C" />
        <img src="https://skillicons.dev/icons?i=cpp&theme=light&size=96" alt="C++" />
        
        <img src="https://skillicons.dev/icons?i=html&theme=light&size=96" alt="HTML" />
        <img src="https://skillicons.dev/icons?i=css&theme=light&size=96" alt="CSS" />
        
        <img src="https://skillicons.dev/icons?i=react&theme=light&size=96" alt="React" />
        <img src="https://skillicons.dev/icons?i=nextjs&theme=light&size=96" alt="Next.js" />
        <img src="https://skillicons.dev/icons?i=nodejs&theme=light&size=96" alt="Node.js" />
        
        <img src="https://skillicons.dev/icons?i=tensorflow&theme=light&size=96" alt="TensorFlow" />
        <img src="https://skillicons.dev/icons?i=mongodb&theme=light&size=96" alt="MongoDB" />
        
        
        
        <img src="https://skillicons.dev/icons?i=aws&theme=light&size=96" alt="AWS" />
        <img src="https://skillicons.dev/icons?i=sqlite&theme=light&size=96" alt="SQLite" />
        <img src="https://skillicons.dev/icons?i=mysql&theme=light&size=96" alt="MySQL" />
        <img src="https://skillicons.dev/icons?i=vscode&theme=light&size=96" alt="VS Code" />
        <img src="https://skillicons.dev/icons?i=git&theme=light&size=96" alt="Git" />
        <img src="https://skillicons.dev/icons?i=github&theme=light&size=96" alt="GitHub" />
        
        <img src="https://skillicons.dev/icons?i=figma&theme=light&size=96" alt="Figma" />
        
      </div>
    </div>
    {/* Coding Handles Section */}
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-6">Coding Handles</h2>
      <div className="flex flex-row justify-center items-center gap-10">
        <a href="https://leetcode.com/u/Gagansingh23454321/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img
            src={leetcodeColor}
            alt="LeetCode"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
        <a href="https://www.hackerrank.com/profile/2k23_it1a_050" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <img
            src={hackerrankColor}
            alt="HackerRank"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Tech, "");
