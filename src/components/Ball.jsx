import classNamesFn from 'classnames'
import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Ball.css'

function Ball(props) {
  let radius = props.width/2
  let classNames = classNamesFn('ball', {caught: props.caught})
  const style = {
    left: props.position[0]-radius,
    top: props.position[1]-radius,
    width: props.width
  }
  return <div style={style} styleName={classNames}>{props.caught ? "Caught" : "Catch me"}</div>
}

export default CSSModules(Ball, styles, {allowMultiple: true})
