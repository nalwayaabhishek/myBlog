---
title: "Swift language review"
date: "2014-07-29T22:12:03.284Z"
readNext: "/javascript/2016/05/02/react-js-best-practices.html"
path: "/ios/2014/07/29/swift-language-review-ios.html"
desc: "Since Swift is a young language it has borrowed goodies of both scripting languages and compiled languages."
---

[Swift](https://developer.apple.com/swift/) is the new programming language by Apple launch this year for developing apps for both iOS & OS X, combining featured from C & Objective-C. But Swift is a bit different from a high-level it looks like a forest which is similar to Objective-C having traditional features like named parameter, dynamic object model and easiness to work with Objective-C cocoa frameworks. Beyond that as we begin working with Swift we learn through similar swift is as expressive & enjoyable to work with like any other modern scripting language. With features like playground developers can experiment with their code without the pain of compiling & running the apps.

> Since Swift is a young language it has borrowed goodies of both scripting languages and compiled languages

As we see in the article we will realize that although Swift has not introduced any new concept, however it is a collection of nice concept from different programing language like Ruby, Phython, Java etc.

Here we will list down the top feature which Swift has borrowed from different programing languages:

#### Inferred data types
In programming languages like Ruby, Haskell and JavaScript, no one wants to spend all of those keystrokes specifying data types for every variable. With Swift, iOS developers can now save a few keystrokes, too.

```
Example:
//so here foo is inferred as integer
let foo = 12

//Here po is inferred as integer
let po = "some string"

//Here is bar referred as double
let bar = 2 + 3.4

```

Though Swift support inferred data type but it is type safe language. So it does type checks when compile your code and raise any mismatched types as errors. So we can catch and fix errors at compile time instead of runtime. Though constants and variables are still explicitly typed.


> Though Swift support inferred data type but it is type safe language.

#### Tuple
Inspire by Lisp and Python, Swift also support tuples. Language like Lisp assumed that everything was a list aka tuple. Even Python has explicit syntax for matching up for the N value return from a method with N variable that will be bound to them.

In many scenarios you want a method to return two values, incase of Objective-C there are two way to do it one is to make an object with two properties for return values, or return a dictionary containing two values. With Swift there is another way called Tuples.

```
let paidAndBalance = (18.5, 1.5)
```
 Here we have two values paid & balance coupled into one paidAndBalance. To access individual value we can do the same by index.
```
paidAndBalance.0
paidAndBalance.1

// 18.5
// 1.5
```

We can further make code readable and convenient to use with named tuples where we can name individual parameter in a tuple.
```
let paidAndBalance = (amountPaid: 18.5, balance: 1.5)
```

And access the individual values via names instead of index.
```
paidAndBalance.amountPaid
paidAndBalance.balance

//18.5
//1.5
```
 This make life easy & code pretty.

###  Clean Syntax for Dictionary aka Hashes
 Objective C has complicated syntax for Dictionary, inspired from dynamic language like Ruby Swify has better and easy syntax.
```
 foo["po"] = "it is nice"
 foo["po"] = "this is cool"
 foo["po"] = nil
```
### Optional semicolons
 Few more goodies from Phython, JavaScript and Ruby, save few more keystrokes by avoiding semicolons. Semicolons are optional at the end of each line. If you want to pack multiple expressions in the same line, you'll need a semicolon, but if you put them on individual lines, you don't need to wear out your right pinkie tapping the semicolon key.

### Automatic reference (akin to garbage collection)
 Inspired from Java and C# which have their own garbage collection which is responsible to release memory which is no longer used, similarly Swift has its own way to do it using automatic reference counting similar to its predecessor Objective C.


### Closures aka blocks or lamda
 Inspire from Lisp, Ruby and JavaScript you can pack up little anonymous bits of code and pass them around like functions.
 Closures can capture and store references to any constants and variables from the context in which they are defined. This is known as closing over those constants and variables, hence the name “closures”. Swift handles all of the memory management of capturing for you.


## Where to go from here ?

 Before you begin programming with Swift  on Swift you need to download the beta version of Xcode 6 from the [iOS member center](https://developer.apple.com)

 Next, you can download Swift programming language iBook from iTunes store. It is the comprehensive [reference guide for learning Swift](https://itunes.apple.com/us/book/swift-programming-language/id881256329?mt=11)

 Another wonderful resource to further advance your skill in Swift Using Swift with Cocoa and Objective-C. This book covers design patterns and best practices to work along with Cocoa, it also helps you leverage the use of Objective-C & Swift in same project. Available at [iTunes store](https://itunes.apple.com/us/book/using-swift-cocoa-objective/id888894773?mt=11&ls=1)
 Besides these official guides, there are numerous tutorials available on youtube & udemy. The community is on the rise and you will find discussion, blogs & help from fellow developers
 on every topic.


 We would conclude by saying Swift is a well thought programming language by Apple, every feature added may be inspired from other popular languages but is indeed a welcoming step to expand iOS dev community. Apple has done a commendable job with Swift and ultimate goal looks to be Less BS & faster development !
