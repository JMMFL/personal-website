import React from "react";
import { FaGithub, FaFilePdf, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Menu, NavMenu, IconMenu, Emblem, EmblemText, EmblemIcon } from "./styled/Library";

function Navigation() {
    return (
        <Menu>
            <NavMenu>
                <li><a href="#works">Works</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="mailto:mehravarj+github@gmail.com">Contact</a></li>
            </NavMenu>
            <Emblem>
                <EmblemIcon>(^ᴗ^)</EmblemIcon>
                <EmblemText>Jordan<br></br>Mehravar</EmblemText>
            </Emblem>
            <div style={{width: "296px", display: "flex", justifyContent: "end"}}>
                <IconMenu>
                    <li><FaFilePdf size={26} /></li>
                    <li><a href="https://github.com/JMMFL" target="_blank" rel="noreferrer"><FaGithub size={26} /></a></li>
                    <li><FaLinkedin size={26} /></li>
                    <li><a href="mailto:mehravarj+github@gmail.com"><MdAlternateEmail size={26} /></a></li>
                </IconMenu>
            </div>
        </Menu>
    );
}

export default Navigation;