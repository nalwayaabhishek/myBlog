---
title: React Redux Best Practices
date: "2016-05-02T22:40:32.169Z"
path: "/javascript/2016/05/02/react-js-best-practices.html"
desc: "Best Practices for React and Redux"
tags: 'javascript'
---

Writing a Front end app is difficult, let me reiterate writing good quality front end app is difficult. It is easy to mess up with your frontend application as it grows. There are so many ways to do a single thing in JavaScript, deciding which one is best is difficult. And over that Javascript world is moving in such a fast phase, the amount of frameworks and libraries that appear and disappear every week is very large.

`React` and `Redux` is a good attempt to follow some good design principle.

I am working on ReactJS from around a year now, done lot of mistakes and lot refactoring in my apps. I prefer to use [Redux](https://github.com/reactjs/redux), [Webpack](https://webpack.github.io/), [Babel](https://babeljs.io/) and [ES2015](https://babeljs.io/docs/learn-es2015/) with React. Based on my experience, I have concluded few best practices which helped me to maintain large React based codebase. Here I am listing few of them.

## Avoid Nested state

It's better to have state value as flat instead of tree structure. Having your state nested it’d be hard to check whether your state changed or not. You’d be forced to make a deep equality check, because when objects are compared using reference equality you can’t be sure whether the next state is changed.

Keeping your state minimal is the best React practice. For huge and nested state React need to make lot of value equality check to update the state. To optimize React performance you need to make state simple.


Just to give you a example if you have following nested state:

```
[{
  id: 1,
  title: "React Best Practice",
  comments: [{
    id: 1,
    message: "Nice Blog"
  },
{
    id: 2,
    message: "Keep posting"
  },
]
}, {
  id: 2,
  title: "Awesomeness of ES6",
  comments: [{
    id: 3,
    name: "ES6 rocks"
  }]
}]
```


Refactor this to:

```
{
	posts: {
		1: {
		  title: "React Best Practice",
		  comment: [1, 2]
		},
		2: {
		  title: "Awesomeness of ES6",
		  comment: [3]
		}
	},
	comments: {
	    1: { message: "Nice Blog" },
	    2: { message: "Keep posting" },
	    3: { name: "ES6 rocks" }
	}
}
```

In case you are serving these values from backend API, then best place to normalize the data is at the backend. You can read about [backend for frontend pattern](https://www.thoughtworks.com/insights/blog/bff-soundcloud)

If you want to normize the JSON in frontend you can also use npm module [normalizr](https://github.com/gaearon/normalizr).


## Immutability

`Immutability` is a concept, very popular in functional programming world. Making state of your component immutable will make your code simple to understand, as the state changes are more explicit and easy to test.

Based on your state, React renders the user interface for you and if state is mutated React re-render the component. If you directly mutate state it will be very difficult to debug and test the state change. So whenever your state would be mutated, don’t do it. Instead, create a changed copy of it.

In JavaScript, strings and numbers are immutable by design, But List, Maps etc are  mutable. By design handling immutability in Javascript is little bit more difficult than Clojure, Haskell etc directly. So using libraries like [immutable.js](https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state) will make life simple for you.
Since immutable is a concept and need to follow by team. There will be possibility that by mistake someone mutate your state. Creating object through imutable.js, a collection cannot be altered at another point in time. Let me give you a small glimpse of immutable.

```
// This is how you create maps in ES6
let map1 = new Map({a:1, b:2, c:3});
let map2 = map.set('b', 50);
map1.get('b'); // 50
map2.get('b'); // 50

// This is how you create maps though immutable.js
let map1 = Immutable.Map({a:1, b:2, c:3});
let map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50

```

We can see that while update value of key `b`, the `map1` is not mutated if you use immutable.js.

React also provide few [Immutability Helpers](https://facebook.github.io/react/docs/update.html)

## Centralize state

Storing all your state at one place help in maintain the app's state easily because there is a single source of truth. That means that your app is always reflecting the current state. It makes debugging easy and helps in faster development.

Storing the app at center place was inspired by a language called Elm, which also promotes the use of a single model. Redux provide you to manage single store out of box.


## Move logic to Actions Creator or may be to saga instead of Reducer

In Redux, Reducer should only update the state, there should be no logic in reducers.
Have thinner Reducer as compared to Action Creators.
You can use [redux-sagas](https://github.com/yelouafi/redux-saga) or [redux-thunk](https://github.com/gaearon/redux-thunk) in Action creators. Both are popular approach. Saga approch is new and has become very popular. redux-saga orchestre complex/asynchronous operations. You can move logics from action creator to saga. Check out this nice video to understand saga.

<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xDuwrtwYHu8" frameborder="0" allowfullscreen></iframe>
</div>


## Stateless Component

It is good to have more stateless components in your app, it increases reusability of the component since your component is dumb. It is also easy to test and debug a stateless component.

> Check out this -> [Egghead tutorial on stateless component](https://egghead.io/lessons/react-building-stateless-function-components-new-in-react-0-14)


## Be safe with PROP TYPES and getDefaultProps

`prop` lets components communicate with other component. A parent component pass it’s children named prop values, which the child can then use in its internal logic. `propTypes` keep your component safe from unexpected data.

Also for any propType that isn't required, always set it in [getDefaultProps](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values). It help to define default values for your props in a very declarative way.

## Imports
You can import specific function from the file instead of full libraries. This will reduce the size of your application.
```
import Foo from ‘foo/Foo’
```
instead of:
```
import {Foo} from ‘foo’
```
More Examples:
```
import concat from 'lodash/concat';  
import sortBy from 'lodash/sortBy';
```

## Always bind the functions in the constructor method
If you use an ES6+ class, React no longer autobind your methods. One of the solutions is to call bind in render as shown here:

```
<div onClick={this._handleClick.bind(this)}> Hello!</div>
```

But this approach has performance implications since the function is reallocated on every render. You can refector this to:

```
class Foo extends React.Component {
  constructor() {
    super();
    this._onClick = this._handleClick.bind(this);
  }
  render() {
    return (
      <div onClick={this._handleClick}>
        Hello!
      </div>
    );
  }
  _handleClick() {
    console.log('Inside _handleClick ')
  }
}
```

> Avoid using bind or arrow functions in render. A bind call or arrow function in a render will create a brand new function on every single render. React will load the complete view and this will have bad performance.

You can add this to your lint [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/) to caught this anti pattern.

## Avoid using variable directly in component
With the same reason as bind also avoid using variable(array, hash etc) directly as shown:

```
class Foo extends React.Component  {
  render() {
    return (
      <div>
        <SomeComponent someProp={ this.props.names || []} />
       </div>
     );
  }
}
```
There is a small issue in line `this.props.names || []`. React treat `[]` this as new variable and will re render `SomeComponent` on any change. This will completely destroyed every pure render optimization inside the `SomeComponent` component.

> `[]` will treat as new variable and shallow equality check always produces false and tells React to re-render the components.


So you can refector this is:

```
const default = [];

class Foo extends React.Component  {
  render() {
    return (
      <div>
        <SomeComponent someProp={ this.props.names || default} />
       </div>
     );
  }
}
```

> You can also use getDefaultProps instead of defining a variable.


## Adding Getters
Its very neat to prefix [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) before functions  and this would eliminate the extra function execution with every call to get.

```
// bad
 mobileNumber () {
   return `(${this.props.isdCode})${this.props.mobileNumber}`;
 }

 // good
 get mobileNumber () {
   return `(${this.props.isdCode})${this.props.mobileNumber}`;
 }
```

## Use classnames
[classNames](https://github.com/JedWatson/classnames) is good library for defining css classes. You can express the conditional classes more simply as an object:

```
var classNames = require('classnames');

var Button = React.createClass({
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
});
```

> I would love to hear your experiences and patterns which you have used in your app with reactJS.
