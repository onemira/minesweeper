import React, { Component } from 'react'

class result extends Component {
  render() {
    // if (this.props.result === 'lost') {
    //   return alert('you lost')
    // } else if (this.props.result === 'won') {
    //   return alert('you won')
    // }
    return (
      <>
        {this.props.result === 'new' || this.props.result === 'playing' ? (
          <></>
        ) : this.props.result === 'lost' ? (
          <p>lost</p>
        ) : this.props.result === 'won' ? (
          <p>won</p>
        ) : (
          <></>
        )}
      </>
    )
  }
}

export default result
