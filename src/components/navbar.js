import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo-ly.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import CustomScrollbar from "./CustomScrollbar";
import ThemeToggleButton from "./toggle-theme/toggleTheme";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark"); // Default to dark theme

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggle = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Toggle light-theme class on the body based on currentTheme
    document.body.classList.toggle("light-theme", currentTheme === "light");
  }, [currentTheme]);

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <RxHamburgerMenu className="toggle-icon" />
              </Navbar.Toggle>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="#experience"
                  className={
                    activeLink === "experience"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("experience")}
                >
                  Experience
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <ThemeToggleButton
                  handleToggle={handleToggle}
                  currentTheme={currentTheme}
                />
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/klvnlie08/">
                    <img src={navIcon1} alt="" />
                  </a>
                  <a href="https://www.facebook.com/kelvin.lie.376/">
                    <img src={navIcon2} alt="" />
                  </a>
                  <a href="https://www.instagram.com/klvnlie_/">
                    <img src={navIcon3} alt="" />
                  </a>
                  <a href="https://github.com/Kleponaeru">
                    <img src={navIcon4} alt="" />
                  </a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="scroll-line-container">
          <CustomScrollbar></CustomScrollbar>
        </div>
      </div>
    </>
  );
};
