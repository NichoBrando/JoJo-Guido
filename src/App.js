import React from 'react';
import './App.css';

var currentPoint = 0;
var currentImage = 0;

function previous(){
  var slider = document.querySelector('.container');
  if(currentImage === 0){
    currentPoint = -900;
    slider.style.top = `${-300 * 3}px`;
    currentImage = 3;
  }
  else{
    currentImage -= 1;
    currentPoint += 300;
    slider.style.top = `${currentPoint}px`;
  }
}

function next(){
  var slider = document.querySelector('.container');
  if(currentImage === 3){
    slider.style.top = "0%";
    currentImage = 0;
    currentPoint = 0;
  }
  else{
    currentImage += 1;
    currentPoint -= 300;
    slider.style.top = `${currentPoint}px`;
  }
}


function App() {
  return (
    <React.Fragment>
      <div className="topDiv">
        <svg className = "mySvg">
          <polygon points = "0,0 0,1000, 1360,0 0,0"></polygon>
        </svg>
      </div>
      <div className = "title">
        <h1>Stardust Crusaders</h1>
      </div>
      <button onClick={previous} className="previousButton"></button>
      <div className = "partImages">
        <div className = "container">
          <div className="backgroundWallpaper" id="i0"></div>
          <div className="backgroundWallpaper" id="i1"></div>
          <div className="backgroundWallpaper" id="i2"></div>
          <div className="backgroundWallpaper" id="i3"></div>
        </div>
      </div>
      <button onClick={next} className="nextButton"></button>
      <div className="image">
      </div>
    </React.Fragment>
  );
}

export default App;
