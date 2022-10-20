import React from 'react'
import ReactDOM from 'react-dom/client'

const Option = (props) => {

  return (
    <div>
      <p>
        { props.optionText } 
      <button onClick={(e) => { 
        props.handleDeleteOption( props.optionText )
        }} > 
        X
      </button>
      </p>

    </div>
  )
}

Option.defaultProps = {

}

export default Option;