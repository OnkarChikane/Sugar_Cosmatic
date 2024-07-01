import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fca70aa44-2284-49d1-9763-6f8fd96ca785.gif&w=1920&q=100',
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F84cc5fb1-03ba-41a9-8b66-1779a17781d5.jpg&w=1920&q=100',
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc2045ec3-838d-4805-a5f5-b04adb7caca6.jpg&w=1920&q=100',
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fed482272-4a25-46a7-8708-2106336325db.gif&w=1920&q=100',
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc9338a50-6c37-4846-b34d-410b9ec52a49.jpg&w=1920&q=100',
  'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F84cc5fb1-03ba-41a9-8b66-1779a17781d5.jpg&w=1920&q=100',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <Flex>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            display={index === currentIndex ? 'block' : 'none'}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        ))}
      </Flex>
      <IconButton
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        aria-label="Previous Slide"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        aria-label="Next Slide"
      />
    </Box>
  );
};

export default Carousel;
