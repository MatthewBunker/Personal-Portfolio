import styled from 'styled-components';
import {Link} from 'react-scroll';

const LandingPage = (props) => {
    // const begCheckpoint = 0 * window.innerHeight;
    // console.log("begCheckPoint: " + begCheckpoint);

    // const endCheckpoint = 1 * window.innerHeight;
    // console.log("endCheckPoint: " + endCheckpoint);

    // var homeOpacity = 1;
    // var previousScroll = 0;

    // window.addEventListener("scroll", () => {
    // const currentScroll = window.pageYOffset;
    // // console.log(currentScroll);

    // if(currentScroll >= previousScroll && currentScroll > begCheckpoint){ //going down and decreasing opacity
    //     homeOpacity = homeOpacity - .018;
    // }
    // else if(currentScroll <= previousScroll && currentScroll < endCheckpoint){ //going up and increasing opacity
    //     homeOpacity = homeOpacity + .012;
    // }

    // if(currentScroll === 0){
    //     homeOpacity = 1;
    // }

    // if(homeOpacity > 1){
    //     homeOpacity = 1;
    // }
    // else if(homeOpacity < 0){
    //     homeOpacity = 0;
    // }
    // console.log("homeOpacity: " + homeOpacity);
    // previousScroll = currentScroll;
    // document.getElementById("homeContent").style.opacity = homeOpacity;
    // });

    return(
        <Container id="Home">
            <Content id="homeContent">
                <CTA>
                    <Title> Matthew Bunker </Title>
                    <Characteristics>
                        <Word>Developer</Word>
                        <Word>Student</Word>
                        <Word>Teacher</Word>
                    </Characteristics>
                    <SocialMedia>
                        <Wrapper><img src="./Images/email.png" /></Wrapper>
                        <Wrapper href="https://github.com/MatthewBunker" target="_blank"><img id="Github" src="./Images/Github.png" /></Wrapper>
                        <Wrapper><img src="./Images/Linkedin.png" /></Wrapper>
                    </SocialMedia>
                    <Quote>
                        I am a dedicated software engineer seeking a Summer or Fall 2021 internship in all aspects of the development process. I am looking to
                        enhance my technical and professional skills in a collaborative environment, while displaying my leadership and critical thinking 
                        skills on a unique project.
                    </Quote>
                </CTA>
                <DownArrow src="./Images/chevron.png"/>
            </Content>
            <BGVideo id="video" src="./Videos/lake.mov" type="video/mp4" autoPlay muted loop/>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`;

const Content = styled.div`
    height: calc(100% - 72px);
    width: 100%;
    position: absolute;
    top: 72px;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CTA = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center; 
    font-family: "Courier New", Arial;
    width: 100%;
`;

const Title = styled.p`
    border-radius: 25px;
    // border: 3px solid white;
    color: white;
    font-size: 80px;
    font-weight: 700;
    margin: 0;
    // width: calc(max-content);
    position: relative;

    @media (max-width: 48rem){
        font-size: 60px;
    }
`;

const Characteristics = styled.div`
    margin: 0px 0 30px 0;
    display: flex;
    justify-content: center;
    width: 100%;

    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease calc(2s) forwards;

    @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }
`;

const Word = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 00;
    //background-color: rgba(255,255,255,1);
    border-radius: 5px;
    padding: 5px;
    margin: 0px;

    @media (max-width: 48rem){
        font-size: 18px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
    margin: 0 auto;
    //border: 1px solid green;

    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease calc(3s) forwards;

    @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }

    #Github{
        background-color: rgba(255,255,255,1);
        border-radius: 50%;
        border: 1px transparent;
    }

    a{
        padding-right: 15px;
    }
`;


const Wrapper = styled.a`
    img{
        height: 30px;
        width: 30px;  
    }
    
    @media (max-width: 48rem){
        img{
            height: 22.5px;
            width: 22.5px;
        }:
    }    
`;

const Quote = styled.p`
    color: white;
    font-size: 20px;
    // width: 50%;
    text-align: center;
    margin: 20px auto;
    max-width: 600px;
    

    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease calc(4s) forwards;

    @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }

    @media (max-width: 48rem){
        font-size: 14px;
    }
`;

const DownArrow = styled.img`
    height: 40px;
    width: 40px;

    position: absolute;
    bottom: 15px;

    background-color: rgba(255,255,255,.9);
    border-radius: 50%;

    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease calc(5s) forwards;

    @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }

    @media (max-width: 768px) and (max-height: 740px){
        display: none;
    }

    @keyframes pulse{
        0% {
            opacity: 1;
            transform: scale(.5);
        }
        100% {
            opacity: 0;
            transform: scale(1);
        }
    }
    animation: pulse 2s infinite;
    animation-delay: 5s;
`;

const BGVideo = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover; 
    z-index: -1;
`;

export default LandingPage;