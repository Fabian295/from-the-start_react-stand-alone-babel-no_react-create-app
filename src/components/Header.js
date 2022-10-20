import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      { !props.subtitle ? '' : <h3>{props.subtitle}</h3> }
    </div>
  )
}

Header.defaultProps = {
  title: "The BucketList App!"
}

export default Header;