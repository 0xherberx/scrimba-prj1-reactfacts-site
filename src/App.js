import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)
    console.log("App component render")
    console.log(darkMode)

    function handleClick() {
        console.log("Clicked")
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={handleClick}
            />
            <Main
                darkMode={darkMode}
            />
        </div>
    )
}
