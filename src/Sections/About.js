import styled from "styled-components";

const About = (props) => {
    // const begCheckpoint = 0 * window.innerHeight;
    // console.log("begCheckPoint: " + begCheckpoint);
    
    // const midCheckpoint = 1 * window.innerHeight;
    // console.log("midCheckPoint: " + midCheckpoint);

    // const endCheckpoint = 2 * window.innerHeight;
    // console.log("endCheckPoint: " + endCheckpoint);

    // var aboutOpacity = 0;
    // var previousScroll = 0;

    // window.addEventListener("scroll", () => {
    // const currentScroll = window.pageYOffset;
    // // console.log(currentScroll);
    
    // if(currentScroll <= midCheckpoint && currentScroll >= previousScroll && aboutOpacity < 1){ //going down and increasing opacity
    //     aboutOpacity = aboutOpacity + .017 ;
    //     // console.log("1");
    // }
    // else if(currentScroll <= endCheckpoint && currentScroll >= midCheckpoint && previousScroll >= currentScroll && aboutOpacity < 1){ //going up and increasing opacity
    //     aboutOpacity = aboutOpacity + .02;
    // }
    // else if (currentScroll <= midCheckpoint && currentScroll <= previousScroll) { //going up and decreasing opacity
    //     aboutOpacity = aboutOpacity - .017;
    //     // console.log("2");
    // }
    // else if (currentScroll <= endCheckpoint && currentScroll >= midCheckpoint && previousScroll <= currentScroll){ //going down and decreasing opacity
    //     aboutOpacity = aboutOpacity - .015;
    // }
    // else if (currentScroll >= endCheckpoint){
    //     aboutOpacity = 1;
    // }
    // else if (currentScroll === 0){
    //     aboutOpacity = 0;
    // }

    // if(aboutOpacity > 1){
    //     aboutOpacity = 1;
    // }
    // else if(aboutOpacity < 0){
    //     aboutOpacity = 0;
    // }
    // console.log("aboutOpacity: " + aboutOpacity);
    // previousScroll = currentScroll;
    // document.getElementById("About").style.opacity = aboutOpacity;
    // });

    return(
        <Container id="About">
            <Content>
                <CTA>
                    <Title>About</Title>

                    <SubTitle>Get to Know Me</SubTitle>

                    <PictureRow>
                        <Picture src="./Images/MatthewBunker.jpg" />
                        <Text> 
                            I am a rising senior at <a>Texas A&M University </a>
                            majoring in <a>computer science</a> and minoring in <a>business</a>.
                            I love to build unique <a>web applications</a> that challenge 
                            me to learn something new everyday and enhance my skills 
                            as a <a>full stack developer</a>.
                        </Text>
                    </PictureRow>

                    <InfoRow>
                        <Row style={{marginBottom: '30px', marginLeft: '5px'}}>
                            <Info>
                                <InfoTitle>Full Name:</InfoTitle>
                                <InfoAnswer>Matthew Scott Bunker</InfoAnswer>
                            </Info>

                            <Info>
                                <InfoTitle>Birthday:</InfoTitle>
                                <InfoAnswer>August 16th, 1999</InfoAnswer>
                            </Info>

                            <Info>
                                <InfoTitle>Hometown:</InfoTitle>
                                <InfoAnswer>Houston, Texas</InfoAnswer>
                            </Info>
                        </Row>

                        <Row>
                            <Info>
                                <InfoTitle>Favorite Language:</InfoTitle>
                                <InfoAnswer>Python</InfoAnswer>
                            </Info>

                            <Info>
                                <InfoTitle>Favorite Hobby:</InfoTitle>
                                <InfoAnswer>Ultimate Frisbee</InfoAnswer>
                            </Info>
                        </Row>
                    </InfoRow>

                    <ButtonRow>
                        <Button href="./PDF/2021 Resume.pdf" target="_blank">Resume <img src="./Images/arrow.png" /></Button>
                        <Button href= "mailto: matthewscottbunker@gmail.com" id="Hire">Hire Me <img src="./Images/arrow.png" /></Button>
                    </ButtonRow>
                </CTA>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: #1A1A1A;
    min-height: 100vh;
    // border: 1px solid green;
    position: relative;
    z-index: 4;
`;

const Content = styled.div`
    position: relative;
    top: 75px;
    // border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const CTA = styled.div`
    // border: 1px solid blue;
    margin: 0px auto 100px auto;
    text-align: center;
    max-width: 791px;
    font-family: "Courier New", Arial;

    @media (max-width: 48rem){
        width: 90%;
    }
`;

const Title = styled.p`
    font-size: 24px;
    margin: 0px;
    color: #CF352E;
`;

const SubTitle = styled.p`
    font-size: 65px;
    margin: 0px;
    color: white;

    @media(max-width: 48rem){
        font-size: 40px;
    }
`;

const PictureRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    text-align: left;
    // border: 1px solid green;

    @media(max-width: 48rem){
        flex-direction: column;
    }
`;

const Picture = styled.img`
    height: 255px;
    width: 255px;
    border-radius: 50%;
    border: 3px solid #5CB8E6;
`;

const Text = styled.p`
    color: white;
    padding-left: 40px;
    max-width: 474px;
    font-size: 20px;

    a{
        color: #5CB8E6 !important;
        font-weight: 700;
    }

    @media(max-width: 48rem){
        margin-top: 25px;
        text-align: center;
        padding-left: 0px;
        font-size: 18px;
    }
`;

const InfoRow = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Info = styled.div`
    text-align: left;
    font-size: 18px;

    @media(max-width: 48rem){
        font-size: 14px;
    }

    p{
        margin: 0;
    }
`;

const InfoTitle= styled.p`
    color: #5CB8E6;
`;

const InfoAnswer = styled.p`

`;

const ButtonRow = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    #Hire{
        animation: bounce 2s infinite;
        @keyframes bounce{
            50% {
                transform: translateY(-.5rem);
            }
        }
    }
`;

const Button = styled.a`
    width: 167px;
    height: 46px;
    background-color: #CF352E;
    padding: 15px;
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    
    &:hover{
        text-decoration: none;
        color: white;
        border:2px solid rgba(255,255,255,.5);
    }

    img{
        transform: rotate(270deg);
        height: 15px;
    }

    @media(max-width: 48rem){
        height: 37px;
        width: 158px;
    }
`;

export default About;