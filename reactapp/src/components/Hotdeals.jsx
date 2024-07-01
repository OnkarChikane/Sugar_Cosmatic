// src/App.js

import "../Styles/Hotdeals.css";
import { useRef } from 'react';
import { Box, Text, VStack, Image, Button } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for the buttons

function HotDeals() {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5} textAlign="center">HOT DEALS</Text>
      <Slider ref={sliderRef} {...settings}>
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/426e9493-c9d6-48b1-b7fa-a933449bc43b.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://d32baadbbpueqt.cloudfront.net/Homepage/62c1e380-d07b-4dfb-bee2-d6321730d79b.gif" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
        <DealCard 
          imageUrl="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9ad4e10a-9491-49ca-a2e9-d517bc08fbf6.jpg&w=1920&q=75" 
        />
      </Slider>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button onClick={handlePrevSlide} mr={2} bg="black" color="white" borderRadius="full" p={0} w={8} h={8}>
          <FaChevronLeft />
        </Button>
        <Button onClick={handleNextSlide} bg="black" color="white" borderRadius="full" p={0} w={8} h={8}>
          <FaChevronRight />
        </Button>
      </Box>
    </Box>
  );
}

function DealCard({ title, imageUrl }) {
  return (
    <VStack 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      align="stretch"
      height="300px" 
      width="450px"
    >
      <Image src={imageUrl} alt={title} boxSize="full" objectFit="cover"/>
    </VStack>
  );
}

export default HotDeals;

