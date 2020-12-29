import React from 'react'
import {ChakraProvider, Container, Box, Stack, Heading, Text, Center, Button, Image, Flex, Collapse} from '@chakra-ui/react';
import './Style.css'

const Section3 = () => {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
    return (
        <ChakraProvider>
            <Container maxW="1364px" maxH="auto" pb="100px">
                <Stack direction="column" spacing="30px" justify='center'>
                    <Box mt={['30px','','','100px']}>
                        <Stack direction="column" spacing="30px">
                            <Box textAlign={['left','left','center','center']}>
                                <Heading as="h2" size="lg">and cashback!</Heading>
                            </Box>
                            <Box>
                                <Center>
                                    <Text maxW="600px" textAlign={['left','left','center','center']} fontSize={['md','md','lg','lg']}>
                                        It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it. We gave it a thought and made cashback way more friendly. Up to 14% of what you spend using ZEN Mastercard® will materialize on your account right after the purchase. It's like you haggled some cash, despite you didn't have to. Just don't forget to use in-app cashback link.
                                    </Text>
                                </Center>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className="order">
                        <Center>
                            <Button size="md" onClick={handleToggle} height="48px" width="260px" border="2px" borderColor="gray.700" textColor="gray.700" borderRadius="30px">
                                Show  {show ? "less" : "more"} partners
                            </Button> 
                        </Center>
                    </Box>
                    <Box className="order">
                        <Box>
                            <Collapse startingHeight={200} in={show}>
                                <Flex
                                direction={['column', 'column', 'row', 'row']}
                                justify='center'       
                                css={{
                                    flexFlow: "row wrap"
                                }}
                                >                               
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-booking.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-aliexpress.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-allegro.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-zalando-lounge.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-lidl.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-mediamarkt.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-eurortvagd.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-groupon.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-banggood.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-gearbest.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-neonet.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-rosegal.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-geekbuying.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-zaful.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-oleole.svg" /></Flex>
                                    <Flex w={['150px','','','250px']} m={['1','','','4']} justify='center'><Image src="/Partner/logos-cashback-partners-tomtop.svg" /></Flex>  
                                </Flex>
                            </Collapse>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </ChakraProvider>
    )
}

export default Section3
