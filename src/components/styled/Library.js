import styled from "styled-components";

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
`

export const Emblem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-self: baseline;
`

export const EmblemIcon = styled.h1`
    font-size: 24px;
    transform: scaleY(1.3);
    color: var(--font-color);
    margin: 0 auto;
    margin-bottom: 17px;
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
    align-self: center;
    width: 176px;
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
    opacity: 0.1;
`

export const ProjectDescription = styled.div`
    height: 419px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 34px;
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
    margin-bottom: 135px;
`

export const ProjectTopics = styled.p`
    font-size: 13px;
`

export const ProjectPreview = styled.div`
    padding-right: 35px;
    padding-top: 30px;
    display: flex;
    justify-content: end;
    align-self: center;
    height: 737px;
    background: var(--background-color);
    background-image: url(${props => props.image});
    background-size: cover;
    background-position-x: center;
    background-position-y: 0;
    border-radius: 16px;
    

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

export const Button = styled.a`
    display: block;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
`

export const PrimaryButton = styled(Button)`
    padding-top: 10px;
    background: var(--button-background);
    color: var(--background-color);
`

export const SecondaryButton = styled(Button)`
    padding-top: 9px;
    background: transparent;
    border: var(--button-stroke) solid var(--button-border);
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
    width: 110px;
    padding: 11px;
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
`