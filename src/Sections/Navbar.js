import styled from 'styled-components';
import {Link} from 'react-scroll';

const Navbar = (props) => {
    

    return(
        <Container>
            <Content>
                <Wrapper href="#Home">
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/home-icon.svg" alt="HOME"/>
                        <span>HOME</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#About">
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/info.png" alt="ABOUT" style={{backgroundColor: 'white', borderRadius: '50%'}} />
                        <span>ABOUT</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Resume">
                    <Link activeClass="active" to="Resume" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/online-resume.png" alt="RESUME" style={{backgroundColor: 'white',width: '20px', alignItems: 'center' }} />
                        <span>RESUME</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Projects">
                    <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/project.png" alt="PROJECTS" style={{}}/>
                        <span>PROJECTS</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Hobbies">
                    <Link activeClass="active" to="Hobbies" spy={true} smooth={true} offset={0} duration={1000}>
                        {/* <img src="/Images/sports.png" alt="HOBBIES" style={{backgroundColor: 'white', borderRadius: '50%'}}/> */}
                        <span>HOBBIES</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Contact">
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={1000}>
                        {/* <img src="/Images/call.png" alt="CONTACT" style={{backgroundColor: 'white', borderRadius: '50%'}} /> */}
                        <span>CONTACT</span>
                    </Link>
                </Wrapper>
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
    padding-right: px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 1s;

    img{
        width: 20px;
        height: 20px;
        margin-right: 3px;
    }

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
        span:after{
            background-color white;
        }
        transform: scale(1.15);
        transition: 1s;
    }
`;


export default Navbar;