import styled from "styled-components";
import carousel from "../../images/carousel.png";

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: var(--body-text);
    height: 102px;
    margin: 0 auto;
    margin-bottom: 134px;

    @media screen and (min-width: 1200px) {
        width: 1100px;
    }

    @media screen and (min-width: 1400px) {
        width: 1200px;
    }

    @media screen and (min-width: 1900px) {
        width: 100%;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    width: 296px;
    align-self: center;

    li:hover {
        text-decoration: underline;
        text-underline-offset: 10px;
    }
`

export const ButtonMenu = styled(NavMenu)`
    li:hover {
        text-decoration: none;
        text-underline-offset: none;
    }
`

export const Emblem = styled.div`
    position: relative;
    top: -15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: baseline;
`

export const Avatar = styled.img`
    margin: 0 auto;
    margin-bottom: 11px;
    width: 75px;
    border-radius: 50px;
`

export const EmblemText = styled.h1`
    font-family: var(--body-font);
    font-size: var(--body-text);
    font-weight: normal;
    text-align: center;
`

export const IconMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    position: relative;
    left: 60px;
    align-self: center;
    width: 80px;

    li svg:hover {
        color: var(--button-border);
    }
`

export const HeaderText = styled.h1`
    font-size: var(--header-text);
    font-family: var(--head-font);
    text-align: center;
    font-weight: normal;
    margin-bottom: 85px;

    ::after {
        content: "🍁";
        font-size: 28px;
        position: relative;
        background: var(--background-color);
        top: -141px;
        left: 220.5px;
    }
`

export const Carousel = styled.section`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 823px;
    
    border-radius: 35px;
    background-color: var(--carousel-color);
    padding: 40px;
    margin-bottom: 174px;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }

    @media screen and (min-width: 1400px) {
        width: 1300px;
    }

    @media screen and (min-width: 1900px) {
        width: 1589px;
    }
`

export const ProjectInfo = styled.div`
    align-self: center;
    width: 337px;
    height: 725px;
    border-bottom: 1px solid var(--border-color);
`

export const ProjectNav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 208px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 31px;
`

export const List = styled.ul`
    text-transform: uppercase;
    font-size: 26px;
    font-weight: bold;
`   

export const Input = styled.input`
    display: none;
    
    :checked + label {
        opacity: 1;
    }
`

export const Label = styled.label`
    opacity: 0.3;

    :hover {
        opacity: 0.6;
        cursor: pointer;
    }
`

export const ProjectDescription = styled.div`
    margin-bottom: 173px;
`

export const DescriptionTitle = styled.h1`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 23px;
`

export const Description = styled.p`
    font-size: var(--description-text);
    line-height: var(--description-height);
    font-weight: lighter;
    height: 90px;
    margin-bottom: 10px;
`

export const ProjectTopics = styled.p`
    font-size: 13px;
    margin-bottom: 0px;
`

export const ProjectPreview = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    height: 737px;
    background: var(--background-color);
    background-image: url(${carousel});
    background-position-x: center;
    background-position-y: 0;
    border-radius: 16px;

    :hover > a {
        display: flex;
    }

    @media screen and (min-width: 1200px) {
        width: 65%;
    }

    @media screen and (min-width: 1400px) {
        width: 69%;
    }

    @media screen and (min-width: 1900px) {
        width: 1102px;
    }
`

export const ProjectHover = styled.a`
    display: none;
    background: rgba(0, 0, 0, 0.8); 
    border-radius: 16px;
    width: 100%;
    justify-content: center;

    > p {
        align-self: center;
        font-size: 100px;
        text-transform: uppercase;
        font-weight: bold;
    }
`

export const Button = styled.a`
    display: block;
    width: 125px;
    height: 45px;
    border-radius: 30px;
    padding-top: 12px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    user-select: none;

    :hover {
        background: var(--button-hover);
        color: white;
        border: none;
    }
`

export const PrimaryButton = styled(Button)`
    background: var(--button-background);
    color: var(--background-color);
`

export const SecondaryButton = styled(Button)`
    background: transparent;
    border: var(--button-stroke) solid var(--button-border);

    :hover {
        height: 43px;
    }
`

export const DemoButton = styled(PrimaryButton)`
    margin-bottom: 15px;
`

export const NavArrows = styled.div`
`

export const Arrow = styled.button`
    background: transparent;
    border: none;
    display: inline;

    :hover {
        cursor: pointer;
    }
`

export const AboutSection = styled.section`
    display: flex;
    height: 1690px;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 98px;

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }

    @media screen and (min-width: 1400px) {
        width: 1300px;
    }

    @media screen and (min-width: 1900px) {
        width: 1460px;
    }
`

export const LargeText = styled.h1`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: lowercase;
    font-family: var(--head-font);
    font-weight: "black";
    height: 2000px;

    @media screen and (min-width: 1200px) {
        font-size: 300px;
        line-height: 255px;
        margin-right: 20px;
    }

    @media screen and (min-width: 1400px) {
        font-size: 320px;
        line-height: 275px;
    }

    @media screen and (min-width: 1900px) {
        font-size: 339px;
        line-height: 295px;
    }
`

export const Content = styled.div`
    width: 711px;
    padding-top: 128px;
`

export const AboutTitle = styled.h1`
    font-weight: bold;
    color: var(--font-color);
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const ProfileText = styled.p`
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 157px;
`

export const SkillsText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 157px;

    > ul {
        list-style: none;
    }
`

export const Skill = styled.li`
    font-size: 24px;
    margin-bottom: 10px;
`

export const InterestsText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;

    > ul {
        list-style: none;
    }
`

export const Category = styled.li`
    text-transform: uppercase;
    margin-bottom: 10px;
`

export const Interest = styled.li`
    margin-bottom: 10px;
`

export const Contact = styled(SecondaryButton)`
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
`