import React from 'react'
import {ChakraProvider, Container, Box, Stack, Image, Heading, Text, Link} from '@chakra-ui/react';

const Section7 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h="900px">
                <Stack direction={['column','column','row','row']} spacing={['30px','','','175px']} justify='center'>
                    <Box pt={['30px','','','150px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section6.png" />
                        </Box>
                    </Box>
                    <Box pt={['','','','200px']}>
                        <Stack direction="column" spacing="30px">
                            <Box maxW="390px">
                                <Heading as="h2" size="lg">Quick and easy account creation</Heading>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>Now, you might be thinking that it’s just like any other account creation… Long, tiresome and full of endless blanks to fill in. Well, it’s not.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>We have designed the whole process to make it the simplest and the shortest one ever conceived for a personal account. Download the app and see for yourself!</Text>
                            </Box>
                            <Box>
                                <Stack direction="row">
                                    <Link><Image src="/playappstore/download-on-the-app-store.svg" /></Link>
                                    <Link><Image src="/playappstore/google-play-store-badge-en.svg" /></Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section7
