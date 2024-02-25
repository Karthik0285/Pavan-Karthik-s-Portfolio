import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import quiz1 from './Images/quiz1.PNG';
import quiz2 from './Images/quiz2.PNG';
import quiz3 from './Images/quiz3.PNG';
import quiz4 from './Images/quiz4.PNG';
import Australia from './Images/Australia.png';
import England from './Images/England.png';
import India from './Images/India.png';
import Bangladesh from './Images/Bangladesh.png';
import PhirKabhi from './Images/PhirKabhi.png';
import SpiritOfJersey from './Images/SpiritOfJersey.png';
import Hukum from './Images/Hukum.png';
import ChaliGaliChudu from './Images/ChaliGaliChudu.png';

function Projects(){
    return(
<div>
        <div id="Projects-Heading">
        <h1 style={{ color: 'rgb(30, 128, 0)' }} align="center">Projects</h1>
</div>

      <pre></pre>

<div id="Project-1">
        <h2 id="virat-Kohli-Quiz">Virat Kohli Quiz</h2>
        <pre></pre>
  <div id="Virat-Paragragh">
      <p>I developed a Virat Kohli Quiz website using HTML, CSS and JavaScript. The Users have to choose an option; Each correct answer will be highlighted in vibrant green, while incorrect choices will be marked in bold red, providing immediate feedback.</p>
      <pre></pre>
      <p>This project shows my passion for cricket with my web development skills, allowing the users to engage in an entertaining way.</p>
      <pre></pre>
    <div id="key-features-1">
            <p>Key features of the website:</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-tv-alt"></i> Responsive Design</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-info-circle"></i> Interactive Quiz Interface</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-sync-alt"></i> Real-time Updates</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-smile"></i> User Interaction</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fa-regular fa-comment"></i> Immediate Feedback</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-cogs"></i> Customizable Quiz Settings</p>
            <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-graduation-cap"></i> Educational Insights and Facts</p>
    </div>
  </div>
        <img className="Project-1" src={quiz1}  loading="lazy" id="quiz-1"/>
        <img className="Project-1" src={quiz2}  loading="lazy" id="quiz-2"/>
        <img className="Project-1" src={quiz3}  loading="lazy" id="quiz-3"/>
        <img className="Project-1" src={quiz4}  loading="lazy" id="quiz-4"/>
        <pre></pre>
      </div>
      <div>
          <a href="https://virat-kohli-quiz.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button id="Button-1"><i style={{ color: 'white' }} className="fa-sharp fa-solid fa-desktop"></i> Demo</button>
          </a>
          <a href="https://github.com/Karthik0285/Virat-Kohli-Quiz" target="_blank" rel="noopener noreferrer">
            <button id="Button-2"><i style={{ color: 'white' }} className="fa-solid fa-code"></i> Viewcode</button>
          </a>
</div>

      <pre></pre>
<div id="Project-2">
            <h2 id="ICC-ODI-World-Cup">ICC ODI World Cup</h2>
             <pre></pre>
  <div id="Icc-Paragragh">
            <p>I've created a dynamic cricket team showcase website using HTML, CSS, and JavaScript. The Users can explore teams like India, England, Australia, and Bangladesh with the real-time updates displaying logos, colors, and also the cricketing histories.</p>
            <pre></pre>
            <p>This project highlights my web development skills and provides a platform for users to learn about their favorite teams.</p>
            <pre></pre>
    <div id="key-features-2">
            <p>Key features of the website:</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-users"></i> Team Selection</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-sync-alt"></i> Real-time Updates</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-info-circle"></i> Informative Content</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-calendar-alt"></i> Schedule and Fixtures</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-tv"></i> Live Streaming and Score</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-poll"></i> Player Statistics and Records</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-comments"></i> Fan Comments and Interaction</p>
    </div>
  </div>
        <img className="Project-2" src={India}  loading="lazy" id="India"/>
        <img className="Project-2" src={England}  loading="lazy" id="England"/>
        <img className="Project-2" src={Australia}  loading="lazy" id="Australia"/>
        <img className="Project-2" src={Bangladesh}  loading="lazy" id="Bangladesh"/>
        </div>
      <div>
    <a href="https://icc-mens-odi-world-cup-2023.netlify.app/" target="_blank" rel="noopener noreferrer">
      <button id="Button-3"><i style={{ color: 'white' }} className="fa-sharp fa-solid fa-desktop"></i> Demo</button>
    </a>
    <a href="https://github.com/Karthik0285/ICC-ODI-World-Cup-2023" target="_blank" rel="noopener noreferrer">
      <button id="Button-4"><i style={{ color: 'white' }} className="fa-solid fa-code"></i> Viewcode</button>
    </a>
  </div>
<pre></pre>

<div id="Project-3">
  <h2 id="Karthik-Playlist">Karthik's Playlist</h2>
  <pre></pre>
  <div id="Music-Paragragh">
    <p>I have built a music player app using HTML, CSS and JavaScript. This app allows users to play their chosen songs. They can click "next" button to skip the current song or "previous" button to go back in the playlist.</p>
    <pre></pre>
    <p>Users have the option to click on the 'shuffle' button to randomize the music playlist. This creates a dynamic listening experience for the user. This app provides song replay and also volume adjustment.</p>
    <pre></pre>
    <div id="key-features-3">
      <p>Key features of the website:</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-tv-alt"></i> Responsive Design</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-smile"></i> User Friendly Interface</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-sync-alt"></i> Real-time Updates</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fa-regular fa-eye"></i> Dynamic Backgrounds</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fa-solid fa-music"></i> Playlist Management</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-pen"></i> Customizable Player Themes</p>
      <p style={{ whiteSpace: 'pre' }}><i style={{ color: 'white' }} className="fas fa-headphones"></i> Equalizer and Sound Effects</p>
    </div>
  </div>
        <img className="Project-3" src={PhirKabhi}  loading="lazy" id="PhirKabhi"/>
        <img className="Project-3" src={SpiritOfJersey}  loading="lazy" id="SpiritOfJersey"/>
        <img className="Project-3" src={Hukum}  loading="lazy" id="Hukum"/>
        <img className="Project-3" src={ChaliGaliChudu}  loading="lazy" id="ChaliGaliChudu"/>
        </div>
      <div>
    <a href="https://karthik-music-player.netlify.app/" target="_blank" rel="noopener noreferrer">
      <button id="Button-5"><i style={{ color: 'white' }} className="fa-sharp fa-solid fa-desktop"></i> Demo</button>
    </a>
    <a href="https://github.com/Karthik0285/Karthik-s-Music-Playlist" target="_blank" rel="noopener noreferrer">
      <button id="Button-6"><i style={{ color: 'white' }} className="fa-solid fa-code"></i> Viewcode</button>
    </a>
  </div>
</div>
  );
}
export default Projects