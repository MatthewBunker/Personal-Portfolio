import styled from "styled-components";

const Contact = (props) => {
    return(
        <Container id="Contact">
            <Content>
                <Title>Connect With Me.</Title>
                <SocialMediaDiv>
                    <img src="./Images/github.png"/>
                    <img src="./Images/linkedin.png"/>
                    <img src="./Images/email.png"/>    
                </SocialMediaDiv>
                <SubTitle>Created By: Matthew Bunker</SubTitle>
                <Date>June 2021</Date>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: #1A1A1A;
`;

const Content = styled.div`
    //border: 1px solid red;
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
    font-family: "Courier New", Arial;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    text-align: center;
    color: #CF352E;
    font-size: 48px;
    padding: 75px 0 53px 0;
`
const SocialMediaDiv = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin-bottom: 62px;

    img{
        width: 40px;
        height: 40px;
    }
`;

const SubTitle = styled.p`
    color: white;
    font-size: 24px;
`;

const Date = styled.p`
    color: white;
    font-size: 24px;
    margin-bottom: 0;
`;

export default Contact;