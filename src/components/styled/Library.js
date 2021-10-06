import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: var(--body-text);
    height: 102px;
    margin-bottom: 134px;
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

export const EmblemIcon = styled.div`
    width: 50px;
    height: 50px;
    background: black;
    margin: 0 auto;
    margin-bottom: 5px;
`

export const EmblemText = styled.h1`
    font-family: var(--typeface);
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
    text-align: center;
    font-weight: normal;
    margin-bottom: 197px;
`

export const Carousel = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 823px;
    width: 1589px;
    border-radius: 35px;
    background-color: var(--carousel-color);
    padding: 40px;
    margin-bottom: 174px;
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
    width: 1102px;
    height: 737px;
    background: green;
    border-radius: 16px;
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
    padding: 10px;
`

export const DemoButton = styled(Button)`
    background: white;
    color: black;
    margin-bottom: 10px;
`

export const MoreButton = styled(Button)`
    background: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 30px;
`

export const NavArrows = styled.div`
`

export const Arrow = styled.button`
    background: transparent;
    border: none;
    display: inline;
`