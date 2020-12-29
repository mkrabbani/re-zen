import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Heading, Text} from '@chakra-ui/react';


const Section1 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h={['900px','','','1000px']}>
                <Stack direction={['column','column','row','row']} spacing={['','','','205px']} justify='center'>
                    <Box pt={['30px','','','150px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section1.png" />
                        </Box>
                    </Box>
                    <Box pt={['30px','','','370px']}>
                        <Stack direction="column" spacing="30px">
                            <Box maxW="416px">
                                <Heading as="h2" size="lg">1-year warranty boost</Heading>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text >ZEN cards have a very neat feature that will help you  whenever your electronic devices start failing after the  standard warranty ends, which is pretty common.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>When you buy any electronics with your ZEN shopping  Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section1
