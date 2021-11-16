import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { AccountCircle, Reorder, ShoppingCart } from '@material-ui/icons';
import { tab } from "../../responsive";



const Navbar = () => {

    const[ openLinks , setOpenLinks ] = useState(false);
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth)
    const toggleNavbar = () => {
        setOpenLinks( ! openLinks );
    };
    useEffect(() => {
        const changeWidth = ()=>{
            setScreenWidth(window.innerWidth);
        }
         window.addEventListener('resize', changeWidth)
    }, [])

    return (
            <Nav>
                <Toolbar  style={{ justifyContent:"space-between"}} >
                    <StyledLink to="/">
                        <Logo>Moka Coffee</Logo>
                    </StyledLink>
                    {(openLinks || screenWidth > 768) && (
                        <RightDiv>
                            <StyledLink  to="/"><span>HOME</span></StyledLink>
                            <StyledLink to="/MENU"><span>MENU</span></StyledLink>
                            <StyledLink to="/SERVICES"><span>SERVICES</span></StyledLink>
                            <StyledLink to="/BLOG"><span>BLOG</span></StyledLink>
                            <StyledLink to="/SHOP"><span>SHOP</span></StyledLink>
                            <StyledLink to="/ABOUT"><span>ABOUT</span></StyledLink>
                            <StyledLink to="#"><span>CONTENT</span></StyledLink>
                        </RightDiv>
                     )}
                    <LeftDiv>
                        <Link to="#">
                            <span><ShoppingCart style={{ fontSize: 30 }} /></span>
                        </Link>
                        <Link to="#">
                            <span><AccountCircle style={{ fontSize: 30 }} /></span>
                        </Link>
                        <button onClick={toggleNavbar}><Reorder /></button>
                    </LeftDiv>
                </Toolbar>
            </Nav>
    )
}
export default Navbar;

//styled Components
const Nav = styled(AppBar)`
background-color: transparent !important;
width:100%;
${tab({backgroundColor: 'black !important'})}
`;
const Logo = styled.h2`
font-size: 22px;
color: white;
font-weight: 300;
margin: 0px !important;
`;
const RightDiv = styled.div`
display: flex;
${tab({
    flexDirection: "column",
    position: "absolute",
    left: 0,
    top: '43px',
    backgroundColor: 'black !important',
    width: '100%',
    padding: '20px 0px',
})}
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        span:after {
            opacity: 1;
            width: 100%;
            transition: all 0.4s;
            background-color: #c39a62;
        }
    }    
    span{
        color: white !important;
        margin-left: 30px;
        font-size: 13px;
        font-weight: 400;
        font-family: 'Poppins';
        position: relative;    
            &:after {
                position: absolute;
                content: '';
                height: 2px;
                width: 0;
                left: 0px;
                right: 0;
                bottom: -9px;
                background-color: white;
                opacity: 1;
                transition: all 0.4s;
            }
    }
    ${tab({margin: '10px 0', fontSize: '15px'})}
`;
const LeftDiv = styled.div`
display: flex;
align-items: center;
    span{
        margin-left: 15px;
        color: white;
    }
    button{
        cursor: pointer;
        display: none;
        margin-left: 15px;
        background-color: transparent;
        border: 0;
        color: white;
          @media (max-width: 768px) {
              display: block;
          }
    }
`;