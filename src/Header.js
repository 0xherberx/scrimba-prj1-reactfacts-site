import React from "react"

export default function Header() {
    return (
        <div>
            <nav className="nav">
                <img src="./reactjs-icon.png" alt="logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>            
        </div>
    )
}