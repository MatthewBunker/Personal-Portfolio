import styled from 'styled-components';

const Navbar = (props) => {
    return(
        <Container>
            <Content>
                <Wrapper href="#Home"><span>HOME</span></Wrapper>
                <Wrapper href="#About"><span>ABOUT</span></Wrapper>
                <Wrapper href="#Resume"><span>RESUME</span></Wrapper>
                <Wrapper href="#Projects"><span>PROJECTS</span></Wrapper>
                <Wrapper href="#Hobbies"><span>HOBBIES</span></Wrapper>
                <Wrapper href="#Contact"><span>CONTACT</span></Wrapper>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  //position: absolute;
  background-color: rgba(0,0,0,.5);
  height: 72px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  position: fixed;

`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    float: right;
    // border: 1px solid red;
    height: 100%;
    align-items: center;
    padding-right: 15px;
    width: 50%;
`;

const Wrapper = styled.a`
    letter-spacing: .3rem;
    cursor: pointer;
    padding-right: 15px;
    text-decoration: none;

    span{
        color: rgb(249, 249, 249);
        font-size: 13px;
        line-height: 1.08;
        white-space: nowrap;
        position: relative;
        &:before {
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 50%;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: right;
            transform: scaleX(0);
            transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
        &:after{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            top: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 50%;
            transform-origin: left;
            transform: scaleX(0);
            transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover{
        span:before, span:after {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            background-color #5cb8e6;
            //background-image linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
        }
        transform: scale(1.15);
    }
`;


export default Navbar;