import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Text, Heading} from '@chakra-ui/react';

const Section5 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h={['800px','','','1000px']}>
                <Stack direction={['column','column','row','row']} spacing={['30px','','','180px']} justify='center'>
                    <Box pt={['30px','','','250px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section4.png" />
                        </Box>
                    </Box>
                    <Box pt={['','','','350px']}>
                        <Stack direction="column" spacing="30px">
                            <Box maxW="416px">
                                <Heading as="h2" size="lg">Shopping with no fees</Heading>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>Online shopping is flawed with all kind of fees. Currency exchange fees, processing fees and even fees for having multiple fees. Getting rid of them became our hobby. Same goes for ATM withdrawal fees.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>Enjoy your money globally. Every uncut part of it. ZEN goes beyond shopping with a fully functional account. Keep reading.</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section5
