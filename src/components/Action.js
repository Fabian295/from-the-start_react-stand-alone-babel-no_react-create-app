import React from 'react'
import ReactDOM from 'react-dom/client'

const Action = (props) => {

  return (
    <div>
        <button 
          onClick={props.handleRandomSelect}
          disabled={ !props.hasOptions }
          >
              What Should I Do?
        </button>
    </div>
  )
}

export default Action;