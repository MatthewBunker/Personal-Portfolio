import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Projects = (props) => {

    return(
        <Container id="Projects">
            <Content id="projectContent">
                <Title>Highlighted Projects</Title>
                <SubTitle>Check Out My Collection on <a href="https://github.com/MatthewBunker" target="_blank">Github</a>.</SubTitle>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="June 2021"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            Personal Portfolio
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            {/* <LanguageImg src="./Images/html-5.png" /> */}
                            <LanguageImg src="./Images/css.png" />
                            <LanguageImg src="./Images/physics.png" />
                            <LanguageImg src="./Images/firebase.png" />
                            <LanguageImg src="./Images/styledComponents.png" />
                            <LanguageImg src="./Images/github.png" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                            My personal portfolio is a web application that is meant to serve as a more
                            extensive resume for any job recruiter to look at. 
                        </p>
                        <ElementImg src="./Images/personalPortfolio.png" />
                        <div
                             style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/MatthewBunker/Personal-Portfolio" target="_blank">Github</Button>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="May 2021"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            Disney+ Clone
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            <LanguageImg src="./Images/styledComponents.png" />
                            <LanguageImg src="./Images/css.png" />
                            <LanguageImg src="./Images/physics.png" />
                            <LanguageImg src="./Images/firebase.png" />
                            <LanguageImg src="./Images/redux.svg" />
                            <LanguageImg src="./Images/github.png" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                            The Disney+ clone is a replica of the real Disney+ web app. It is complete with a login page,
                            home page, and movie/tv show information page.
                        </p>
                        <ElementImg src="./Images/disney+.png" />
                        <div
                             style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/MatthewBunker/disney-plus-clone" target="_blank">Github</Button>
                            <Button href="https://disney-plus-clone-c1f5d.web.app/" target="_blank">View Me</Button>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="January 2021 - May 2021"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            Texas A&M Hockey Statistics Tracker
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            {/* <LanguageImg src="./Images/html-5.png" /> */}
                            {/* <LanguageImg src="./Images/css.png" /> */}
                            {/* <LanguageImg src="./Images/ruby.png" /> */}
                            <LanguageImg src="./Images/rubyOnRails.png" />
                            <LanguageImg src="./Images/heroku.png" />
                            <LanguageImg src="./Images/bootstrap-fill.svg" />
                            <LanguageImg src="./Images/github.png" />
                            <LanguageImg src="./Images/postgresql-vertical.svg" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                           The Texas A&M Ice Hockey Stat Tracker is a web application that allows the team to record games, 
                             player statistics, view team statistics, and analytics on a responsive UI.
                        </p>
                        <ElementImg src="./Images/TamuIceHockey.png" />
                        <div
                             style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/Rade22/TamuIceHockey" target="_blank">Github</Button>
                            <Button href="https://pumpkin-pie-84093.herokuapp.com/" target="_blank">View Me</Button>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="October 2020 - December 2020"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            strimi
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            <LanguageImg src="./Images/html-5.png" />
                            <LanguageImg src="./Images/css.png" />
                            <LanguageImg src="./Images/javascript.png" />
                            <LanguageImg src="./Images/firebase.png" />
                            <LanguageImg src="./Images/bootstrap-fill.svg" />
                            <LanguageImg src="./Images/github.png" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                            Strimi is a new way to discover and explore new music, movies, and tv shows. This platform allows users to freely express their opinions and preferences with friends through reviews, likes, and dislikes. Users are provided with relevent information such as movie trailers, descriptions, and Spotify links to stream music.
                        </p>
                        <ElementImg src="./Images/strimi.png" />
                        <div
                             style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/jonathan343/strimi" target="_blank">Github</Button>
                            <Button href="https://jonathan343.github.io/strimi/" target="_blank">View Me</Button>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="July 2020"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            Covid-19 Tracker
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            {/* <LanguageImg src="./Images/html-5.png" /> */}
                            <LanguageImg src="./Images/css.png" />
                            {/* <LanguageImg src="./Images/javascript.png" /> */}
                            <LanguageImg src="./Images/physics.png" />
                            <LanguageImg src="./Images/firebase.png" />
                            <LanguageImg src="./Images/material-ui.svg" />
                            <LanguageImg src="./Images/github.png" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                            This tracks Covid-19 cases, recoveries, and deaths for every country. The tracker includes a simple web page with a map, graph, and stat chart.
                        </p>
                        <ElementImg src="./Images/Covid19.png" />
                        <div
                             style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/MatthewBunker/Covid-19-tracker" target="_blank">Github</Button>
                            <Button href="https://covid-19-tracker-4ed9a.web.app/" target="_blank">View Me</Button>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#A6AAAB', color: '#F1F7F9', display: 'flex', flexDirection: 'column', textAlign: 'center'}}
                        contentArrowStyle={{ borderRight: '7px solid  #5cb8e6' }}
                        date="April 2020"
                        iconStyle={{ background: '#CF352E', color: '#fff'}}
                    >
                        <h3 
                            className="vertical-timeline-element-title"
                            style={{color: '#2E2D2D', fontSize: '30px'}}
                        >
                            Blackjack Game
                        </h3>
                        <h4 
                            className="vertical-timeline-element-subtitle"
                            style={{marginTop: '10px'}}
                        >
                            <LanguageImg src="./Images/html-5.png" />
                            <LanguageImg src="./Images/css.png" />
                            <LanguageImg src="./Images/javascript.png" />
                            <LanguageImg src="./Images/github.png" />
                        </h4>
                        <p
                           style={{fontSize: '20px', marginBottom: '10px'}} 
                        >
                            An artificial intelligence blackjack game that offers a simple interface. The game includes card images, sounds, a table to tally the player's record, and a money component.
                        </p>
                        <ElementImg src="./Images/FinalBJInterface.png" />
                        <div
                            style={{margin: '25px 0 15px 0'}}
                        >
                            <Button href="https://github.com/MatthewBunker/Blackjack-Personal-Project" target="_blank">Github</Button>
                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </Content>
        </Container>
    );
};

const Container = styled.div`
background-color: #1A1A1A;
    padding: 0 0 90px 0;
`;

const Content = styled.div`
    position: relative;
    top: 80px;
    //border: 1px solid red;
    width: 100%;
    text-align: center;
    font-family: "Courier New", Arial;
`;

const Title = styled.p`
    color: #CF352E;
    font-size: 24px;
    font-weight: 700;

    @media(max-width: 48rem){
        font-size: 24px;
    }
`;

const SubTitle = styled.p`
    color: white;
    font-size: 40px;
    margin: 0 0 15px 0;

    a{
        color: #5cb8e6;
        text-decoration: none;
    }

    @media(max-width: 48rem){
        text-align: left;
        font-size: 48px;
        margin-left: 17px;
    }
`;

const LanguageImg = styled.img`
    height: 40px;
    width: 40px;
    transition-duration: 1s;
    padding-right: 5px;

    &:hover{
        transform: translateY(-8px);
        transition-duration: 750ms;
    }
`;

const ElementImg = styled.img`
    width: 100%;
    border-radius: 10px;
`

const Button = styled.a`
    padding: 15px;
    margin: 0 10px 0 0;
    background-color: #5cb8e6;
    border-radius: 10px;
    color: white;
    width: max-content;
    cursor: pointer;
    transition-duration: 1s;
    text-decoration: none;

    &:hover{
        background-color: #2E2D2D;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        color: white;
        transition-duration: 1s;
        //border: 3px solid rgba(255,255,255,.7);
        transform: scale(1.05);
        text-decoration: none;
    }
`;

export default Projects;