import React, { useState } from "react";
import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";

export const Skincare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg%3Fv%3D1619155723&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FCoffee-culture-cleansing-balm-stick-01.jpg%3Fv%3D1643375707&w=256&q=75",
      additional: "Lipstick-03 The...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_fbfc437e-feca-4554-b884-2c5c092ad3b9.jpg%3Fv%3D1682956204&w=256&q=75",
      additional: "Lipstick-04 Maroon Vibe....",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FHyaluronic-Serum-3_1.jpg%3Fv%3D1626423730&w=256&q=75",
      additional: "Lipstick-01 Scarelett O'Har...",
      price: "849₹",
      brand: "Matte As hell Crayon"
    },
    {
        image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg%3Fv%3D1619155723&w=256&q=75",
        additional: "Lipstick-05 Tan Halen...",
        price: "749₹",
        brand: "Transfer Proof Lipstick"
      },
      {
        image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FCoffee-culture-cleansing-balm-stick-01.jpg%3Fv%3D1643375707&w=256&q=75",
        additional: "Lipstick-03 The...",
        price: "749₹",
        brand: "Transfer Proof Lipstick"
      },
      {
        image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_fbfc437e-feca-4554-b884-2c5c092ad3b9.jpg%3Fv%3D1682956204&w=256&q=75",
        additional: "Lipstick-04 Maroon Vibe....",
        price: "749₹",
        brand: "Transfer Proof Lipstick"
      },
      {
        image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FHyaluronic-Serum-3_1.jpg%3Fv%3D1626423730&w=256&q=75",
        additional: "Lipstick-01 Scarelett O'Har...",
        price: "849₹",
        brand: "Matte As hell Crayon"
      },
  ];

  const slidesCount = Math.ceil(slides.length / 4); // Calculate total number of slides

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slidesCount) % slidesCount);
  };

  // Calculate which products to display based on current slide
  const startIndex = currentSlide * 4;
  const visibleProducts = slides.slice(startIndex, startIndex + 4);

  const addToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to add the product to the cart
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" height="70vh" bg="gray.100" p={5}>
      <Text fontSize="2xl" mb={5} textAlign="center" color="Black" fontWeight="bold">SKINCARE BASICS</Text>

      
      <Flex justifyContent="space-between" width="100%" alignItems="center">
       
        
      <Button onClick={prevSlide} mb={4} colorScheme="purple" variant="outline">
          &lt;
        </Button>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} width="100%">

        {visibleProducts.map((product, index) => (
          <Box key={index} className="carousel" textAlign="center" boxShadow="md" p={4} borderRadius="md" bg="white">

            <Image src={product.image} alt={product.additional} width="100%" height="200px" objectFit="cover" mb={4} borderRadius="md" />
            <Text fontWeight="bold" color="purple.600">{product.brand}</Text>
            <Text color="gray.600">{product.additional}</Text>
            <Text color="gray.800">{product.price}</Text>
            <Button mt={4} onClick={() => addToCart(product)} colorScheme="purple">
              ADD TO BAG
            </Button>
          </Box>
        ))}
           
      </Grid>
           
      
      <Button onClick={nextSlide} mb={4} colorScheme="purple" variant="outline">
          &gt;
        </Button>
      </Flex>
      

    </Flex>
  );
};
