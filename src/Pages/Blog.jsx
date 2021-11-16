import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {  desktop } from "../responsive";





const Blog = () => {
    return (
        <Sectionblog>
            <Backphoto>
                <Image />
            </Backphoto>
            <Texcenter>
                <div>
                    <h1>Blog</h1>
                    <ul>
                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <p>Blog</p>
                        </li>
                    </ul>
                </div>
            </Texcenter>
        </Sectionblog>
    )
}

export default Blog;
//styled-components
const Sectionblog = styled.div`
background-color: black;
`;
const Backphoto = styled.div`
height: 750px;
${desktop({height: '1000px'})}
`;
const Image = styled.div`
background-image: url(./image/xbg_2.jpg.pagespeed.ic.MyjXZaMk8H.webp);
width: 100%;
height: 100%;
background-position: center center;
background-size: cover;
filter: brightness(0.6);
position: relative;
`;
const Texcenter = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
div{
    h1{
        color: white;
        font-size: 70px;
    }
        ul{
            width:100%;
            display: flex;
            justify-content: center;
            li{
                margin: 0 6px;
                color: #cecece;
                font-size: 18px;

                span{
                    color: white;
                }
                p{
                    cursor: pointer;
                }
            }
        }
}
`;