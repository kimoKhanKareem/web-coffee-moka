import { Grid, Paper, Container } from '@material-ui/core'
import React from 'react'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HighQualityIcon from '@material-ui/icons/HighQuality';
import styled from 'styled-components';
import {tab} from "../../responsive";





const FtcoSection = () => {
    return (
        <SectionContainer>
            <Container>
                <GridSe container spacing={4} >
                    <Grid item md={3} xs={10} >
                        <PaparBox>
                            <div>
                                <span><BorderColorIcon /></span> 
                            </div>
                            <div className="textdata">
                                <h3>
                                    EASY TO ORDER
                                </h3>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it
                                    is an almost unorthographic.
                                </p>
                            </div>
                        </PaparBox>
                    </Grid>
                    <Grid item md={3} xs={10}>
                        <PaparBox>
                            <div>
                                <span><AllInboxIcon /></span> 
                            </div>
                            <div className="textdata">
                                <h3>
                                    FASTEST DELIVERY
                                </h3>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it
                                    is an almost unorthographic.
                                </p>
                            </div>
                        </PaparBox>
                    </Grid>
                    <Grid item md={3} xs={10}>
                        <PaparBox>
                            <div>
                                <span><HighQualityIcon /></span> 
                            </div>
                            <div className="textdata">
                                <h3>
                                    QUALITY COFFEE
                                </h3>
                                <p>
                                    Even the all-powerful Pointing has no control about the blind texts it
                                    is an almost unorthographic.
                                </p>
                            </div>
                        </PaparBox>
                    </Grid>
                </GridSe>
            </Container>
        </SectionContainer>
    )
}
export default FtcoSection
//styled Components
const SectionContainer = styled.div`
padding: 10% 0;
background-color: #c49b63;
${tab({
    paddindTop: '15%'
})}
`;
const GridSe = styled(Grid)`
width: 100%;
display: flex ;
justify-content: center;
`;
const PaparBox = styled(Paper)`
background-color: transparent !important;
box-shadow: none !important;
div{
    text-align: center;
    position: relative;
    span{  
        &:after{
            content: "";
            position: absolute;
            width: 70px;
            height: 70px;
            left: 50%;
            top: 50%;
            transform: translate(-50% , -50%);
            border: 1px solid #1d150b;
        }
    }
}
.textdata{
    margin-top: 27px;
}
h3{
    padding-top: 18px;
    font-family: 'Josefin Sans';
    font-weight: 400;
}
p{
    font-family: 'Poppins';
    color: #1d150b;
    font-size: 15px;
    font-weight: 300;
    margin-top: 10px;
}
`;