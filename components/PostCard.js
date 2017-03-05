import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import get from 'lodash/get'

class PostCard extends React.Component {
  render () {
    const {page} =  this.props;
    return (
        <div className="col s6 m3">
            <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                {get(page, 'data.title', page.path)}
            </Link>
        </div>
    )
  }
}

export default PostCard
