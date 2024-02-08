import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar"
import MainBodyFacts from './components/MainBodyFacts'
import Footer from './components/Footer'
import grumpyGus from './components/grumpygus.gif'
import doggoJoy from './components/doggojoy.gif'
import boredCat from './components/boredcatu.gif'
import doggoEx from './components/bullDog.png'
import boredBenny from './components/boredcat.gif'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <div className='main-body-index'>
      <MainBodyFacts 
        img ={grumpyGus}
        fname="Grumpy Gus"
        type="the Growling Persian Cat"
        mood="Grumpy Gus expresses his anger by adopting the classic fluff and hiss technique, turning into a furry puffball with a growl that sounds more like a disgruntled coffee grinder than a cat."

      />
      <MainBodyFacts 
        img ={doggoJoy}
        fname="Joyful Jasper"
        type="the Jack Russell Dog"
        mood="Joyful Jasper's happiness is infectious. He celebrates the good times by performing a joyful dance that involves a series of spins, barks, and tail wags, leaving a trail of joy wherever he goes."

      />
      <MainBodyFacts 
        img = {boredBenny}
        fname="Melancholy Misty"
        type="the Mournful Maine Coon"
        mood="Melancholy Misty's sad days are marked by her solemn perching on the highest available surface, casting mournful glances as if contemplating the profound mysteries of the universe."

      />
      <MainBodyFacts 
        img = {doggoEx}
        fname="Excitable Ellie"
        type="the Energetic English Bulldog"
        mood="Excitable Ellie channels her excitement into a comical display of bulldog zoomies, bulldozing through the house with her signature wiggly bum and slobbery grin, turning any room into a canine racetrack."

      />
      <MainBodyFacts 
        img = {boredCat}
        fname="Bored Benny"
        type="the Blase Bengal Cat"
        mood="Bored Benny, when faced with monotony, engages in the art of extreme lounging. He transforms into a furry blob, strategically arranging himself in the most inconvenient spots, showcasing his indifference to the world."

      />
      
    </div>
    <Footer />
  </div>
);
