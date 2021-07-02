import styled from "styled-components";

const Hobbies = (props) => {
    return(
        <Container id="Hobbies">
            <Content>
                <Title>Hobbies</Title>
                <CTA>
                    <Card>
                        <Image src="./Images/ultimate.jpg"/>
                        <CardTitle>Ultimate Frisbee</CardTitle>
                        <ul>
                            <li>Texas A&M Dozen 2018 - 2022</li>
                        </ul>
                    </Card>

                    <Card style={{backgroundColor: '#CF352E', color: 'white'}}>
                        <Image src="./Images/coding.jpg"/>
                        <CardTitle>Coding</CardTitle>
                        <ul>
                            <li>Web Applications</li>
                            <li>Learning</li>
                            <li>Teaching</li>
                        </ul>
                    </Card>

                    <Card>
                        <Image src="./Images/card-game.png"/>
                        <CardTitle>Card & Board Games</CardTitle>
                        <ul>
                            <li>Stone Age</li>
                            <li>Quixx</li>
                            <li>Azul</li>
                            <li>Up & Down The River</li>
                            <li>Exploding Kittens</li>
                        </ul>
                    </Card>
                </CTA>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    // min-height: 100vh;
    background-image: linear-gradient(white, 35vh, #5CB8E6, white); 
`;

const Content = styled.div`
    position: relative;
    top: 75px;
    //border: 1px solid red;
    width: 100%;
`;

const Title = styled.p`
    text-align: center;
    color: #CF352E;
    font-size: 24px;
    margin: 0;
    font-family: "Courier New", Arial;
`
const CTA = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 120px 0;
    font-family: "Courier New", Arial;

    @media (max-width: 48rem){
        display: flex;
        flex-direction: column;
    }
`;

const Card = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    // height: 692px;
    width: 432px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1A1A1A;
    transition-duration: 1s;

    li{
        font-size: 24px;
    }

    &:hover{
        transform: translateY(-25px);
        transition-duration: 1s;
    }
`;

const CardTitle = styled.p`
    text-align: center;
    font-size: 36px;
    white-space: nowrap;
`;

const Image = styled.img`
    border-radius: 50%;
    background-color: #CF352E;
    height: 300px;
    width: 300px;
    margin: 30px 0 30px 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;


export default Hobbies;