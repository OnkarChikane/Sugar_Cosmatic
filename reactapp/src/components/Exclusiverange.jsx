import React, { useState } from "react";
import { Box, Button, Flex, Grid, Text, Image } from "@chakra-ui/react";

export const ExclusiveRange = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F599125845-01.jpg%3Fv%3D1711208074&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FParent-01.jpg%3Fv%3D1691768624&w=256&q=75",
      additional: "Lipstick-03 The...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_0d43e9a7-af34-4fb9-a43b-eda429d7139a.jpg%3Fv%3D1711208170&w=256&q=75",
      additional: "Lipstick-04 Maroon Vibe....",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F526522653-01.jpg%3Fv%3D1691768822&w=256&q=75",
      additional: "Lipstick-01 Scarelett O'Har...",
      price: "849₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F526522653-01.jpg%3Fv%3D1691768822&w=256&q=75",
      additional: "Lipstick-07 Viola (Mauve...",
      price: "849₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_45924703-8e57-4fc3-93a2-b07c06491d27.jpg%3Fv%3D1692719159&w=256&q=75",
      additional: "Lipstick-01 BoldPlay...",
      price: "749₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F526525769-01.jpg%3Fv%3D1691768679&w=256&q=75",
      additional: "Lipstick-08 Draft Pink(Dee....",
      price: "749₹",
      brand: "Matte As hell Crayon"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F530148597-01_0ff14f22-171a-4fcc-adc6-0e9fd3743420.jpg%3Fv%3D1692719138&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FBaseOfGloryPoreMinimizingPrimerPDPimages1copy.jpg%3Fv%3D1682956017&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
    },
    {
      image: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG2_aed576d3-066c-42e7-b45b-ecdefb75ad5f.jpg%3Fv%3D1708867229&w=256&q=75",
      additional: "Lipstick-05 Tan Halen...",
      price: "749₹",
      brand: "Transfer Proof Lipstick"
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
      <Text fontSize="2xl" mb={5} textAlign="center" color="Black" fontWeight="bold">EXCLUSIVE RANGE LAUNCH</Text>

      
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
