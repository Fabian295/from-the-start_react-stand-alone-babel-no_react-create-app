import React from 'react'
import ReactDOM from 'react-dom/client'
import Option from './Option'

const Options = (props) => {

  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {/* <button onClick={props.handleDeleteOption} >Delete an Option</button> */}

      <h3>{ props.title }</h3>
      <ol>
        { props.options.map((option, index) => {
          return <li key={index}>
            <Option 
            key={index}
            optionText={option}  
            handleDeleteOption={ props.handleDeleteOption}
            />
          </li>
        }) }
      </ol>
    </div>
  )
}

Options.defaultProps = {
  title: "Personal List"
}

export default Options;