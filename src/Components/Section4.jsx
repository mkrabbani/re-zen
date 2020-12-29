import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Heading, Text, Link} from '@chakra-ui/react';
import './Style.css';

const Section4 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h={['900px','','','1000px']}>
                <Stack direction={['column','column','row','row']} spacing={['30px','','','130px']} justify='center'>
                    <Box className="order" pt={['30px','','','300px']}>
                        <Stack direction="column" spacing="30px">
                            <Box maxW="500px">
                                <Heading as="h2" size="lg">ZEN shopping Mastercard®</Heading>
                            </Box>
                            <Box maxW="470px" fontSize={['md','md','lg','lg']}>
                                <Text>You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.</Text>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <Link><Image src="/playappstore/apple-pay-mark.svg" /></Link>
                                    <Link><Image src="/playappstore/google-pay-mark.svg" /></Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="order" pt={['','','','150px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section3.png" />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section4
