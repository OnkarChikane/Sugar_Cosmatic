import React, { useState } from "react";
import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";

export const Makeupkit = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F608325285-summer-makeup-kit-wbgkv.jpg%3Fv%3D1713800413&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F615668847-mothers-day-kit-wbg-1.jpg%3Fv%3D1715355385&w=256&q=75",
      additional: "Lipstick-03 The...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F537282461-maximeyes-mat-value-set-wbg3.jpg%3Fv%3D1694619990&w=256&q=75",
      additional: "Lipstick-04 Maroon Vibe....",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F549928439-main-img.jpg%3Fv%3D1698248481&w=256&q=75",
      additional: "Lipstick-01 Scarelett O'Har...",
      price: "849₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F611850923-wbg1.jpg%3Fv%3D1714405190&w=256&q=75",
      additional: "Lipstick-07 Viola (Mauve...",
      price: "849₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg%3Fv%3D1649865681&w=256&q=75",
      additional: "Lipstick-01 BoldPlay...",
      price: "749₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_73e85cb4-80d8-4eeb-ba32-deaf11c4483f.jpg%3Fv%3D1658851292&w=256&q=75",
      additional: "Lipstick-08 Draft Pink(Dee....",
      price: "749₹",
      brand: "Matte As hell Crayon"
    },
    {
        image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_73e85cb4-80d8-4eeb-ba32-deaf11c4483f.jpg%3Fv%3D1658851292&w=256&q=75",
        additional: "Lipstick-08 Draft Pink(Dee....",
        price: "749₹",
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
      <Text fontSize="2xl" mb={5} textAlign="center" color="Black" fontWeight="bold">MAKEUP KITS & COMBOS</Text>

      
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
