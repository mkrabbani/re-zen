import React from 'react'
import {Box, Divider} from '@chakra-ui/react';
import Headline from './Components/Headline';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import NavBar from './Components/Navbar/Header';
import Footer from './Components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './Components/Style.css';


const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>ZEN.COM - Peaceful shopping. Mindful money.</title>
                </Helmet>
                <Box fontFamily="'Open Sans', sans-serif;">
                    <Box pl={['','','','330px']} pr={['','','','330px']} className="stickynavbar">
                        <NavBar />
                    </Box>
                    <Box className="line">
                        <Divider  />
                    </Box>
                    <Headline />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Footer />
                </Box>
            </div>
        </HelmetProvider>
    )
}

export default Home
