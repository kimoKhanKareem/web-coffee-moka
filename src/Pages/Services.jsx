import React from 'react'
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
import { desktop } from '../responsive';

const Services = () => {
    return (
        <>
            <Servicsection>
                <Image />
            </Servicsection>
            <Texcenter>
                <div>
                    <h1>Services</h1>
                    <ul>
                        <li>
                            <Link to="/"><span>Home</span></Link>
                        </li>
                        <li>
                            <p>Services</p>
                        </li>
                    </ul>
                </div>
            </Texcenter>
        </>
    )
}

export default Services;
//styled-components
const Servicsection = styled.div`
background-color: black;
`;
const Image = styled.div`
background-image: url(./image/xbg_1.jpg.pagespeed.ic.q3FmqSxDIf.webp);
width: 100%;
height: 750px;
${desktop({height: '910px'})}
background-position: center center;
background-attachment: fixed;
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