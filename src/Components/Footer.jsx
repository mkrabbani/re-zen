import React from 'react'
import {Box, ChakraProvider, Divider, Text, Stack, Image, Container, Heading, Link, Flex } from '@chakra-ui/react';


const Footer = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px">
                <Container maxW="1240px"><Divider/></Container>
                <Stack ml={['','','','70px']}>
                    <Box mb={10}>
                    <Flex
                    direction="row"
                    justify='left'
                    css={{
                        flexFlow: "row wrap"
                    }}
                    
                    >
                        <Box>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Learn</Heading>
                                <Stack direction="column" spacing="10px">
                                    <Link fontSize="sm">Help center</Link>
                                    <Link fontSize="sm">Join ZEN team</Link>
                                    <Link fontSize="sm">Privacy Policy</Link>
                                    <Link fontSize="sm">Cookies</Link>
                                    <Link fontSize="sm">Terms of use</Link>
                                </Stack>   
                        </Box>

                        <Box ml={['','','','50px']}>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Discover</Heading>
                                <Stack direction="column" spacing="10px">
                                    <Link fontSize="sm">Help center</Link>
                                    <Link fontSize="sm">Join ZEN team</Link>
                                    <Link fontSize="sm">Privacy Policy</Link>
                                </Stack>
                        </Box>

                        <Box ml={['','','','50px']}>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Offer</Heading>
                                <Stack direction="column" spacing="10px">
                                    <Link fontSize="sm">Help center</Link>
                                    <Link fontSize="sm">Join ZEN team</Link>
                                </Stack>
                        </Box>

                        <Box ml={['','','','50px']}>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Language</Heading>
                                <Stack direction="column" spacing="10px">
                                    <Link fontSize="sm">Help center</Link>
                                    <Link fontSize="sm">Join ZEN team</Link>
                                    <Link fontSize="sm">Privacy Policy</Link>
                                    <Link fontSize="sm">Cookies</Link>
                                    <Link fontSize="sm">Terms of use</Link>
                                </Stack>
                        </Box>

                        <Box ml={['','','','50px']}>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Follow us</Heading>
                            <Link><Image w="40px" ml="15px" name="Linkedin" src="in.png" /></Link>
                        </Box>

                        <Box ml={['','','','50px']}>
                            <Heading w={["150px"]} mb="30px" mt="30px" as="h4" size="sm">Contact</Heading>
                                <Stack direction="column"  spacing="10px">
                                    <Link fontSize="sm">hello@zen.com</Link>
                                </Stack>
                        </Box>
                    </Flex>

                    </Box>
                    <Box mb={10} >
                        <Stack direction={['column','column','row','row']} spacing={['','','','117px']}>
                            <Box>
                                <Image src="zen-zero-effort-grey.png" />
                                <Box maxW="900px" mt={5}>
                                    <Text fontSize="12px" color="#AAAAAA">ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries. Registration number of the company 304749651, VAT ID LT100011714916. License of electronic money institutions number LB000457. Share capital 2.185.000,00 EUR. Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Image maxW="175px" src="/pci-certificate-logo.png" mt={10} />
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Footer
