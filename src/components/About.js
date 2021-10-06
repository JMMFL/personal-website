import React from "react";
import { AboutSection, AboutTitle, Category, Contact, Content, Interest, InterestsText, LargeText, ProfileText, Skill, SkillsText } from "./styled/Library";

function About({profile, skills, interests}) {
    return (
        <>
            <AboutSection>
                <LargeText>Code of the<br></br>Developer</LargeText>
                <Content>
                    <AboutTitle>Profile</AboutTitle>
                    <ProfileText>{profile}</ProfileText>    

                    <AboutTitle>Skills</AboutTitle>
                    <SkillsText>
                        <ul>{skills.code.map((skill, i) => <Skill key={i}>{skill}</Skill>)}</ul>
                        <ul>{skills.design.map((skill, i) => <Skill key={i}>{skill}</Skill>)}</ul>
                        <ul>{skills.other.map((skill, i) => <Skill key={i}>{skill}</Skill>)}</ul>
                    </SkillsText>
                    
                    <AboutTitle>Interests</AboutTitle>
                    <InterestsText>
                        <ul>{Object.keys(interests).map((category, i) => <Category key={i}>{category}</Category>)}</ul>
                        <ul>{Object.values(interests).map((interest, i) => <Interest key={i}>{interest}</Interest>)}</ul>
                    </InterestsText>                
                </Content>
            </AboutSection>
            <Contact>Contact</Contact>
        </>
    )
}

export default About;