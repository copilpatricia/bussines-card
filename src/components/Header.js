import React from "react";

export default function Header() {
    return(
        <header>
            <img src="./images/photo.jpg" className="header--photo" />
                <div className="header--info">
                    <p className="header--name">Patricia Maria Muresan</p>
                    <p className="header--title">Frontend Developer</p>
                    <p className="header--email">patriciamariamrsn@gmail.com</p>
                </div>
                <div className="header--buttons">
                    
                    <a href="https://github.com/copilpatricia"><button className="header--button1">GitHub</button></a>
                    <a href="https://www.linkedin.com/in/patriciamariamrsn/"><button className="header--button2">LinkedIn</button></a>
                </div>   
        </header>
    )
}