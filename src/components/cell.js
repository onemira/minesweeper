import React, { Component } from 'react'

class cell extends Component {
  render() {
    if (this.props.character === '*') {
      return <>💣</>
    } else if (this.props.character === 'F') {
      return <>🚩</>
    } else {
      return (
        <>
          <div className="cell">{this.props.character}</div>
        </>
      )
    }
  }
}

export default cell
