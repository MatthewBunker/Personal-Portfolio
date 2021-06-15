import styled from "styled-components";

const Hobbies = (props) => {
    return(
        <Container id="Hobbies">
            <Content>
                <Title>Hobbies</Title>
                
            </Content>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    min-height: 100vh;
    position: relative;
    scroll-behavior: smooth;
`;

const Content = styled.div`
    position: absolute;
    top: 72px;
    //border: 1px solid red;
    width: 100%;
`;

const Title = styled.p`
    text-align: center;
    color: red;
    font-size: 30px;
`

export default Hobbies;