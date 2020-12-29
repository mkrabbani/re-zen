import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Text, Heading, Link} from '@chakra-ui/react';
import './Style.css';

const Headline = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h={['800px','','','1000px']}>
                <Stack direction={['column','column','row','row']} spacing={['','','','190px']} justify='center'>
                    <Box className="order" pt={['30px','','','300px']}>
                        <Stack direction="column" spacing="30px">
                            <Box>
                                <Stack direction="row">
                                    <Box><Link><Image width="30px" src="/Play.png" /></Link></Box>
                                    <Box pt="5px"><Text fontWeight="semibold">In every beginning, there is chaos.</Text></Box>
                                </Stack>
                            </Box>
                            <Box maxW="400px">
                                <Heading>Peaceful shopping. Mindful money.</Heading>
                            </Box>
                            <Box maxW="400px">
                                <Text fontSize={['md','md','lg','lg']}>See how we can help with making your shopping experience and money management more ZEN.</Text>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <Link>
                                        <Image src="/playappstore/download-on-the-app-store.svg" />
                                    </Link>
                                    <Link>
                                        <Image src="/playappstore/google-play-store-badge-en.svg" />
                                    </Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="order" pt={['30px','','','150px']}>
                        <Image w={['','','','600px']} src="/Section/Headline.png" />
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Headline
