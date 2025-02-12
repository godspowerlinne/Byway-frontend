import React from 'react'

const Button = ({btnText, btnStyle, onClick, style}) => {
  return (
    <button className = {`${btnStyle}`} onClick = {onClick} style={style}>{btnText}</button>
  )
}

export default Button