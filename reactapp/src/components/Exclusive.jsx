// src/App.js

import React from 'react';
import { ChakraProvider, Box, Text, VStack, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Exclusive() {
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
        <Text fontSize="2xl" mb={5} textAlign="center">EXCLUSIVE COMBO LAUNCHES</Text>
        <Slider {...settings}>
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/19422fc5-c94e-4fdb-b4e6-4c81df6f086a.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/19b5023a-ae1a-4eb8-a432-3ec1ace05d6d.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/1421acaf-4dfd-49a4-acc6-a490bc47b771.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/1dc87a35-6794-42e7-bb9c-269874a4e4ea.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/1421acaf-4dfd-49a4-acc6-a490bc47b771.jpg&w=1920&q=75" 
          />
          <DealCard 
            imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/1dc87a35-6794-42e7-bb9c-269874a4e4ea.jpg&w=1920&q=75" 
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

export default Exclusive;
