import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import Bio from 'components/Bio'
import ReactDisqus from 'react-disqus';

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {


  componentWillMount() {
    const script = document.createElement("script");
    script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58bc00ad800c8b94";
    script.async = true;
    document.body.appendChild(script);
  }
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1>{post.title}</h1>
        <p className="desc"> {post.desc} </p>
      <span className="border"></span>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block',
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
        />
        <ReadNext post={post} pages={route.pages} />
        <ReactDisqus shortname='nalwaya' />

      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
