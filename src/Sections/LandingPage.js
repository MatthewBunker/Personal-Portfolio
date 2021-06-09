import styled from 'styled-components';

const LandingPage = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <Title> Matthew Bunker </Title>
                    <Characteristics>Web Developer | Student | Teacher</Characteristics>
                    <SocialMedia>
                        <Wrapper><img src="./Images/email.png" /></Wrapper>
                        <Wrapper><img id="Github" src="./Images/Github.png" /></Wrapper>
                        <Wrapper><img src="./Images/Linkedin.png" /></Wrapper>
                    </SocialMedia>
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
`;

const Title = styled.p`
    --bg-color: rgba(33,41,48,1);

    background-color: var(--bg-color);
    border-radius: 25px;
    padding: 15px;
    mix-blend-mode: multiply;
    color: white;
    //font-size: 80px;
    font-weight: 700;
    margin: 0;
    width: calc(max-content);
    position: relative;
    font-size: clamp(1rem, 80px, 4rem);
    font-family: "Source Code Pro", monospace;

    @media (max-width: 48rem){
        font-size: 60px;
    }
`;

const Characteristics = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 400;

    @media (max-width: 48rem){
        font-size: 18.75px;
    }


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

const SocialMedia = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    // border: 1px solid green;

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
        background-color: rgba(255,255,255,.5);
        border-radius: 50%;
        border: 1px transparent;
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

const DownArrow = styled.img`
    height: 40px;
    width: 40px;

    position: absolute;
    top: 85%;

    background-color: rgba(255,255,255,.5);
    border-radius: 50%;

    --typewriterSpeed: 6s;

    opacity: 0;
    transform: translateY(3rem);
    animation: fadeInUp 2s ease calc(4s) forwards;

    @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
    }
`;

const BGVideo = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover; 
    z-index: -1;
`;

export default LandingPage;