import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core';
import { SpeakerNotes, Person, EventNote, Twitter, Facebook, Instagram, Phone, Email } from '@material-ui/icons';
import Room from '@material-ui/icons/Room';
import {  tab } from "../../responsive";

// import { desktop, tab, promobile, mobile } from "../../responsive";




const Footer = () => {
    return (
        <SectionFooter >
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={3} xs={12}>
                        <FirstRightFooter>
                            <div className="boxfirstright">
                                <h2>
                                ABOUT US
                                </h2>
                                <h3>
                                Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia, there live the blind texts.
                                </h3>
                                <ul >
                                    <li>
                                    <Facebook />
                                    </li>
                                    <li>
                                    <Instagram />
                                    </li>
                                    <li>
                                    <Twitter />
                                    </li>
                                </ul>
                            </div>
                        </FirstRightFooter>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <SecondRightFooter>
                            <h2>
                            RECENT BLOG
                            </h2>
                            <div className="blockone">
                                <img   src="./image/ximage_1.jpg.pagespeed.ic.gzSMTAk4pE.webp"  alt="img..." />
                                <div  className="text">
                                    <div className="framtext" >
                                        <h3>
                                        Even the all-powerful Pointing has no control about
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="##">
                                                    <EventNote style={{width: '25px', color: '#bfbfbf'}}/>
                                                </a>
                                                <p>Sept 15, 2018</p>
                                            </li>
                                            <li>
                                                <a href="##">
                                                    <Person style={{width: '25px', color: '#bfbfbf'}} />
                                                </a>
                                                <p> Admin</p>
                                            </li>
                                            <li>
                                                <a href="##">
                                                    <SpeakerNotes style={{width: '25px', color: '#bfbfbf'}}/>
                                                </a>
                                                <p>19</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="blockone">
                                <img   src="./image/ximage_1.jpg.pagespeed.ic.gzSMTAk4pE.webp"  alt="img..." />
                                <div  className="text">
                                    <div className="framtext">
                                        <h3>
                                        Even the all-powerful Pointing has no control about
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="##">
                                                    <EventNote style={{width: '25px', color: '#bfbfbf'}}/>
                                                </a>
                                                <p>Sept 15, 2018</p>
                                            </li>
                                            <li>
                                                <a href="##">
                                                    <Person style={{width: '25px', color: '#bfbfbf'}} />
                                                </a>
                                                <p> Admin</p>
                                            </li>
                                            <li>
                                                <a href="##">
                                                    <SpeakerNotes style={{width: '25px', color: '#bfbfbf'}}/>
                                                </a>
                                                <p>19</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SecondRightFooter>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <CenterRightFooter>
                            <h2>
                                SERVICES
                            </h2>
                            <div className="centertext">
                                <ul >
                                    <li>
                                        <a href="##">
                                            Cooked
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                        Deliver
                                            </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                        Quality Foods
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                        Mixed
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </CenterRightFooter>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <LeftLeftFooter>
                            <h2>
                            HAVE A QUESTIONS?
                            </h2>
                            <div className="lefttext">
                                <ul>
                                    <li>
                                        <p><Room /></p>  
                                        <a href="##" >
                                        203 Fake St. Mountain View, San Francisco, California, USA
                                        </a>
                                    </li>
                                    <li>
                                        <p><Phone /></p>
                                        <a href="##">
                                        +2 392 3929 210
                                        </a>
                                    </li>
                                    <li>
                                        <p><Email /></p>
                                        <a href="##">
                                        info@yourdomain.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </LeftLeftFooter>
                    </Grid>
                </Grid>
            </Container>
        </SectionFooter>
    )
}

export default Footer
//styled-components
const SectionFooter = styled.div`
h2{
    font-size: 16px;
    font-weight: 400;
}
background: #120f0f;
color: white;
padding: 10% 0;
`;
const FirstRightFooter = styled.div`
.boxfirstright{
    h3{
        font-size: 16px;
        font-weight: 300;
        padding-top: 20px;
        cursor: pointer;
    }
    ul{
    display: flex;
    width: 100%;
    height:100px;
    align-items: end;
    ${tab({
        alignItems: 'center'
        })}

    li{
        margin-right: 15px;
        padding: 10px;
        background-color: black;
        border-radius: 50%;
        &:hover{
            background-color: #c39a62;
        }
    }
}
}
`;
const SecondRightFooter = styled.div`

.blockone{
        width: 100%;
        height: 80px;
        display: flex;
        margin-top: 20px;
    img{
        width: 100px;
        height: 100%;
    }
    .text{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .framtext{
            padding: 5px;
            margin-top: 10px;
            h3{
                color:  rgba(255, 255, 255, 0.9);
                font-size: 16px;
                font-weight: 300;
                cursor: pointer;
            &:hover{
                color: #c39a62 ;
            }
            }
            ul{
                display: flex;
                padding-top: 10px;
            li{
                display: flex;
                font-size: 12px;
                margin-right: 5px;
            }
            }
        }
    }
}
`;
const CenterRightFooter = styled.div`
    ${tab({
        padding: '5% 0'
        })}


.centertext{
    ul{
        li{
            margin-top: 15px !important;
            a{
                
                color:  rgba(255, 255, 255, 0.9);
                &:hover{
                    color: #c39a62;
                }

                }

            }
    }
}
`;
const LeftLeftFooter = styled.div`
    ul{
        li{
            margin-top: 15px !important;
            display: flex;


            a{
                margin-left: 20px;
                color:  rgba(255, 255, 255, 0.9);
            }
        }
    }

`;