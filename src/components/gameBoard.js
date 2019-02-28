import React, { Component } from 'react'
//import Board from './components/board'

class gameBoard extends Component {
  render() {
      if (this.props.selected) {
        return <div className="cell">{this.props.revealed}</div>
      } else {
          return (
            <div className="cell"
              onClick={() => this.props.hidden(this.props.index)}>
                [x]
            </div>
          )
  }
}

export default gameBoard
