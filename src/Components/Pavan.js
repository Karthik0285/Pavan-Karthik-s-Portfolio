import React from 'react';
import './Pavan.css';
import me from './Images/me.png';

function Pavan() {
  return (
    <div>

      <div id="Pavan">
        <img className="img-thumbnail" src={me} alt="Pavan's Image" loading="lazy" />
      </div>

      <div>
        <h1 style={{ textAlign: 'center' }}>Hey I'm <span>Pavan Karthik</span></h1>
      </div>

      <div className="container">
        <pre></pre>
        <p className="text">I am a self taught full stack python developer based in Bangalore. I hold a B.Tech degree in Electrical and Electronics Engineering. I started my professional journey as a SAP Hybris Developer at Pearson, where I have been working on issues related to E-commerce websites. Exploring these websites sparked my interest, and I decided to learn more about web development. The more I learned about web development, the more I fell in love with it!</p>
        <pre></pre>
        <p className="text">Outside of coding, I also enjoy traveling, cooking, gaming, watching  shows and movies, reading, trekking and spending time with family.</p>
      </div>
      
    </div>
  );
}

export default Pavan;
