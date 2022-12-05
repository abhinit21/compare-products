import React from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

// Other imports
import { Carousel } from "react-bootstrap";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";
import bannerimage from "assets/img/nfts/banner.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      bgImage={banner}
      bgSize="cover"
      py={{ base: "10px", md: "24px" }}
      px={{ base: "10px", md: "24px" }}
      borderRadius="30px"
    >
      <Carousel fade className="rounded-5">
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded-5"
            src={bannerimage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded-5"
            src={bannerimage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded-5"
            src={bannerimage}
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
