import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Module imports
import {Carousel} from 'react-bootstrap';

// Assets
import banner from "assets/img/nfts/blue.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>
<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/cnu0m8re1exe/7bvBF6E4WXVLLIsH88lXcC/5a3b7483a82fb30248e7d1c7856be6ec/20-things-color.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Flex>
  );
}
