import styled from "styled-components";
import { Card,CardActionArea,Typography,CardContent,CardMedia,Container,Grid,Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import axios from "axios";
import { useEffect, useState } from "react";


const Shop = () => {
  const [ section, setSection ] = useState([])
  useEffect(()=>{
    axios.get('js/data.json').then(res =>{setSection(res.data.works)})
  },[])

  const workData = section.map((sectionItem) => {
    return(
        <Grid  key={sectionItem.id}  item md={3} sm={6} xs={12} >
        <PAPER>
          <CARD>
            <CardActionArea>
              <Imges image={sectionItem.image} title="image..." />
            </CardActionArea>
            <CardContent>
              <BigText gutterBottom>{sectionItem.title}</BigText>
              <SmallText gutterBottom>
                {sectionItem.body}
              </SmallText>
              <SpanPrice gutterBottom>$ {sectionItem.price} </SpanPrice>
              <AdATOCart startIcon={<PlaylistAddIcon />} >
                Add One
              </AdATOCart>
            </CardContent>
          </CARD>
        </PAPER>
      </Grid>
    )
  })
  return (
    <Section>
      <Container style={{padding: '10% 0'}}>
        <Grid container spacing={0} justifyContent="center" >
          <Grid item md={6} sm={12} xs={12}>
            <Text>
              <Span>Discover</Span>
              <Best>BEST COFFEE SELLERS</Best>
              <Far>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Far>
            </Text>
          </Grid>
        </Grid>
        {/*------
                cart
                --------*/}
        <AllCartColumn>
          <Grid container spacing={4}>
            {workData}
          </Grid>
        </AllCartColumn>
      </Container>
    </Section>
  );
};

export default Shop;

//styled-components
const Section = styled.div`
background-color: black;
`;
const Text = styled.div`
  position: relative;
  text-align: center;
`;
const Span = styled.span`
  color: #c39a62;
  font-size: 50px;
  font-family: "Great Vibes";
`;
const Best = styled.h2`
  color: white;
  font-size: 40px;
  font-family: "Josefin Sans";
  font-weight: 700;
  position: relative;
  top: -19px;
`;
const Far = styled.p`
  color: white;
  font-family: "Poppins";
  font-size: 15px;
  font-weight: 300;
  color: rgb(128, 128, 128);
`;
//Grid add to cart
const AllCartColumn = styled.div`
  margin-top: 5%;
`;
const Imges = styled(CardMedia)`
  height: 220px;
  background-position: center center;
`;
const PAPER = styled(Paper)`
  background-color: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
`;
const CARD = styled(Card)`
  background-color: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  border-radius: 0 !important;

  text-align: center;
`;
const BigText = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important ;
  color: white;
  font-family: "Josefin Sans" !important;
`;
const SmallText = styled(Typography)`
  font-size: 15px !important;
  font-weight: 300;
  color: rgb(128, 128, 128);
  font-family: "Poppins" !important;
`;
const AdATOCart = styled(Button)`
  background-color: transparent !important;
  border-radius: 0 !important;
  border: 1px solid #c39a62 !important;
  color: #c39a62 !important;
  font-weight: 400 !important ;
  font-size: 13px !important;
  padding: 10px 20px !important;
  margin-top: 10px !important;
  &:hover {
    background-color: #c39a62 !important;
    color: white !important;
  }
`;
const SpanPrice = styled.p`
  color: white;
  font-weight: 300;
  font-size: 18px;
  font-family: "Poppins";
`;
