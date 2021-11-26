import React from "react";

const numX = 8;
const numY = 8;

// send numX to a CSS variable so it knows how many columns in grid
document.documentElement.style.setProperty("--numX", numX);

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateList: Array(numX * numY).fill(0)
    };
  }
  
  toggleBlok(index) {
    const stateList = this.state.stateList;
    stateList[index] = stateList[index] === 1 ? 0 : 1;
    this.setState({ stateList: stateList });
  }

  handleClick(index) {
    const row = Math.floor(index/numX);
    const column = index % numX;
    for (let i = 0; i < numX; i++) {
      this.toggleBlok(i + row * numX);
    }
    for (let i = 0; i < numY; i++) {
      this.toggleBlok(i * numX + column);
    }  
    this.toggleBlok(index);
  }

  render() {
    const blokList = this.state.stateList.map((val, index) => {
      const blokClass = val === 1 ? "toggle-on" : "toggle-off";
      return (
        <Blok blokClass={blokClass} onClick={() => this.handleClick(index)} />
      );
    });
    
    const scoreNum = this.state.stateList.reduce((total, n) => {
      return total + n;
    });
    

    return (
      <div>
        <div className="score" style={{color:"white"}}>Score: {scoreNum}/{numX * numY}</div>
        <div className="containerGame">{blokList}</div>
      </div>
    );
  }
}

const Blok = props => {
  return <div className={props.blokClass} onClick={() => props.onClick()} />;
};

export default Game;
