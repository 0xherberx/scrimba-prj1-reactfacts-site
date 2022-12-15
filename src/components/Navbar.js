import logo from "../reactjs-icon.png"

export default function Navbar(props) {
    console.log("Navbar component render")
    console.log(props.darkMode)
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img
                className="nav--logo_icon"
                src={logo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}