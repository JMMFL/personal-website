import React from "react";
import avatarJpg from "../images/avatar.jpg";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { ButtonMenu, Menu, NavMenu, IconMenu, Emblem, EmblemText, Avatar, SecondaryButton } from "./styled/Library";

function Navigation() {
    return (
        <Menu>
            <NavMenu>
                <li><a href="#works">Works</a></li>
                <li><a href="#about">About</a></li>
                <li>Resume</li>
            </NavMenu>
            <Emblem>
                <Avatar src={avatarJpg} alt="Headshot of Jordan Mehravar." />
                <EmblemText>Jordan<br></br>Mehravar</EmblemText>
            </Emblem>
            <ButtonMenu>
                <IconMenu>
                    <li><a href="https://github.com/JMMFL" target="_blank" rel="noreferrer"><FaGithub size={26} /></a></li>
                    <li><a href="https://dribbble.com/mehravarjojo" target="_blank" rel="noreferrer"><FaDribbble size={26} /></a></li>
                </IconMenu>
                <li><SecondaryButton href="mailto:mehravarj+github@gmail.com">Contact</SecondaryButton></li>
            </ButtonMenu>
        </Menu>
    );
}

export default Navigation;