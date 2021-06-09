import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Projects = (props) => {
    return(
        <Container id="Projects">
            <Content>
                <Title>Projects</Title>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="April 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Blackjack Game</h3>
                        <h4 className="vertical-timeline-element-subtitle">HTML5, CSS3, JavaScript</h4>
                        <p>
                            An artificial intelligence blackjack game that offers a simple interface for card images, sounds, a table to keep track of wins/losses/draws, and a money component.
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="July 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Covid-19 Tracker</h3>
                        <h4 className="vertical-timeline-element-subtitle">React, Firebase Hosting</h4>
                        <p>
                           
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Octomber 2020 - December 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">strimi</h3>
                        <h4 className="vertical-timeline-element-subtitle">HTML5, CSS3, JavaScript, Firebase, Github Hosting</h4>
                        <p>
                            
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="January 2021 - May 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Texas A&M Ice Hockey Stat Tracker</h3>
                        <h4 className="vertical-timeline-element-subtitle">Ruby on Rails, Heroku, Postgresql</h4>
                        <p>
                            
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="May 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Disney+ Clone</h3>
                        <h4 className="vertical-timeline-element-subtitle">React, Styled-Components, Firebase, Redux</h4>
                        <p>
                            
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Personal Portfolio</h3>
                        <h4 className="vertical-timeline-element-subtitle">React, Styled-Components, Firebase</h4>
                        <p>
                            
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.PNG" />
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: #1A1A1A;
    height: 350vh;
    position: relative;
    scroll-behavior: smooth;
`;

const Content = styled.div`
    position: absolute;
    top: 72px;
    //border: 1px solid red;
    width: 100%;
`;

const Title = styled.p`
    text-align: center;
    color: red;
    font-size: 30px;
`

const ElementImg = styled.img`
    width: 100%;
`

export default Projects;