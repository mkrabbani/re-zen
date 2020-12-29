import React from 'react'
import {ChakraProvider, Container, Box, Stack, Heading, Text, Image} from '@chakra-ui/react';
import './Style.css';

const Section2 = () => {
    return (
        <ChakraProvider>
            <Container maxW="1364px" h="1000px">
                <Stack direction={['column','column','row','row']} spacing={['30px','','','108px']} justify='center'>
                    <Box className="order" pt={['30px','','','300px']}>
                        <Stack direction="column" spacing="30px">
                            <Box>
                                <Heading as="h2" size="lg">ZEN Care</Heading>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>Shopping online is usually a delightful experience. Until it's not.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.</Text>
                            </Box>
                            <Box maxW="493px" fontSize={['md','md','lg','lg']}>
                                <Text>But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured we’ll handle all of the transaction-related problems faster and with higher success rates. Where lone consumers can be ignored or dumped by dishonest merchants, ZEN doesn't get discouraged. ZEN persists.</Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="order" pt={['','','','200px']}>
                        <Box w={['','','','589px']}>
                            <Image src="/Section/section2.png" />
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section2
