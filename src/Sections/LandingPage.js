import styled from 'styled-components';

const LandingPage = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <Title>Matthew Bunker</Title>
                    <Characteristics>Web Developer | Student | Teacher</Characteristics>
                    <SocialMedia>
                        <Wrapper><img src="./Images/instagram.png" /></Wrapper>
                        <Wrapper><img src="./Images/Github.png" /></Wrapper>
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
    flex-direction: column
`;

const CTA = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.p`
    color: white;
    font-size: 80px;
    font-weight: 700;
    margin: 0;

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
`;

const SocialMedia = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    // border: 1px solid green;
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

    background-color: white;
    border-radius: 50%;
`;

const BGVideo = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover; 
    z-index: -1;
`;

export default LandingPage;