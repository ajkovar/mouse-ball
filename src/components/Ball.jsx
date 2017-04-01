import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Ball.css'

function Ball(props) {
  const radius = props.size/2
  const classNames = props.caught ? 'caught' : 'free'
  const style = {
    left: props.position[0]-radius,
    top: props.position[1]-radius,
    width: props.size,
    height: props.size,
    borderRadius: radius,
    lineHeight: `${props.size}px`
  }
  return <div style={style} styleName={classNames}>{props.caught ? "Caught" : "Catch me"}</div>
}

export default CSSModules(Ball, styles, {allowMultiple: true})
