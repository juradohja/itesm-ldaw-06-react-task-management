import React from "react";

const Header = () => {
    
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <a className="navbar-brand" href="/">TODO List</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </header>
    )
    
}

export default Header;