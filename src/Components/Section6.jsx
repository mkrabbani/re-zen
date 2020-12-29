import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Heading, Text} from '@chakra-ui/react';
import './Style.css'

const Section6 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h={['900px','','','1000px']}>
                <Stack direction={['column','column','row','row']} spacing={['30px','','','185px']} justify='center'>
                    <Box className="order" pt={['30px','','','350px']}>
                        <Stack direction="column" spacing="30px">
                            <Box maxW="416px">
                                <Heading as="h2" size="lg">One app, one account, many currencies</Heading>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>ZEN Mastercard® was made for spending money. ZEN account is here to store and manage it peacefully, from the inside of your pocket.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>You can use it just like a regular account, as it has its own IBAN and works just the way any bank account would — but better. Store up to 30 currencies and transfer them easily in many ways.</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="order" pt={['','','','200px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section5.png" />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section6
