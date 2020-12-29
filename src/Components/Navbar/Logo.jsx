import React from "react";
import { Box, Text, Image, Stack, Link, isOpen } from "@chakra-ui/react";

export default function Logo(props) {
    const mystyle = {
        textDecoration: 'none'
    }
    return (
        <Box {...props}>
            <Stack direction="row" spacing="30px">
                <Image src="/zen_mastercard_logo-2.svg" />      
                <Box display={{ base: isOpen ? "block" : "none", md: "block" }} >
                    <Stack direction="row" mt="5px" fontSize="lg" >
                        <Link style={mystyle} color="gray.700" href="#">Personal</Link>
                        <Text>.</Text>
                        <Link style={mystyle} color="gray.500" href="#">Business</Link>
                    </Stack>
                </Box>
    
            </Stack>
        </Box>
  );
}
