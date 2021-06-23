import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { useEffect, useState } from "react";

const Navbars = (props) => {

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
        setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isNotMobile = windowDimension > 768;

    return(
         <Container>
            {isNotMobile ? (
             <Content>
                <Wrapper href="#Home">
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/home-icon.svg" alt="HOME"/>
                        <span>HOME</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#About">
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/info.png" alt="ABOUT" style={{backgroundColor: 'white', borderRadius: '50%', width: '15px', height: '15px'}} />
                        <span>ABOUT</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Resume">
                    <Link activeClass="active" to="Resume" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/online-resume.png" alt="RESUME" style={{backgroundColor: 'white',width: '12px', height: '15px', alignItems: 'center' }} />
                        <span>RESUME</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Projects">
                    <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={0} duration={1000}>
                        <img src="/Images/project.png" alt="PROJECTS" style={{width: '15px', height: '15px'}}/>
                        <span>PROJECTS</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Hobbies">
                    <Link activeClass="active" to="Hobbies" spy={true} smooth={true} offset={0} duration={1000}>
                        {/* <img src="/Images/sports.png" alt="HOBBIES" style={{backgroundColor: 'white', borderRadius: '50%'}} */}
                        <span>HOBBIES</span>
                    </Link>
                </Wrapper>
                <Wrapper href="#Contact">
                    <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={1000}>
                        {/* <img src="/Images/call.png" alt="CONTACT" style={{backgroundColor: 'white', borderRadius: '50%'}}  */}
                        <span>CONTACT</span>
                    </Link>
                </Wrapper>
            </Content>
            ) : (
                <Content>
                    <Navbar 
                        sticky="top" expand="lg" collapseOnSelect style={{width: '100%'}}
                    >
                        <Navbar.Toggle className="coloring" style={{backgroundColor: 'white'}} />
                        <Navbar.Collapse>
                            <Nav
                                style={{marginTop: '15px'}}
                            >
                            <a href="#Home" >
                                <Link activeClass="active" to="Home" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>HOME</span>
                                </Link>
                            </a>
                            <a href="#About">
                                <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>ABOUT</span>
                                </Link>
                            </a>
                            <a href="#Resume">
                                <Link activeClass="active" to="Resume" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>RESUME</span>
                                </Link>
                            </a>
                            <a href="#Projects">
                                <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>PROJECTS</span>
                                </Link>
                            </a>
                            <a href="#Hobbies">
                                <Link activeClass="active" to="Hobbies" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>HOBBIES</span>
                                </Link>
                            </a>
                            <a href="#Contact">
                                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={0} duration={1000}>
                                    <span style={{letterSpacing: '.3rem', cursor: 'pointer', textDecoration: 'none !important', color: 'white'}}>CONTACT</span>
                                </Link>
                            </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Content>
            )
        }
        </Container>
    );
};



const Container = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,.5);
  min-height: 72px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  position: fixed;
  align-items: center;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    float: right;
    //border: 1px solid red;
    height: 100%;
    align-items: center;
    width: max-content;
    font-family: "Courier New", Arial;

    @media(max-width: 48rem){
        width: 100%;   
    }
`;

const Wrapper = styled.a`
    letter-spacing: .3rem;
    cursor: pointer;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    transition: 1s;
    padding-right: 15px;

    @media(max-width: 48rem){
        img{
            display: none;
        }
    }

    a{
        text-decoration: none;
    }

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
        text-decoration: none !important;
        
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
            background-color #CF352E;
        }
        transform: scale(1.15);
        transition: 1s;
    }
`;


export default Navbars;