// src/App.js

import React from 'react';
import { ChakraProvider, Box, Text, VStack, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Iconic() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Text fontSize="2xl" mb={5} textAlign="center">ICONIC PRODUCTS SINCE 2018</Text>
        <Slider {...settings}>
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c468cb3b-ef87-42f3-9194-63e02dc15038.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/36a98905-9d4a-4c2b-a5e6-011da5e3c6b7.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/bbaa7887-4fba-45b2-bcbe-190242854239.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/5d9b0061-e36c-4ae4-80da-7ad099197e27.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9e14b2b8-285e-4963-890a-fa312f556970.jpg&w=1920&q=75" 
          />
        </Slider>
        
      </Box>
    </ChakraProvider>

    
    
  );
}

function DealCard({ title, imageUrl }) {
  return (
    <VStack 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      align="stretch"
      height="300px" // Adjust the height as needed
      width="450px"
    >
      <Image src={imageUrl} alt={title} boxSize="full" objectFit="cover" />
    </VStack>
  );
}

export default Iconic;
