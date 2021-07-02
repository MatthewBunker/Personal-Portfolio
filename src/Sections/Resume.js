import styled from "styled-components";

const Resume = (props) => {
    return(
        <Container id="Resume">
            <Content>
                <Title>Resume</Title>
                <SubTitle>I'm Determined to be Successful.</SubTitle>
                <CTA>
                    <EducationDiv>
                        <EducationTitle>Education</EducationTitle>
                        <EducationRow>
                            <InfoDiv>
                                <InfoTitle>School:</InfoTitle>
                                <InfoSubTitle>Texas A&M University</InfoSubTitle>
                            </InfoDiv>

                            <InfoDiv>
                                <InfoTitle>Major:</InfoTitle>
                                <InfoSubTitle>Computer Science</InfoSubTitle>
                            </InfoDiv>

                            <InfoDiv>
                                <InfoTitle>Minor:</InfoTitle>
                                <InfoSubTitle>Business</InfoSubTitle>
                            </InfoDiv>

                            <InfoDiv>
                                <InfoTitle>GPA:</InfoTitle>
                                <InfoSubTitle>3.58</InfoSubTitle>
                            </InfoDiv>
                        </EducationRow>
                        <EducationRow style={{marginBottom: '0px'}}>
                            <InfoDiv>
                                <InfoTitle>Classification:</InfoTitle>
                                <InfoSubTitle>Senior (115 Hours)</InfoSubTitle>
                            </InfoDiv>
                            
                            <InfoDiv>
                                <InfoTitle>Graduation Date:</InfoTitle>
                                <InfoSubTitle>May, 2022</InfoSubTitle>
                            </InfoDiv>

                            <InfoDiv>
                                <InfoTitle>Honors:</InfoTitle>
                                <InfoSubTitle>Lauren ‘02 and Christopher Zugaro ‘02 Scholarship</InfoSubTitle>
                                <InfoSubTitle>Distinguished Student Award</InfoSubTitle>
                            </InfoDiv>
                        </EducationRow>
                    </EducationDiv>

                    <ExperienceDiv>
                        <ExperienceTitle>Experience</ExperienceTitle>
                        <ExperienceRow>
                            <InfoDiv style={{marginRight: '15px'}}>
                                <InfoTitle>Engineer Peer Teacher</InfoTitle>
                                <InfoSubTitle>August 2019 - December 2020</InfoSubTitle>
                                <InfoText>
                                    Instructed engineering students in introductory software 
                                    engineering topics through python. As well as installing
                                    important teaching skills such as analyzing code quickly 
                                    and adapting positive, but applicable feedback in a straightforward manner.
                                </InfoText>
                            </InfoDiv>

                            <InfoDiv style={{marginRight: '15px'}}>
                                <InfoTitle>Web Developer</InfoTitle>
                                <InfoSubTitle>Feburary 2021 - June 2021</InfoSubTitle>
                                <InfoText>
                                    Develop and maintain websites for the Carter-Sowell research lab.
                                    Helped revolutionize their tech infastructure by moving work from 
                                    Wordpress to Wix.
                                </InfoText>
                            </InfoDiv>

                            <InfoDiv>
                                <InfoTitle>Aggie Web Developers</InfoTitle>
                                <InfoSubTitle>June 2021 - Present</InfoSubTitle>
                                <InfoText>
                                    Built a full stack web application for a student organization. 
                                    Allowed them to have a calendar, update news efficiently, and display 
                                    current events.
                                </InfoText>
                            </InfoDiv>
                        </ExperienceRow>
                    </ExperienceDiv>
                    <LanguagesDiv>
                        <LanguagesTitle>Languages & Technologies</LanguagesTitle>
                        <LanguagesRow>
                            <LanguagesLevel>
                                <LevelTitle>Proficient</LevelTitle>
                                <LanguagesImg>
                                    <img src="./Images/css.png" id="css"/>
                                    <img src="./Images/html-5.png" id="html"/>
                                    <img src="./Images/javascript.png" id="js"/>
                                    <img src="./Images/python.png" id="python"/>
                                    <img src="./Images/figma.png" id="figma"/>
                                </LanguagesImg>
                            </LanguagesLevel>

                            <LanguagesLevel>
                                <LevelTitle>Comfortable</LevelTitle>
                                <LanguagesImg>
                                    <img src="./Images/rubyOnRails.png" id="rails"/>
                                    <img src="./Images/physics.png" id="react"/>
                                    <img src="./Images/github.png" id="github"/>
                                    <img src="./Images/styledComponents.png" id="styled" style={{backgroundColor: 'grey', borderRadius: '50%'}}/>
                                    <img src="./Images/firebase.png" id="firebase" style={{backgroundColor: 'grey', padding: '5px'}}/>
                                    <img src="./Images/bootstrap-fill.svg" id="bootstrap" />
                                    <img src="./Images/c++.png" id="c"/>
                                </LanguagesImg>
                            </LanguagesLevel>

                            <LanguagesLevel>
                                <LevelTitle>Beginner</LevelTitle>
                                <LanguagesImg>
                                    <img src="./Images/heroku.png" id="heroku"/>
                                    <img src="./Images/java.png" id="java"/>
                                    <img src="./Images/postgresql-vertical.svg" id="postgresql" style={{backgroundColor: 'grey'}}/>
                                </LanguagesImg>
                            </LanguagesLevel>
                        </LanguagesRow>
                    </LanguagesDiv>
                </CTA>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    min-height: 100vh;
    // border: 1px solid red; 
`;

const Content = styled.div`
    position: relative;
    top: 75px;
    // border: 1px solid blue;
    width: 100%;
    font-family: "Courier New", Arial;
`;

const CTA = styled.div`
    margin-left: 82px;
    margin-right: 10px;
    // height: 100%;
    // border: 1px solid green;

    @media (max-width: 48rem){
        margin: 0px 0px 150px 17px !important;
    }
`;

const Title = styled.p`
    text-align: center;
    color: #CF352E;
    font-size: 24px;
`

const SubTitle = styled.p`
    text-align: center;
    color: #1A1A1A;
    font-size: 48px;

    // #break{
    //     display: none;
    // }

    @media (max-width: 48rem){
        text-align: left;
        margin: 0 0 0 17px;
        // display: static;
    }
`;

const EducationDiv = styled.div`
    margin-bottom: 30px;
`;

const EducationTitle = styled.p`
    font-size: 48px;
    margin: 30px 0 10px 0; 

    @media(max-width: 48rem){
        font-size: 24px;
    }
`;

const EducationRow = styled.div`
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;

    @media (max-width: 48rem){
        flex-direction: column;
        margin-bottom: 0px;
    }
`;

const InfoDiv = styled.div`
    min-width: 230px;
    // border: 1px solid red;

    @media (max-width: 48rem){
        margin: 0 0 10px 0;
    }
`;

const InfoTitle = styled.p`
    color: #5CB8E6;
    margin: 0px;
    font-size: 18px;

    @media(max-width: 48rem){
        font-size: 14px;
    }
`;

const InfoSubTitle = styled.p`
    color: #CF352E;
    margin: 0px;
    font-size: 18px;

    @media(max-width: 48rem){
        font-size: 14px;
    }
`;

const ExperienceDiv = styled.div`
    margin-bottom: 30px;
`;

const ExperienceTitle = styled.p`
    font-size: 48px;

    @media(max-width: 48rem){
        font-size: 24px;
    }
`;

const ExperienceRow = styled.div`
    display: flex;

    @media(max-width: 48rem){
        flex-direction: column;
    }
`;

const InfoText = styled.p`
    font-size: 18px;
    margin: 10px 0 0 0;

    @media(max-width: 48rem){
        font-size: 14px;
    }
`;

const LanguagesDiv = styled.div`
    margin: 0 0 120px 0;

    @media (max-width: 48rem){
        margin: 0;
    }
`;

const LanguagesTitle = styled.p`
    font-size: 48px;
    margin: 10px 0 10px 0;

    @media(max-width: 48rem){
        font-size: 24px;
    }
`;

const LanguagesRow = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width: 48rem){
        flex-direction: column;
    }
`;

const LanguagesLevel = styled.div`
    text-align: center;
`;

const LevelTitle = styled.p`
    font-size: 18px;
    color: #5CB8E6;

    @media(max-width: 48rem){
        font-size: 14px;
    }
`;

const LanguagesImg = styled.div`
    margin-bottom: 75px;

    img{
        height: 40px;
        width: 40px;
        margin-right: 5px;
    }

    @media (max-width: 48rem){
        margin-bottom: 10px;
    }

    @keyframes wave{
        0%{
            transform: translateY(0rem);
        }
        25% {
            transform: translateY(-.5rem);
        }
        50%{
            transform: translateY(0rem);
        }
        75%{
            transform: translateY(.5rem);
        }
        100%{
            transform: translateY(0rem);
        }  
    }

    #css, #rails, #heroku{
        animation: wave 5s infinite;
    }
    #html, #react, #java{
        animation: wave 5s 1s infinite;
    }
    #js, #github, #postgresql{
        animation: wave 5s 2s infinite;
    }
    #python, #styled{
        animation: wave 5s 3s infinite;
    }
    #figma, #firebase{
        animation: wave 5s 4s infinite;
    }
    #bootstrap {
        animation: wave 5s 5s infinite;
    }
    #c {
        animation: wave 5s 6s infinite;
    }
`;

export default Resume;