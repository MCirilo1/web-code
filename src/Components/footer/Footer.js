import React from 'react';



export default function Footer() {
    return (
        <footer className="bg-white footer">
            <div className="container">
                <div className="row">
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a href="/">Resume</a>
                            </li>
                            <li>
                                <a href="/">Hire Me</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
                        <span className="copyright">© 2020 Miguel Cirilo</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
