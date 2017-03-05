import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './abhishek_nalwaya.jpg'
import ReactNative from './ReactNative.png'
class AboutMe extends React.Component {
  render () {
    return (
      <div className="content row">
         <h1> About Me </h1>
         <span className="border"></span>
         <div className="col s2">
           <img
             src={prefixLink(profilePic)}
             style={{
               width: '150px',
               borderRadius: '50%'
             }}
           />
           <img
             src={prefixLink(ReactNative)}
             style={{
               width: '150px',
             }}
           />
         </div>
         <div className="col s10">
          <p>
            Abhishek is author of the book, React Native of iOS Development,
            RubyMotion iOS Development Essentials and Rhomobile Beginners Guide
            published by Packt publications. He is Technology enthusiast and can talk in Ruby,
            JavaScript, Objective C and Java. He occasionally speak at conferences such as
            RubyMotion Inspect Brussels, RubyConfIndia2012, RubyConfIndia2013, BeingAgile
            and many more.
          </p>
          <p>
            Abhishek latest book React Native iOS development is hands-on guide to developing native iOS apps using Javascript.
          </p>
          <p>
            RubyMotion iOS Development Essentials is a hands-on book for developing iOS apps using RubyMotion. With RubyMotion, you can eliminate the complexity and confusion associated with the development of iOS applications using Objective-C
          </p>
        </div>

      </div>
    )
  }
}

export default AboutMe
