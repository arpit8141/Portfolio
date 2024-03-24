import React from 'react'
import { Box, Card, Text, Heading, CardBody, Stack, StackDivider } from '@chakra-ui/react';


function Contact() {
    return (
        <Box>
            <Card>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Email
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Arpit74057@gmail.com
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Cell
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                8141056683
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}

export { Contact };