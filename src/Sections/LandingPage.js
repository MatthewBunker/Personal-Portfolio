import styled from 'styled-components';

const LandingPage = (props) => {
    return(
        <Container id="Home">
            <Content>
                <CTA>
                    <Title> Matthew Bunker </Title>
                    <Characteristics>
                        <Word>Developer</Word>
                        <Word>Student</Word>
                        <Word>Teacher</Word>
                    </Characteristics>
                    <SocialMedia>
                        <Wrapper><img src="./Images/email.png" /></Wrapper>
                        <Wrapper><img id="Github" src="./Images/Github.png" /></Wrapper>
                        <Wrapper><img src="./Images/Linkedin.png" /></Wrapper>
                    </SocialMedia>
                    <Quote>"God saw all that he had made, and it was VERY GOOD."</Quote>
                    <Quote>-Genesis 1:31</Quote>
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
    //scroll-behavior: smooth;
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
    --bg-color2: black;

    background-color: var(--bg-color2);
    border-radius: 25px;
    // border: 3px solid white;
    padding: 15px;
    mix-blend-mode: screen; //overlay, difference, multiply, normal
    color: white;
    font-size: 80px;
    font-weight: 700;
    margin: 0;
    width: calc(max-content);
    position: relative;

    @media (max-width: 48rem){
        font-size: 60px;
    }
`;

const Characteristics = styled.div`
    margin: 0px 0 30px 0;
    display: flex;
    justify-content: center;

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

const Word = styled.p`
    color: #171717;
    font-size: 25px;
    font-weight: 400;
    background-color: rgba(255,255,255,1);
    border-radius: 5px;
    padding: 5px;
    margin: 0 8px 0 0
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
        background-color: rgba(255,255,255,1);
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

const Quote = styled.p`
    color: white;
    font-size: 25px;
    margin-bottom: 0px;

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
        font-size: 18.75px;
    }
`;

const DownArrow = styled.img`
    height: 40px;
    width: 40px;

    position: absolute;
    top: 85%;

    background-color: rgba(255,255,255,.5);
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
`;

const BGVideo = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover; 
    z-index: -1;
`;

export default LandingPage;