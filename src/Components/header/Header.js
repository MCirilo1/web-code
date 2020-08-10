import React from 'react';
import classnames from 'classnames';
import { Button, Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';


function Header() {
    const [navbarColor, setNavBarColor] = React.useState('bg-primary navbar');
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle('nav-open');
    };

    React.useEffect(() => {
        const updateNavBarColor = () => {
            if (
                document.documentElement.scrollTop > 299 || 
                document.body.scrollTop > 299
            ) {
                setNavBarColor('navbar-transparent navbar');
            } else if (
                document.documentElement.scrollTop < 300 || 
                document.body.scrollTop < 300
            ) {
                setNavBarColor('bg-secondary navbar');
            }
        };

        window.addEventListener('scroll', updateNavBarColor);

        return function cleanup() {
            window.removeEventListener('scroll', updateNavBarColor);
        };
    });

    return (
        <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/index"
                        target="_blank"
                        title="Miguel Cirilo"
                        >
                            Miguel Cirilo
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames('navbar-toggler navbar-toggler', {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                        >
                            <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" />
                        </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                data-plavement="bottom"
                                href="/"
                                target="_blank"
                                title="Twitter"
                            >
                                <i className="fa fa-twitter" />
                                <p className="d-lg-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-plavement="bottom"
                                href="/"
                                target="_blank"
                                title="GitHub"
                            >
                                <i className="fa fa-github" />
                                <p className="d-lg-none">GitHub</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-plavement="bottom"
                                href="/"
                                target="_blank"
                                title="LinkedIn"
                            >
                                <i className="fa fa-linkedin" />
                                <p className="d-lg-none">LinkedIn</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Button
                                className="btn-round"
                                color="danger"
                                href="#pablo"
                                target="_blank"
                            >
                                Download Resume
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;