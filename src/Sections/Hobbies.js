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

                    <Card>
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
    min-height: 100vh;
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
        justify-content: center;
    }
`;

const Card = styled.div`
    border-radius: 4px;
    padding: 0 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1A1A1A;
    transition-duration: 1s;
    z-index: 4;

    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    background-color: rgba(255, 255, 255, .15);
    backdrop-filter: blur(5px);

    li{
        font-size: 24px;

        @media (max-width: 48rem){
            font-size: 18px;
        }
    }

    &:hover{
        transform: translateY(-25px);
        transition-duration: 1s;
    }

    @media (max-width: 48rem){
        margin: 15px;
    }
`;

const CardTitle = styled.p`
    text-align: center;
    font-size: 36px;
    white-space: nowrap;

    @media (max-width: 48rem){
        font-size: 24px;
    }
`;

const Image = styled.img`
    border-radius: 50%;
    background-color: #CF352E;
    height: 300px;
    width: 300px;
    margin: 30px 0 30px 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    @media (max-width: 48rem) {
        height: 275px;
        width: 275px;
    }
`;


export default Hobbies;