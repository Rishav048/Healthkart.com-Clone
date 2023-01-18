import { Box, Button, Flex, GridItem, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import NutriBest from "./NutriBest.jpeg";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import apple from "./Apple.png";
import google from "./google.png";

const Footer2 = () => {
  return (
    <Flex flexDirection="column" bg="#0d2122" width="100%" height="600px" alignItems='center' textAlign="left">
        {/* <Box  w='15%' h='100%'> */}
            <Image src={NutriBest} alt="NutriBest" width='200' height='40'/>
        {/* </Box> */}
        <SimpleGrid columns={[2, null, 6]} w="80%" h="60%" gap={6}  color="white"  marginTop="10">
            <GridItem >
                <VStack fontSize='14px' padding="5" >
                    <Heading as="h6" fontSize="md">HealthKart</Heading>
                    <Text>About Us</Text>
                    <Text>Contact Us</Text>
                    <Text>Refer & Earn</Text>
                    <Text>Loyalty Program</Text>
                    <Text>HK Consult</Text>
                    <Text>Blogs, Videos & More</Text>
                    <Text>Brand Directory</Text>
                    <Text>Careers</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md">Brands</Heading>
                    <Text>MuscleBlaze</Text>
                    <Text>Fit Foods</Text>
                    <Text>HK Vitals</Text>
                    <Text>TrueBasics</Text>
                    <Text>Gritzo</Text>
                    <Text>bGREEN</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md">Health & Fitness</Heading>
                    <Text>Bodybuilding</Text>
                    <Text>Hair & Skin Care</Text>
                    <Text>Sports Nutrition</Text>
                    <Text>Vitamins & Supplements</Text>
                    <Text>Ayurveda & Herbs</Text>
                    <Text>Health Food & Drinks</Text>
                    <Text>Fitness</Text>
                    <Text>Wellness</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md">Quick Links</Heading>
                    <Text>My Account</Text>
                    <Text>Track Your Order</Text>
                    <Text>Store Locator</Text>
                    <Text>HK Cash</Text>
                    <Text>HK Consult</Text>
                    <Text>HK Coupons</Text>
                    <Text>FAQs</Text>
                    <Text>Sell On HealthKart</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5" >
                    <Heading as="h6" fontSize="md">Contact Us</Heading>
                    <Flex gap="2">
                        <GrMail />
                        <Text>care@healthkart.com</Text>
                    </Flex>
                    <Flex gap="2">
                        <BsFillTelephoneFill />
                        <Text>0124-4616444</Text>
                    </Flex>
                    <Flex gap="2">
                        <MdLocationPin size="2xl"/>
                        <Text>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</Text>
                    </Flex>    
                    {/* <Button border="none" background="none" fontSize='14px' leftIcon={<GrMail />}>care@healthkart.com</Button>
                    <Button border="none" background="none" fontSize='14px' leftIcon={<BsFillTelephoneFill />}>0124-4616444</Button>
                    <Button w="10" border="none" background="none" fontSize='14px' leftIcon={<HiLocationMarker />}>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</Button> */}
                </VStack>
            </GridItem>
            <GridItem >
                    <Image src={apple} alt="apple" width="200" ></Image>
                    <Image src={google} alt="google" width="190" ></Image>
            </GridItem>
        </SimpleGrid>
    </Flex>
  )
}

export default Footer2