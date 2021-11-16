import React from 'react'
import Imgsliders from '../Components/Imgslider/Imgsliders'
import OurStory from '../Components/OurStory/OurStory';
import Gallery from '../Components/Gallery/Gallery';
import Formsection  from '../Components/Formsection/Formsection';
import FtcoSection from '../Components/FtcoSection/FtcoSection';
import Coffeesellers from '../Components/Coffeesellers/Coffeesellers';
import Ourproduct from '../Components/productOur/Ourproduct';
import styled from "styled-components"

const Home = () => {
    return (
        <Backgroundsection>
           <Imgsliders />
           <OurStory />
           <Gallery />
           <FtcoSection />
           <Coffeesellers />
           <Ourproduct />
           <Formsection />
        </Backgroundsection>
    )
}

export default Home;
//styled-components
const Backgroundsection = styled.div`
background-color: black;
`;