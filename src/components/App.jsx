import React from 'react'
import Dimensions from 'react-dimensions'
import calculateEscapeVector from '../util/calculate-escape-vector'
import isWithin from '../util/is-within'
import { addVectors, divideVector } from '../util/vector-algebra'
import Ball from './Ball.jsx'
import range from 'lodash/range'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.changeDifficulty = this.changeDifficulty.bind(this)
    this.ballWidth = 80
    this.difficulties = range(1,11)
    this.difficulty = this.difficulties[0]
    this.state = { ballPosition: this.center() }
  }
  center() {
    return [this.props.containerWidth/2, this.props.containerHeight/2]
  }
  onMouseMove(e) {
    const mouse = [e.pageX, e.pageY]
    const radius = this.ballWidth/2
    const ballCaught = isWithin(mouse, this.state.ballPosition, radius)
    this.setState({ ballCaught })
    if(!ballCaught) {
      const escapeVector = divideVector(calculateEscapeVector({
        hunter: mouse,
        prey: this.state.ballPosition,
        center: this.center()
      }), 500/this.difficulty)
      const ballPosition = addVectors(escapeVector, this.state.ballPosition)
      this.setState({ ballPosition })
    }
  }
  changeDifficulty(e) {
    this.difficulty = e.target.value
  }
  render() {
    const style = {
      height: this.props.containerHeight,
      width: this.props.containerWidth
    }
    const difficulties = this.difficulties.map(i => <option value={i} key={i}>{i}</option>)
    return (
     <div style={style} onMouseMove={this.onMouseMove}>
        <label>Difficulty:</label>
        <select id="difficulty" onChange={this.changeDifficulty}>{difficulties}</select>
        <Ball position={this.state.ballPosition}
              width={this.ballWidth}
              caught={this.state.ballCaught}
              styleName='ball'>
        </Ball>
     </div>
    )
  }
}

export default Dimensions()(App)
