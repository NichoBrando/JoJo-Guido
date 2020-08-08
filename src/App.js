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


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {'part': 'Phantom Blood'}
    this.changePart = this.changePart.bind(this);
  }
  changePart(number){
    switch(number){
      case 1:
        this.setState({'part': 'Phantom Blood'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "phantomblood";
        }
        document.querySelector('.image').id = "dio";
        document.querySelector('.mySvg').style.fill = "blue";
        break;
      case 2:
        this.setState({'part': 'Battle Tendency'})
        for(var i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "battletendency";
        }
        document.querySelector('.image').id = "kars";
        document.querySelector('.mySvg').style.fill = "purple";
        break;
      case 3:
        this.setState({'part': 'Stardust Crusaders'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "stardustcrusaders";
        }
        document.querySelector('.image').id = "dio";
        document.querySelector('.mySvg').style.fill = "goldenrod";
        break;
      case 4:
        this.setState({'part': 'Diamond is Unbreakable'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "diu";
        }
        document.querySelector('.image').id = "kira";
        document.querySelector('.mySvg').style.fill = "hotpink";
        break;
      case 5:
        this.setState({'part': 'Vento Aureo'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "ventoaureo";
        }
        document.querySelector('.image').id = "diavolo";
        document.querySelector('.mySvg').style.fill = "crimson";
        break;
      case 6:
        this.setState({'part': 'Stone Ocean'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "stoneocean";
        }
        document.querySelector('.image').id = "pucci";
        document.querySelector('.mySvg').style.fill = "purple";
        break;
      case 7:
        this.setState({'part': 'Steel Ball Run'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "sbr";
        }
        document.querySelector('.image').id = "valentine";
        document.querySelector('.mySvg').style.fill = "lightskyblue";
        break;
      case 8:
        this.setState({'part': 'JoJolion'})
        for(let i = 0; i < 4; i++){
          document.querySelector(`#i${i}`).className = "jojolion";
        }
        document.querySelector('.image').id = "jo2uke";
        document.querySelector('.mySvg').style.fill = "pink";
        break;
      default:
        break;
    }
  }
  render(){
    return (
      <React.Fragment>
        <div className="topDiv">
          <svg className = "mySvg">
            <polygon points = "0,0 0,1000, 1360,0 0,0"></polygon>
          </svg>
        </div>
        <div className = "title">
          <h1>{this.state.part}</h1>
        </div>
        <button onClick={previous} className="previousButton"></button>
        <div className = "partImages">
          <div className = "container">
            <div className="phantomblood" id="i0"></div>
            <div className="phantomblood" id="i1"></div>
            <div className="phantomblood" id="i2"></div>
            <div className="phantomblood" id="i3"></div>
          </div>
        </div>
        <button onClick={next} className="nextButton"></button>
        <div className="image" id="#dio">
        </div>
        <div className = "partSymbol">
          <div id="p1" onClick = {() => this.changePart(1)}></div>
          <div id="p2" onClick = {() => this.changePart(2)}></div>
          <div id="p3" onClick = {() => this.changePart(3)}></div>
          <div id="p4" onClick = {() => this.changePart(4)}></div>
          <div id="p5" onClick = {() => this.changePart(5)}></div>
          <div id="p6" onClick = {() => this.changePart(6)}></div>
          <div id="p7" onClick = {() => this.changePart(7)}></div>
          <div id="p8" onClick = {() => this.changePart(8)}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
