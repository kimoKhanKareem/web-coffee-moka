import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import styled from "styled-components";
import { desktop, promobile } from "../../responsive";



export const Formsection = () => {
  return (
    <Main>
        <Grid container spacing={0}>
            <Grid item md={6} xs={12} >
                <Paper>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457436167!2d2.2769949080364835!3d48.85894658134878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2seg!4v1635006746356!5m2!1sen!2seg"
                            title="description"
                            width="100%"
                            height="450"
                            loading="lazy"
                        ></iframe>
                    </div>
                </Paper>
            </Grid>
                <Grid item md={6} xs={12}>
                <Paper style={{background:"transparent", border:0, boxShadow:"none"}}>
                    <Container>
                        <BookTable>
                            <div >
                                <h2 style={{color:"white"}}>Book a Table</h2>
                                <form  noValidate>
                                    <div> 
                                        <TextField 
                                        placeholder="Name" 
                                        InputLabelProps={{shrink: true}}
                                        color="#e3f2fd !important"
                                        />
                                        <TextField id="standard-basic"  placeholder="Last Name" InputLabelProps={{shrink: true}} />
                                    </div>
                                    <Secondbox>
                                        <TextField
                                        placeholder="Date"
                                        InputLabelProps={{shrink: true}}
                                        />
                                        <TextField
                                        defaultValue="2021-01-24"
                                        placeholder="Time" 
                                        type="time"
                                        InputLabelProps={{shrink: true}}
                                        />
                                        <TextField
                                        placeholder="Phone" 
                                        type="tel"
                                        InputLabelProps={{shrink: true}}
                                        />
                                    </Secondbox>
                                    <Lastbox>
                                        <div>
                                            <TextField
                                            placeholder="Massage" 
                                            type="massage"
                                            
                                            style={{width:"100%"}}
                                            InputLabelProps={{shrink: true}}
                                            />
                                        </div>
                                        <div>
                                            <Input  type="button" defaultValue="Appointment" className="py-3 px-4"  color="true"/>
                                        </div>
                                    </Lastbox>
                                </form>
                            </div>
                        </BookTable>
                    </Container>
                </Paper>
            </Grid>
        </Grid>
    </Main>
  );
};
export default Formsection;
//styled components
const Main = styled.div`
background-color: black;
`;
const TextField = styled.input`
    border-bottom: 1px solid white !important;
    border: none;
    background-color: transparent;
    margin: 10px 10px;
    width: 100%;
    height: 60px;
    color: white;
    outline: none;
`;
const BookTable = styled.div`
    display: flex;
    justify-content: center;
    margin: 10% 0;
    ${desktop({margin: "18% 0", padding: '0 10%'})}
`;
const Secondbox = styled.div`
display: flex;
${promobile({ display: 'block' })}
`;
const Lastbox = styled.div`
    display: flex;
    justify-content: space-between;
    ${promobile({ display: 'block' })}
`;
const Input = styled.input`
    margin-top: 10px;
    display: block;
    width: 200px;
    height: 60px;
    text-align: center;
    background-color: #c39a62;
    border-radius: 0;
    color: #000000 !important;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.4s;

    ${promobile({
    width: '100%',
    height: '60px',
    margin: '20px 0 0 10px'
    })}
     &:hover{
        background-color: transparent;
        border: 1px solid #c39a62;
        color: #c39a62 !important;
    } 
`;

