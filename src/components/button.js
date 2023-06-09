import React from 'react'

const Button = (props) => {
  return ( 
    <> 
       <button onClick={props.buttonPlus}>+</button>
       <button onClick={props.buttonMinus}>-</button>
       <button onClick={props.buttonReset}>Reset</button>
    </>
  )
}

export default Button