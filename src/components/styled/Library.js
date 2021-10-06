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