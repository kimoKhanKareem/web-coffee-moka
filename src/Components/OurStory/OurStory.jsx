import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";


const OurStory = () => {
    return (
    <StoryOur>
        <UpBackground>
            <Grid container spacing={0}>
                <Grid item md={6} xs={12}>
                    <Paper>
                        <img 
                        src="./image/xabout.jpg.pagespeed.ic.1CZ91rANlw.webp"
                        alt="img..."
                        />
                    </Paper>
                </Grid>
                <Grid item  md={4}  xs={12}>
                    <Paper className="kingbox">
                        <BoxSection>
                            <div>
                                <span>Discover</span>
                                    <h2>OURSTORY</h2>
                                <p>
                                    On her way she met a copy. The copy warned the Little Blind Text,
                                    that where it came from it would have been rewritten a thousand times and everything that was left from its
                                    origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                                    But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed
                                    her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                                </p>
                            </div>
                        </BoxSection>
                    </Paper>
                </Grid>
            </Grid>
        </UpBackground>
    </StoryOur>
    )
}

export default OurStory;
//Styled Component
const StoryOur = styled.div`
    overflow: hidden;
    height: 549px;
    background-image: url(./image/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp);
`;
const UpBackground = styled.div`
    .kingbox{
        background-color: transparent !important;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }
    img{
        height: 550px;  
    }
`;
  const BoxSection = styled.div`
  margin-left: -20%;
    div{
        padding: 10%;
        background-color: rgba(0, 0, 0, 0.5);
        span{
            color: #c39a62;
            font-size: 50px;
            font-family: "Great Vibes";  
          }
          h2{
            color: white;
            font-size: 40px;
            font-family: "Josefin Sans";
            font-weight: 700;
            position: relative;
            top: -19px;  
          } 
          p{
            color: gray;
            line-height: 1.5rem;
            font-family: 'Poppins';
            font-size: 13px;
            font-weight: 300;
          }    
    }
  `;
  //background-image: url(/image/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp);