import styled from 'styled-components';

const Navbar = (props) => {
    return(
        <Container>
            <Content>
                <Wrapper>HOME</Wrapper>
                <Wrapper>ABOUT</Wrapper>
                <Wrapper>RESUME</Wrapper>
                <Wrapper>PROJECTS</Wrapper>
                <Wrapper>HOBBYS</Wrapper>
                <Wrapper>CONTACT</Wrapper>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  background-color: rgba(0,0,0,.5);
  height: 72px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    // float: right;
    // border: 1px solid red;
    height: 100%;
    align-items: center;
    padding-right: 15px;
    width: 50%;
    color: white;
`;

const Wrapper = styled.a`
    letter-spacing: .5rem;
    padding-right: 15px;
    cursor: pointer;
`;


export default Navbar;