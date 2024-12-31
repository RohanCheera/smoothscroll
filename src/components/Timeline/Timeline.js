import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./timeline.css";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiAchievement } from "react-icons/gi";
import { FaUniversity, FaTrophy } from 'react-icons/fa';  // Font Awesome icons
import { IoIosLaptop } from 'react-icons/io';  // Ionicons

function Timeline() {
  return (
    <div className="main-timeline">
      <h1 className="timeline-title">Education & Certifications</h1>
      <div className="timeline">
      <div className="timeline-content left-content">
  <div className="img">
    <IoIosLaptop /> {/* Icon for university or internship */}
  </div>
  <div className="text-box">
    <h2>Internship Offer: Keyloop India Pvt Ltd</h2>
    <small>January 2025 - June 2025</small>
    <p>
      I am thrilled to announce my upcoming internship at Keyloop India Private Limited! As a Software Development Intern, I will be applying my skills in Python, JavaScript, and C++ to real-world software development challenges. 
    </p>
    <ul>
      <li><strong>Responsibilities:</strong> Develop software solutions, collaborate on projects, and improve product offerings.</li>
      <li><strong>Skills Applied:</strong> Programming in Python, JavaScript, C++.</li>
      <li><strong>Learning:</strong> Enhancing my understanding of cloud computing, agile workflows, and software engineering practices.</li>
    </ul>
    <span className="left-content-arrow"></span>
  </div>
</div>

<div className="timeline-content right-content">
  <div className="img">
    <FaTrophy /> {/* Icon for achievement or contest */}
  </div>
  <div className="text-box">
    <h2>LeetCode Weekly Contest 421: Global Rank Achieved</h2>
    <small>October 2024</small>
    <p>
      I participated in LeetCode Weekly Contest 421 and successfully solved 3 out of 4 problems, achieving a global rank of 630 out of 27,897 participants. This milestone marks my first three-digit rank in a competitive programming contest!
    </p>
    <p><strong>Key Takeaway:</strong> Perseverance and problem-solving are essential in competitive programming—never give up until the last minute!</p>
    <p>Thank you to everyone who has supported me along the way. I look forward to continuing this journey of improvement and learning!</p>
    <p>
      <strong>Hashtags:</strong> #LeetCode #CompetitiveProgramming #Achievement #LearningJourney #Perseverance
    </p>
    <span className="right-content-arrow"></span>
  </div>
</div>

        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <FaUniversity />
          </div>
          <div className="text-box">
            <h2>The Unwritten Chapters: Awaiting Future Achievements</h2>
            <small>Future</small>
            <p>
              <em>
                This timeline box eagerly awaits the unfolding of my upcoming
                milestones and achievements. Stay tuned for the remarkable
                chapters that will shape my educational journey.
              </em>
            </p>

            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Innovative Strides: Navigating the Graduation Landscape</h2>
            <small>2021 - Present</small>
            
              <ul>
                <li>
                  <p>Active participation in various hackathons, showcasing
                  problem-solving skills and collaborative spirit.</p>
                </li>
                <li>
                  <p>Dedicated learning journey, completing courses on NPTEL,
                  Coursera, Udemy, and Jobaaj to broaden skillsets.</p>
                </li>
                <li>
                  <p>
                  Proficiency in programming languages including Python and C++,
                  demonstrated through consistent contributions on platforms
                  like LeetCode, Kaggle, and GitHub.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Chaitanya Bharathi Institute of Technology, Hyderabad</h2>
            <small>2021-2025 (Ongoing)</small>
            <p>
              Bachelor's Degree in Artificial Intelligence and Data Science{" "}
              <br />
              Enrolled in the Bachelor's program at Chaitanya Bharathi Institute
              of Technology, specializing in Artificial Intelligence and Data
              Science. Passionate about the course and looking forward to
              completing the program in 2024.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Epic Odyssey: Navigating Quantum Realms during Intermediate</h2>
            <small>2020 - 2021</small>
            
              <ul>
                <li>
                <p>
                  Embarked on a challenging journey to crack IIT entrance exams,
                  showcasing determination with a commendable 96%.
                 </p>
                </li>
                <li>
                <p>
                  Achieved the remarkable 5000th rank in the TSEAMCET
                  examination, leading to a stellar seat at CBIT.
                 </p>
                </li>
                <li>
                <p>
                  Persistently pursued excellence, though the IIT seat remained
                  elusive.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Sri Gayatri Junior College</h2>
            <small>2018-2020</small>
            <p>
              Intermediate Education
              <br /> Pursued Intermediate education at Sri Gayatri Junior
              College, specializing in the Maths, Physics, and Chemistry group.
              Achieved an outstanding result with a score of 962/1000.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content right-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <GiAchievement />
          </div>
          <div className="text-box">
            <h2>Quantum Achievements at School</h2>
            <small>During Schooling</small>
            
              <ul>
                <li>
                <p>
                  Engaged in various extracurricular activities with enthusiasm.
                  </p>
                </li>
                <li>
                <p>
                  Contributed to science fairs and showcased projects with
                  creativity.
                  </p>
                </li>
              </ul>
            

            <span className="right-content-arrow"></span>
          </div>
        </div>
        <div className="timeline-content left-content">
          {/* <img src='../../assets/scl.png' alt='school'/> */}
          <div className="img">
            <LiaSchoolSolid />
          </div>
          <div className="text-box">
            <h2>Siddhartha Model High School</h2>
            <small>2010-2018</small>
            <p>
              High School Education <br />
              Completed my 10th class in Siddhartha Model High School with a
              stellar performance, securing a remarkable GPA of 9/10.
            </p>
            <span className="left-content-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;