// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import Footer from './components/Footer';


ReactDOM.render(
  <ChakraProvider>
     
    <App />
    <Footer/>
  </ChakraProvider>,
  document.getElementById('root')
);
