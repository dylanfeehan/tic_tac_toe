import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// this is a function component now :)
function Square(props) {
  // what's special about the square class?
  // it just has a value property!
  // it knows when it's clicked.. it basically is a button...
  // and it calls its parent.. by calling props.onclick, 
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button> // for some reason, this doesn't need to pass a funciton anymore idk
  );
}


// the square components now receive values from the board component and inform the board component of when to update them
// the square components are "controlled components"
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }  
  handleClick(i) {
    // make a copy of the squares array
    const squares = this.state.squares.slice();   
    // in our new copy, set the i to x
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // set our squares state to our copy
    this.setState({squares: squares, xIsNext: !this.state.xIsNext});
  }

  renderSquare(i) {
    // passes a prop called value
    // when we render a square, we pass it the ith value of the board state as a prop, and we also pass the onclick function.. 
    return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)}/>
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
