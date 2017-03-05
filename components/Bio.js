import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './abhishek_nalwaya.jpg'

class Bio extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card card-panel teal lighten-4">
            <div className="card-content white-text">
              <span className="card-title">Abhishek Nalwaya</span>
                <img
            src={prefixLink(profilePic)}
            style={{
              float: 'left',
              marginRight: '10px',
              marginBottom: 0,
              width: '100px',
              borderRadius: '50%'
            }}
          /><p>Author </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
