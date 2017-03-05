import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Header extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
       <nav>
         <div className="nav-wrapper teal lighten-2">
         <Link className="brand-logo center" to={prefixLink('/')}>
           <div style={{color: 'white'}}> Abhishek Nalwaya </div>
         </Link>
         </div>
       </nav>
      </div>
    )
  }
}

export default Header
