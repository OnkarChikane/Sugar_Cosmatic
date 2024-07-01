import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  HStack,
  Text,
  IconButton,
  Spacer,
  Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box bg="black" color="white" px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Text fontSize="sm">Use code: SUGAR15 to get 15% OFF on all orders!</Text>
        <HStack spacing={4}>
          <ChakraLink href="https://play.google.com/store/apps/details?id=com.app.sugarcosmetics&pcampaignid=web_share">GET APP</ChakraLink>
          <ChakraLink href="https://in.sugarcosmetics.com/stores">STORE</ChakraLink>
          <ChakraLink href="https://in.sugarcosmetics.com/gifts-makeup-kits/gift-cards">GIFT CARD</ChakraLink>
          <ChakraLink href="https://in.sugarcosmetics.com/pages/faqs">HELP</ChakraLink>
        </HStack>
      </Flex>
      <Flex mt={4} align="center">
        <Box fontSize="2xl" fontWeight="bold">
          <RouterLink to="/">
            <img src="https://in.sugarcosmetics.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNonCVLogoDesktop.86874a45.png&w=256&q=100" alt="" />
          </RouterLink>
        </Box>
        <Spacer />
        <Flex align="center" w="50%">
          <Input
            placeholder='Try "Liquid Lipstick"'
            borderRadius="full"
            bg="white"
            color="black"
            mr={2}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton
            icon={<SearchIcon />}
            borderRadius="full"
            bg="white"
            color="black"
            onClick={handleSearch}
          />
        </Flex>
        <Spacer />
        <HStack spacing={4}>
          <RouterLink to="/login">Login /</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
          <IconButton icon={<FaHeart />} bg="transparent" color="white" />
          <RouterLink to="/cart">
            <IconButton icon={<FaShoppingCart />} bg="transparent" color="white" />
          </RouterLink>
          <IconButton icon={<FaUser />} bg="transparent" color="white" />
        </HStack>
      </Flex>
      <Flex mt={4} justify="start" wrap="wrap">
        <RouterLink to="/sugarplay">
          <Box as="span" mx={5}>
            SUGAR PLAY
          </Box>
        </RouterLink>
        <RouterLink to="/lips">
          <Box as="span" mx={5}>
            LIPS
          </Box>
        </RouterLink>
        <RouterLink to="/eyes">
          <Box as="span" mx={5}>
            EYES
          </Box>
        </RouterLink>
        <RouterLink to="/face">
          <Box as="span" mx={5}>
            FACE
          </Box>
        </RouterLink>
        <RouterLink to="/nails">
          <Box as="span" mx={5}>
            NAILS
          </Box>
        </RouterLink>
        <RouterLink to="/skin">
          <Box as="span" mx={5}>
            SKINCARE
          </Box>
        </RouterLink>
        <RouterLink to="/accessories">
          <Box as="span" mx={5}>
            ACCESSORIES
          </Box>
        </RouterLink>
        <RouterLink to="/gifting">
          <Box as="span" mx={5}>
            GIFTING
          </Box>
        </RouterLink>
        <RouterLink to="/best">
          <Box as="span" mx={5}>
            BESTSELLERS
          </Box>
        </RouterLink>
        <RouterLink to="/launches">
          <Box as="span" mx={5}>
            NEW LAUNCHES
          </Box>
        </RouterLink>
        <RouterLink to="/offer">
          <Box as="span" mx={5}>
            OFFERS
          </Box>
        </RouterLink>
        <RouterLink to="/blog">
          <Box as="span" mx={5}>
            BLOG
          </Box>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Header;
