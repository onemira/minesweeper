import React, { Component } from 'react'
import axios from 'axios'
import Cell from './components/cell'
import Result from './components/result'

// import gameBoard from './components/gameBoard'

// const API_URL = 'https://minesweeper-api.herokuapp.com/games'

class App extends Component {
  state = {
    game: [[]],
    result: ''
  }

  componentDidMount() {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: 0
      })
      .then(resp => {
        console.log({ resp })

        this.setState({
          game: resp.data.board,
          gameId: resp.data.id
        })
      })
  }

  //TODO: add '🚩' parameters of which button was clicked
  checkCell = (row, col) => {
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.gameId
        }/check`,
        { row: col, col: row }
      )
      .then(resp => {
        console.log({ resp })
        this.setState({
          game: resp.data.board,
          result: resp.data.state
        })
      })
    console.log(this.state.result)
  }

  // result = () => {
  //   axios
  //     .get(`https://minesweeper-api.herokuapp.com/games/${this.state.gameId}`)
  //     .then(resp => {
  //       this.setState({ game: resp.data.board, result: resp.data.state })
  //     })
  // }

  flagCell = (event, row, col) => {
    event.preventDefault()
    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.state.gameId}/flag`,
        { row: col, col: row }
      )
      .then(resp => {
        this.setState({
          game: resp.data.board,
          gameId: resp.data.id
        })
      })
  }

  render() {
    return (
      <>
        <header>MINESWEEPER💣</header>
        <section className="gameBoard">
          <table>
            <tbody>
              {this.state.game.map((row, y) => {
                return (
                  <tr key={y}>
                    {row.map((col, x) => {
                      return (
                        <>
                          <td
                            className="cell"
                            key={x}
                            onClick={() => this.checkCell(x, y)}
                            onContextMenu={event => this.flagCell(event, x, y)}
                          >
                            <Cell character={col} />
                          </td>
                        </>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
        <Result result={this.state.result} />
      </>
    )
  }
}

export default App
