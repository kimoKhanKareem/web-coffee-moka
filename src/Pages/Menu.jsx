import React from 'react';
import   { Tabs, Tab, Card, Button, CardImg }    from 'react-bootstrap';
import  { Container, Grid, Paper }  from  "@material-ui/core";
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';




const Menu = () => {
const [state, setState]= useState([])
useEffect(()=>{
    axios.get("js/data.json").then(res=>{setState(res.data.tabssectionone)})
},[])
const returndatajson = state.map((stateItem)=>{
return(
    <Grid key={stateItem.id} item md={4} xs={12}>
        <Paperses>
            <Cards >
                <Images>
                    <CardImg  variant="top" src={stateItem.image}/>
                </Images>
                <CardBody>
                    <CardTitle>{stateItem.title}</CardTitle>
                    <CardText>
                        {stateItem.body}
                    </CardText>
                    <SpanPrice gutterBottom>$5.90</SpanPrice>
                    <AdATOCart >
                        Add One
                    </AdATOCart>
                </CardBody>
            </Cards>
        </Paperses>
    </Grid>
)})
const [stow, setStow]= useState([])
useEffect(()=>{
    axios.get("js/data.json").then(res=>(setStow(res.data.tabssectiontow)))
}, [])
const  returndatajsontow = stow.map((stowItem)=>{
    return(
        <Grid key={stowItem.id} item md={4} xs={12}>
            <Paperses>
                <Cards>
                    <Images>
                        <CardImg  variant="top" src={stowItem.image}/>
                    </Images>
                    <CardBody className="text-centert">
                        <CardTitle>{stowItem.title}</CardTitle>
                        <CardText>
                            {stowItem.body}
                        </CardText>
                        <SpanPrice gutterBottom>$5.90</SpanPrice>
                        <AdATOCart >
                            Add One
                        </AdATOCart>
                    </CardBody>
                </Cards>
            </Paperses>
        </Grid>
    )
})
const [ tabssectionthr, settabssectionthr] = useState([])
useEffect(() => {
    axios.get("js/data.json").then(res=>(settabssectionthr(res.data.tabssectionthree)))
}, [])
const returndatajsonthee = tabssectionthr.map((threeItem)=>{
    return(
    <Grid key={threeItem.id} item md={4} xs={12}>
        <Paperses>
            <Cards>
                <Images>
                    <CardImg  variant="top" src={threeItem.image}/>
                </Images>
                <CardBody>
                    <CardTitle>{threeItem.title}</CardTitle>
                    <CardText>
                        {threeItem.body}
                    </CardText>
                    <SpanPrice gutterBottom>$5.90</SpanPrice>
                    <AdATOCart>
                        Add One
                    </AdATOCart>
                </CardBody>
            </Cards>
        </Paperses>
    </Grid>
    )
})
return (
    <SectionCO>
        <Container>
            <BlocTabs>
                <Tabimagedata   id="uncontrolled-tab-example" className="mb-3">
                    <Tab  eventKey="Main Dish" title="Home">
                        <Grid container spacing={2}>
                            {returndatajson}
                        </Grid>
                    </Tab>
                    <Tab eventKey="Drinks" title="Profile">
                        <Grid container spacing={2}>
                            {returndatajsontow}
                        </Grid>
                    </Tab>
                    <Tab eventKey="Desserts" title="Contact">
                        <Grid container spacing={2}>
                            {returndatajsonthee}
                        </Grid>
                    </Tab>
                </Tabimagedata>
            </BlocTabs>
        </Container>
    </SectionCO>
)}

export default Menu
//styled component
const SectionCO = styled.div`
background-image: url(./image/xbg_4.jpg.pagespeed.ic.jZaRfvTz2Z.webp);
`;
const BlocTabs = styled.div`
padding: 10% 0;
`;
const Images = styled.div`
height: 250px;
background-size: center;
background-image: center center !important;
background-position: center !important;
overflow: hidden;
`;
const Tabimagedata = styled(Tabs)`
display: flex;
justify-content: center;
border: none;
button{
    border-bottom: 2px solid white !important;
    margin-left: 10px !important;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Poppins';
    color: #c39a62;
    &:hover{
        color: #c39a62;
        background-color: white; 
        border-radius: 0 !important;
    }
}
`;
const Paperses = styled(Paper)`
    margin-top: 10%;
    box-shadow: none !important;
    background-color: transparent !important;
`;
const Cards = styled(Card)`
border: none;
background-color: transparent !important;
`;
const CardBody = styled(Card.Body)`
text-align: center;
`;
const AdATOCart = styled(Button)`
  background-color: transparent !important;
  border-radius: 0 !important;
  border: 1px solid #c39a62 !important;
  color: #c39a62 !important;
  font-weight: 400 !important ;
  font-size: 13px !important;
  padding: 10px 20px !important;
  text-transform: uppercase;
  &:hover {
    background-color: #c39a62 !important;
    color: white !important;
  }
`;
const SpanPrice = styled.p`
  font-weight: 300;
  font-size: 18px;
  font-family: "Poppins";
  color: white;
`;
const CardTitle = styled(Card.Title)`
  font-size: 25px !important;
  font-weight: 400 !important ;
  font-family: "Josefin Sans" !important;
  color: white;
`;
const CardText = styled(Card.Text)`
font-size: 15px !important;
font-weight: 300;
color: rgb(128, 128, 128);
font-family: "Poppins" !important;
`;


