/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
/* Exercise_1
ReactDOM.render(
    <p><ul><li>first el</li><li>second el</li></ul></p>, 
    document.getElementById("root")
)
--------------------------------------------------------------------*/

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)
/* Exercise_2
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
    </div>,
    document.getElementById("root")
)
--------------------------------------------------------------------*/

// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
/* Exercise_3
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);
--------------------------------------------------------------------*/

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
/* Exercise_4
const navbar = (
    <nav>
        <h1>Herbert Huerto Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>    
)

ReactDOM.render(navbar, document.getElementById("root"));
--------------------------------------------------------------------*/

/* react 18 changes example 
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Herbert Huerto Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>    
)

//ReactDOM.render(navbar, document.getElementById("root")); 
ReactDOM.createRoot(document.getElementById("root")).render(navbar); 
--------------------------------------------------------------------*/

/* Exercise_5
import React from "react";
import ReactDOM from "react-dom/client";

const first_page = (
    <div>
        <h1>Hello you!</h1>
        <ul>
            <li>first el</li>
        </ul>
        <p>First paragraph</p>
    </div>  
)

//ReactDOM.render(first_page, document.getElementById("root"));
//document.getElementById("root").append(JSON.stringify(first_page));
ReactDOM.createRoot(document.getElementById("root")).render(first_page);
--------------------------------------------------------------------*/

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
/* Exercise_6
import React from "react";
import ReactDOM from "react-dom/client";
import '../src/index.css';

const front_page = (
    <div>
        <img className="left" alt="reactjs-logo" src="./reactjs-icon.png" width="40px"></img>
        <p className="right">React Course - Project 1</p>
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterpise apps, including mobile apps</li>
            </ul>
        </div>        
    </div>    
)

ReactDOM.createRoot(document.getElementById("root")).render(front_page);
--------------------------------------------------------------------*/

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
/*
import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
    return (
        <ol>
            <li>I've always wanted it</li>
            <li>I need it to build my ui dapps</li>
        </ol>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
--------------------------------------------------------------------*/

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */
/*
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
--------------------------------------------------------------------*/

/**
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)
*/

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<App />);