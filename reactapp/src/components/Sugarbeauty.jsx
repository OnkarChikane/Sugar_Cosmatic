// src/App.js

import React from 'react';
import { ChakraProvider, Box, Text, VStack, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Beauty() {
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
        <Text fontSize="2xl" mb={5} textAlign="center">SUGAR BEAUTY BLOG</Text>
        <Slider {...settings}>
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/79f6cb09-9676-4973-bfad-5812deec472c.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9e38f392-ad5f-47b2-8f1a-65f7b8f7d7b7.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/ba3ccda6-f7ef-4618-a20f-a25094a58de3.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/49a35e34-4f06-438f-8014-749205d5a8e1.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/eb5a172e-c1cb-419e-8077-0aa7f7db800c.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/fc980cbe-5c30-495b-9cf3-e5422ac59968.jpg&w=1920&q=75" 
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

export default Beauty;
