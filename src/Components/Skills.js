import React from 'react';
import './Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/icons/css/all.min.css';


const Skills = () => {
  return (
    <div>
      <h1 id="Skills-Heading" align="center">
        Skills
      </h1>
      <pre></pre>
      <div id="skills-box">
        <div className="skill-category">
          <h1 className="FE">Front End</h1>

          <div id="Frontend-1">
              <div className="skill-item" id="HTML"><i className="fa-brands fa-html5 fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>HTML</p>
              </div>
              <div className="skill-item" id="CSS"><i className="fa-brands fa-css3-alt fa-5x"></i>
              <p style={{ whiteSpace: 'pre' }}>CSS</p>
              </div>
          </div>

          <div id="Frontend-2">
               <div className="skill-item" id="BOOTSTRAP"><i className="fa-brands fa-bootstrap fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>Bootstrap</p>
               </div>
               <div className="skill-item" id="JAVASCRIPT"><i className="fa-brands fa-js fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>  JavaScript</p>
               </div>
          </div>

          <div id="Frontend-3">
          <div className="skill-item" id="JQUERY"><i className="cib-jquery fa-5x"></i>
                  <p style={{ whiteSpace: 'pre' }}>Jquery</p>
          </div>
               <div className="skill-item" id="REACT"><i className="fa-brands fa-react fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>React</p>
               </div>
          </div>
        </div>

        <div className="skill-category">
          <h1 className="BE">Back End</h1>

          <div id="Backend-1">
              <div className="skill-item" id="PYTHON"><i className="fa-brands fa-python fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>Python</p>
              </div>
              <div className="skill-item" id="NODE"><i className="fab fa-node fa-5x"></i>
              <p style={{ whiteSpace: 'pre' }}>Node.js</p>
              </div>
          </div>
         </div>

        <div className="skill-category">
          <h1 className="Misc">Misc.</h1>

          <div id="Misc-1">
              <div className="skill-item" id="AWS"><i className="fa-brands fa-aws fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>AWS</p>
              </div>
              <div className="skill-item" id="SQL"><i className="fa-solid fa-database fa-5x"></i>
              <p style={{ whiteSpace: 'pre' }}>SQL</p>
              </div>
          </div>

          <div id="Misc-2">
               <div className="skill-item" id="GIT"><i className="fa-brands fa-git fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>Git</p>
               </div>
               <div className="skill-item" id="GITHUB"><i className="fa-brands fa-github fa-5x"></i>
               <p style={{ whiteSpace: 'pre' }}>GitHub</p>
               </div>
          </div>

          </div>
      </div>
    </div>
    
  );
};

export default Skills;