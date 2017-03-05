import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Header from '../components/Header'

import '../css/materialize/css/materialize.min.css'

class Template extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className="container content">
          {children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
