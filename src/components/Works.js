import React, { useState } from "react";
import { Carousel, ProjectDescription, ProjectInfo, List, Description, DescriptionTitle, ProjectTopics, Input, Label, ProjectPreview, DemoButton, MoreButton, ProjectNav, Arrow, NavArrows, SecondaryButton } from "./styled/Library";
import { BsLightningFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { GoCode } from "react-icons/go";

function Works({projects}) {
    const [index, setIndex] = useState(0);
    const project = projects[index];
    const maxIndex = projects.length - 1;
    const canGoNext = index < maxIndex;
    const canGoBack = index > 0;
    

    return (
        <Carousel id="works">
            <ProjectInfo>
                <ProjectNav>
                    <List>
                        {projects.map(({name}, i) => {
                            let props = {}
                            props.checked = i === index ? "checked" : "";
                
                            return (
                                <div style={{marginBottom: 10}} key={i}>
                                    <Input
                                        style={{display: "none"}} 
                                        type="radio" 
                                        id={name} 
                                        name="project" 
                                        value={name} 
                                        onChange={() => null}
                                        onClick={() => setIndex(i)}
                                        {...props}
                                    />
                                    <Label htmlFor={name}>{name}</Label>
                                </div>
                            )
                        })}
                    </List>
                    <NavArrows>
                        <Arrow style={{opacity: `${index === 0 ? 0.2 : 1}`}} onClick={() => setIndex(canGoBack ? index - 1 : index )}><MdOutlineArrowBackIos size={20} /></Arrow>
                        <Arrow style={{opacity: `${index === maxIndex ? 0.2 : 1}`}} onClick={() => setIndex(canGoNext ? index + 1 : index)}><MdOutlineArrowForwardIos size={20}/></Arrow>
                    </NavArrows>
                </ProjectNav>
                <ProjectDescription>
                        <DescriptionTitle>Description</DescriptionTitle>
                        <Description>{project.description}</Description>

                        <div style={{position: "relative", left: "-5px"}}>
                            <DemoButton href={project.link} target="_blank" rel="noreferrer">Demo<BsLightningFill size={15} style={{position: "relative", top: "2px", left: "3px"}} /></DemoButton>
                            <SecondaryButton 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{opacity: project.github ? 1 : 0.3}}
                            >Info<GoCode size={15} style={{position: "relative", top: "2px", left: "4px"}} />
                            </SecondaryButton>
                        </div>
                    </ProjectDescription>
                <ProjectTopics>{project.topics}</ProjectTopics>
            </ProjectInfo>
            <ProjectPreview style={{backgroundPositionY: -737 * index}}>
            </ProjectPreview>
        </Carousel>
    )
}

export default Works;