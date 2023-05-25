import { React, useState, useEffect, useRef } from "react";
import './Navbar.css';

const Navbar = ({ homRef, projRef, abouRef, skiRef, contRef }) => {

    const home = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const [name, setName] = useState(' ');

    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;

            if (visibleSection) {
                console.log(visibleSection.className);
                if (visibleSection.className === 'header-container') { onUpdateActiveSection("home") }
                else if (visibleSection.className === 'About-content') { onUpdateActiveSection("about") }
                else if (visibleSection.className === 'skill-container') { onUpdateActiveSection("skills") }
                else if (visibleSection.className === 'projects-section') { onUpdateActiveSection("projects") }
                else if (visibleSection.className === 'contact-container') { onUpdateActiveSection("contact") }
            }
        });

        const sections = [homRef.current, abouRef.current, skiRef.current, projRef.current, contRef.current];

        sections.forEach((section) => {
            observer.current.observe(section);
        });
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) { setScrolled(true); setName('Alan Brandan'); }
            else { setScrolled(false); setName(' '); }

        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveSection = (value) => {
        setActiveSection(value);
    }



    return (
        <div className="navbar_container" >
            <div className={scrolled ? "navbar_scrolled" : "navbar"} >
                <h3>{name}</h3>
                <input type="checkbox" className="navmenu-togle" id="navmenu-togle" />
                <label htmlFor="navmenu-togle" className="navmenu-togle-label">
                    <div className="navmenutogle-clickarea">
                        <span></span>
                    </div>
                </label>
                <div className="navbar_items">
                    <div className="navbar_sections_container">
                        <a className={activeSection === "home" ? "active navbar_section" : "navbar_section"}
                            onClick={() => { onUpdateActiveSection("home"); scrollToSection(homRef); }}><h2>Home</h2> </a>
                        <a className={activeSection === "about" ? "active navbar_section" : "navbar_section"}
                            onClick={() => { onUpdateActiveSection("about"); scrollToSection(abouRef); }}><h2>About</h2></a>
                        <a className={activeSection === "skills" ? "active navbar_section" : "navbar_section"}
                            onClick={() => { onUpdateActiveSection("skills"); scrollToSection(skiRef); }}><h2>Skills</h2></a>
                        <a className={activeSection === "projects" ? "active navbar_section" : "navbar_section"}
                            onClick={() => { onUpdateActiveSection("projects"); scrollToSection(projRef); }}><h2>Projects</h2></a>
                        <a className={activeSection === "contact" ? "active navbar_section" : "navbar_section"}
                            onClick={() => { onUpdateActiveSection("contact"); scrollToSection(contRef); }}><h2>Contact</h2></a>
                    </div>
                    <div className="lang_toggle">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar